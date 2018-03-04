(function () {

  function _accessor ( s ) {
    return ( typeof s === 'function' ) ? s : function ( d ) { return d[ s ]; };
  }

  function crunch ( data, min_needed_dist, get_x, get_y, get_j ) {

    min_needed_dist = min_needed_dist || 0.5;

    // step 1: group the values
    var rollup_rows = {},
        rollup_cols = {},
        xs = [],
        js = [],
        values = [];

    for ( var di=0,dl=data.length; di<dl; di++ ) {
      var item = data[ di ],
          x = get_x( item ),
          j = get_j( item );

      item.y = get_y( item );

      rollup_rows[ j ] = rollup_rows[ j ] || {};
      rollup_rows[ j ][ x ] = item;

      rollup_cols[ x ] = rollup_cols[ x ] || [];
      rollup_cols[ x ].push( item );

      xs.push( x );
      js.push( j );
    }

    var xs = d3.set( xs ).values().sort( d3.ascending );
    var facts = d3.set( js ).values().map(function ( j ) {
      return xs.map(function ( x ) {
        return rollup_rows[ j ][ x ];
      });
    });

    // step 2: "fan out" label positions to remove overlaps
    for ( var col_id in rollup_cols ) {

      var column = rollup_cols[ col_id ].sort(function ( a, b ) {
        var r = get_y( a ) - get_y( b );
        if ( r === 0 ) {
          if ( get_j( a ) > get_j( b ) ) {
            return -1;
          }
          if ( get_j( a ) < get_j( b ) ) {
            return 1;
          }
        }
        return r;
      });

      var improoving = true,
          steps = 0;

      while ( improoving ) {

        var last_gap_size = null,
            smallest_gap = null,
            smallest_gap_size = -Infinity;

        // compute distances
        for ( var i=0,l=column.length; i<l; i++ ) {
          var item = column[ i ],
              prev = column[ i - 1 ],
              next = column[ i + 1 ];
          // space above
          if ( !prev ) {
            item._top = Infinity;
          }
          else {
            item._top = item.y - prev.y;
            // remember it if it was important
            if ( !smallest_gap || smallest_gap_size > item._top ) {
              smallest_gap = [ item, prev ];
              smallest_gap_size = item._top;
            }
          }
          // space below
          if ( !next ) {
            item._bottom = Infinity;
          }
          else {
            item._bottom = next.y - item.y;
            // remember it if it was important
            if ( !smallest_gap || smallest_gap_size > item._bottom ) {
              smallest_gap = [ next, item ];
              smallest_gap_size = item._bottom;
            }
          }
        }
        // find the smallest gap
        if ( smallest_gap_size >= min_needed_dist || /* no overlaps present */
             steps > 1000 /* we're going nowhere fast */ ) {
          break;
        }
        steps++;

        // push items apart, aiming toward empty spaces
        var t = smallest_gap[ 0 ]._bottom + smallest_gap[ 1 ]._top,
            a = isFinite( t ) ? smallest_gap[ 0 ]._bottom / t : 1,
            b = isFinite( t ) ? smallest_gap[ 1 ]._top    / t : 1,
            force = min_needed_dist / 4;

        smallest_gap[ 0 ].y += force * a;
        smallest_gap[ 1 ].y -= force * b;

        // stop doing this when labels stop overlapping
        improoving = ( smallest_gap_size >= ( last_gap_size || 0 ) );

        last_gap_size = smallest_gap_size;
      }

    }

    return facts;

  }


  d3.layout.slopegraph = function () {

    var get_x = _accessor( 'x' ),
        get_y = _accessor( 'y' ),
        get_j = _accessor( Number ),
        data = [],
        cached,
        min_needed_dist;

    var layout = function ( d ) {
      if ( arguments.length ) {
        cached = undefined;
        data = d;
        return layout;
      }
      return data;
    };

    layout.data = layout;

    layout.j = function ( d ) {
      if ( arguments.length ) {
        get_j = _accessor( d );
        return this;
      }
      return get_j;
    };

    layout.x = function ( d ) {
      if ( arguments.length ) {
        get_x = _accessor( d );
        return this;
      }
      return get_x;
    };

    layout.y = function ( d ) {
      if ( arguments.length ) {
        get_y = _accessor( d );
        return this;
      }
      return get_y;
    };

    layout.textHeight = function ( h ) {
      if ( arguments.length ) {
        min_needed_dist = h;
        cached = undefined;
        return this;
      }
      return min_needed_dist;
    };

    layout.left = function ( d ) {
      return [];
    };

    layout.right = function ( d ) {
      return [];
    };

    layout.pairs = function ( d ) {
      return cached || (cached = crunch( data, min_needed_dist, get_x, get_y, get_j ));
    };

    return layout;

  };

})();
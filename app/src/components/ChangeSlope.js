import React, {Component} from 'react';
// import logo from './logo.svg';

// TODO: remove from package.json
// import * as d3 from 'd3';

// Reference: http://skedasis.com/d3/slopegraph/

const all_data = {
  "Win/Loss Ratio": {2008: {'Chennai Super Kings': 56,
    'Deccan Chargers': 14,
    'Delhi Daredevils': 50,
    'Kings XI Punjab': 66,
    'Kolkata Knight Riders': 46,
    'Mumbai Indians': 50,
    'Rajasthan Royals': 81,
    'Royal Challengers Bangalore': 28},
    2009: {'Chennai Super Kings': 57,
      'Deccan Chargers': 56,
      'Delhi Daredevils': 66,
      'Kings XI Punjab': 50,
      'Kolkata Knight Riders': 23,
      'Mumbai Indians': 38,
      'Rajasthan Royals': 46,
      'Royal Challengers Bangalore': 56},
    2010: {'Chennai Super Kings': 56,
      'Deccan Chargers': 50,
      'Delhi Daredevils': 50,
      'Kings XI Punjab': 28,
      'Kolkata Knight Riders': 50,
      'Mumbai Indians': 68,
      'Rajasthan Royals': 42,
      'Royal Challengers Bangalore': 50},
    2011: {'Chennai Super Kings': 68,
      'Deccan Chargers': 42,
      'Delhi Daredevils': 28,
      'Kings XI Punjab': 50,
      'Kochi Tuskers Kerala': 42,
      'Kolkata Knight Riders': 53,
      'Mumbai Indians': 62,
      'Pune Warriors': 28,
      'Rajasthan Royals': 46,
      'Royal Challengers Bangalore': 62},
    2012: {'Chennai Super Kings': 55,
      'Deccan Chargers': 26,
      'Delhi Daredevils': 61,
      'Kings XI Punjab': 50,
      'Kolkata Knight Riders': 70,
      'Mumbai Indians': 58,
      'Pune Warriors': 25,
      'Rajasthan Royals': 43,
      'Royal Challengers Bangalore': 53},
    2013: {'Chennai Super Kings': 66,
      'Delhi Daredevils': 18,
      'Kings XI Punjab': 50,
      'Kolkata Knight Riders': 37,
      'Mumbai Indians': 68,
      'Pune Warriors': 25,
      'Rajasthan Royals': 61,
      'Royal Challengers Bangalore': 56,
      'Sunrisers Hyderabad': 58},
    2014: {'Chennai Super Kings': 62,
      'Delhi Daredevils': 14,
      'Kings XI Punjab': 70,
      'Kolkata Knight Riders': 68,
      'Mumbai Indians': 46,
      'Rajasthan Royals': 50,
      'Royal Challengers Bangalore': 35,
      'Sunrisers Hyderabad': 42},
    2015: {'Chennai Super Kings': 58,
      'Delhi Daredevils': 35,
      'Kings XI Punjab': 21,
      'Kolkata Knight Riders': 53,
      'Mumbai Indians': 62,
      'Rajasthan Royals': 50,
      'Royal Challengers Bangalore': 50,
      'Sunrisers Hyderabad': 50},
    2016: {'Delhi Daredevils': 50,
      'Gujarat Lions': 56,
      'Kings XI Punjab': 28,
      'Kolkata Knight Riders': 53,
      'Mumbai Indians': 50,
      'Rising Pune Supergiants': 35,
      'Royal Challengers Bangalore': 56,
      'Sunrisers Hyderabad': 64}},
  "Average Score": {2008: {'Chennai Super Kings': 157,
    'Deccan Chargers': 159,
    'Delhi Daredevils': 151,
    'Kings XI Punjab': 164,
    'Kolkata Knight Riders': 149,
    'Mumbai Indians': 148,
    'Rajasthan Royals': 162,
    'Royal Challengers Bangalore': 141},
    2009: {'Chennai Super Kings': 159,
      'Deccan Chargers': 150,
      'Delhi Daredevils': 142,
      'Kings XI Punjab': 137,
      'Kolkata Knight Riders': 136,
      'Mumbai Indians': 145,
      'Rajasthan Royals': 131,
      'Royal Challengers Bangalore': 142},
    2010: {'Chennai Super Kings': 162,
      'Deccan Chargers': 148,
      'Delhi Daredevils': 153,
      'Kings XI Punjab': 163,
      'Kolkata Knight Riders': 153,
      'Mumbai Indians': 171,
      'Rajasthan Royals': 155,
      'Royal Challengers Bangalore': 150},
    2011: {'Chennai Super Kings': 160,
      'Deccan Chargers': 152,
      'Delhi Daredevils': 149,
      'Kings XI Punjab': 158,
      'Kochi Tuskers Kerala': 135,
      'Kolkata Knight Riders': 134,
      'Mumbai Indians': 143,
      'Pune Warriors': 126,
      'Rajasthan Royals': 129,
      'Royal Challengers Bangalore': 154},
    2012: {'Chennai Super Kings': 157,
      'Deccan Chargers': 154,
      'Delhi Daredevils': 146,
      'Kings XI Punjab': 149,
      'Kolkata Knight Riders': 147,
      'Mumbai Indians': 144,
      'Pune Warriors': 145,
      'Rajasthan Royals': 157,
      'Royal Challengers Bangalore': 164},
    2013: {'Chennai Super Kings': 154,
      'Delhi Daredevils': 140,
      'Kings XI Punjab': 151,
      'Kolkata Knight Riders': 143,
      'Mumbai Indians': 156,
      'Pune Warriors': 141,
      'Rajasthan Royals': 150,
      'Royal Challengers Bangalore': 162,
      'Sunrisers Hyderabad': 136},
    2014: {'Chennai Super Kings': 165,
      'Delhi Daredevils': 148,
      'Kings XI Punjab': 175,
      'Kolkata Knight Riders': 156,
      'Mumbai Indians': 156,
      'Rajasthan Royals': 154,
      'Royal Challengers Bangalore': 149,
      'Sunrisers Hyderabad': 150},
    2015: {'Chennai Super Kings': 160,
      'Delhi Daredevils': 154,
      'Kings XI Punjab': 144,
      'Kolkata Knight Riders': 157,
      'Mumbai Indians': 170,
      'Rajasthan Royals': 153,
      'Royal Challengers Bangalore': 144,
      'Sunrisers Hyderabad': 157},
    2016: {'Delhi Daredevils': 150,
      'Gujarat Lions': 153,
      'Kings XI Punjab': 152,
      'Kolkata Knight Riders': 150,
      'Mumbai Indians': 156,
      'Rising Pune Supergiants': 147,
      'Royal Challengers Bangalore': 186,
      'Sunrisers Hyderabad': 157}},
};

let d3;

const WIDTH = 500;
const HEIGHT = 750;

const LEFT_MARGIN = 150;
const RIGHT_MARGIN = 150;
const TOP_MARGIN = 10;
const BOTTOM_MARGIN = 50;

// const min_year = 1985;
// const max_year = 1986;

class ChangeSlope extends Component {
  static _to_data(y1,y2,d) {
    const y1d = d[y1];
    const y2d = d[y2];
    const _d = {};

    for (let k1 in y1d) {
      _d[k1] = {};
      _d[k1]['left'] = y1d[k1];
      _d[k1]['right'] = 0;
      _d[k1]['label'] = k1;
    }

    for (let k2 in y2d) {
      if (!_d.hasOwnProperty(k2)) {
        _d[k2] = {};
        _d[k2].left = 0;
        _d[k2]['label'] = k2;
      }
      _d[k2].right = y2d[k2];
      if (isNaN(_d[k2].right)) {
        _d[k2].right = 0;
      }
    }

    // let Y1 = y1;
    // let Y2 = y2;

    d = [];
    let di;

    for (let k in _d){
      di = _d[k];
      d.push(di)
    }

    return d;
  }

  static _max_key(v){
    let vi, max_side;
    let _m = undefined;

    for (let i = 0; i < v.length; i += 1){
      vi = v[i];
      max_side = Math.max(vi.left, vi.right)
      if (_m === undefined || max_side > _m) {
        _m = max_side;
      }
    }
    return _m;
  }

  static _min_key(v){
    let vi, min_side;
    let _m = undefined;

    for (let i = 0; i < v.length; i += 1){
      vi = v[i];
      min_side = Math.min(vi.left, vi.right)
      if (_m === undefined || min_side < _m) {
        _m = min_side;
      }
    }
    return _m;
  }

  static _min_max(v){
    let vi, min_side, max_side;
    let _max = undefined;
    let _min = undefined;


    for (let i = 0; i < v.length; i += 1){
      vi = v[i];
      min_side = Math.min(vi.left_coord, vi.right_coord);
      max_side = Math.max(vi.left_coord, vi.right_coord);

      if (_min === undefined || min_side < _min) {
        _min = min_side;
      }
      if (_max === undefined || max_side > _max) {
        _max = max_side;
      }


    }
    return [_min, _max];
  }

  constructor(props) {
    super(props);

    this.state = {
      leftYear: 2008,
      rightYear: 2009,
      format: 'Win/Loss Ratio',
    };

    this.onLeftYearChange = this.onLeftYearChange.bind(this);
    this.onRightYearChange = this.onRightYearChange.bind(this);
    this.onFormatChange = this.onFormatChange.bind(this);
  };

  componentDidMount() {
    d3 = window.d3;

    /*
    let Y1 = 1995;
    let Y2 = 1996;

    const ELIGIBLE_SIZE = HEIGHT - TOP_MARGIN - BOTTOM_MARGIN;
    */

    this.update()
  }

  update() {
    try {
      d3.selectAll('.app-change-slope-content svg').remove()
    } catch (e) {
      //
    }

    let data = ChangeSlope._to_data(this.state.leftYear, this.state.rightYear, all_data[this.state.format]);
    console.log('data', data);

    let _y = d3.scale.linear()
        .domain([ChangeSlope._min_key(data), ChangeSlope._max_key(data)])
        .range([TOP_MARGIN, HEIGHT-BOTTOM_MARGIN])

    function y(d,i){
      return HEIGHT - _y(d)
    }

    for (let i = 0; i < data.length; i += 1){
      data[i].left_coord = y(data[i].left);
      data[i].right_coord = y(data[i].right);
    }

    function _slopegraph_preprocess(d){
      // computes y coords for each data point
      // create two separate object arrays for each side, then order them together, and THEN run the shifting alg.

      let offset;

      let font_size = 15;
      let l = d.length;

      let max = ChangeSlope._max_key(d);
      let min = ChangeSlope._min_key(d);
      let range = max-min;

      //
      let left = [];
      let right = [];
      let di;
      for (let i = 0; i < d.length; i += 1) {
        di = d[i];
        left.push({label:di.label, value:di.left, side:'left', coord:di.left_coord})
        right.push({label:di.label, value:di.right, side:'right', coord: di.right_coord})
      }

      let both = left.concat(right)
      both.sort(function(a,b){
        if (a.value > b.value){
          return 1
        } else if (a.value < b.value) {
          return -1
        } else {
          if (a.label > b.label) {
            return 1
          } else if (a.lable < b.label) {
            return -1
          } else {
            return 0
          }
        }
      }).reverse();

      let new_data = {};
      let side, label, val, coord;
      for (let i = 0; i < both.length; i += 1) {

        label = both[i].label;
        side = both[i].side;
        val = both[i].value;
        coord = both[i].coord;

        if (!new_data.hasOwnProperty(both[i].label)) {
          new_data[label] = {}
        }
        new_data[label][side] = val;

        if (i > 0) {
          if (coord - font_size < both[i-1].coord ||
              !(val === both[i-1].value && side !== both[i-1].side)) {

            new_data[label][side + '_coord'] = coord + font_size;

            for (let j = i; j < both.length; j += 1) {
              both[j].coord = both[j].coord + font_size;
            }
          } else {
            new_data[label][side + '_coord'] = coord;
          }

          if (val === both[i-1].value && side !== both[i-1].side) {
            new_data[label][side + '_coord'] = both[i-1].coord;
          }
        } else {
          new_data[label][side + '_coord'] = coord;
        }

      }
      d = [];

      for (let label in new_data){
        val = new_data[label];
        val.label = label;
        d.push(val)
      }

      return d;
    }

    data = _slopegraph_preprocess(data);
    let min, max;
    let _ = ChangeSlope._min_max(data);
    min = _[0];
    max = _[1];

    const sg = d3.select('.app-change-slope-content')
        .append('svg:svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    _y = d3.scale.linear()
        .domain([max, min])
        .range([TOP_MARGIN, HEIGHT-BOTTOM_MARGIN])

    function y(d,i){
      return HEIGHT - _y(d)
    }

    // left side labels
    sg.selectAll('.left_labels')
        .data(data).enter().append('svg:text')
        .attr('x', LEFT_MARGIN-35)
        .attr('y', function(d,i){
          return y(d.left_coord)
        })
        .attr('dy', '.35em')
        .attr('font-size', 10)
        .attr('font-weight', 'bold')
        .attr('text-anchor', 'end')
        .text(function(d,i){ return d.label})
        .attr('fill', 'black')

    // left side values
    sg.selectAll('.left_values')
        .data(data).enter().append('svg:text')
        .attr('x', LEFT_MARGIN-10)
        .attr('y', function(d,i){
          return y(d.left_coord)
        })
        .attr('dy', '.35em')
        .attr('font-size', 10)
        .attr('text-anchor', 'end')
        .text(function(d,i){ return d.left})
        .attr('fill', 'black');

    // right side labels
    sg.selectAll('.right_labels')
        .data(data).enter().append('svg:text')
        .attr('x', WIDTH-RIGHT_MARGIN)
        .attr('y', function(d,i){
          return y(d.right_coord)
        })
        .attr('dy', '.35em')
        .attr('dx', 35)
        .attr('font-weight', 'bold')
        .attr('font-size', 10)
        .text(function(d,i){ return d.label})
        .attr('fill', 'black');

    // right side values
    sg.selectAll('.right_values')
        .data(data).enter().append('svg:text')
        .attr('x', WIDTH-RIGHT_MARGIN)
        .attr('y', function(d,i){
          return y(d.right_coord)
        })
        .attr('dy', '.35em')
        .attr('dx', 10)
        .attr('font-size', 10)
        .text(function(d,i){ return d.right})
        .attr('fill', 'black');

    /*
    // left side year value
    sg.append('svg:text')
        .attr('x', LEFT_MARGIN)
        .attr('y', TOP_MARGIN/2)
        .attr('text-anchor', 'end')
        .attr('opacity', .5)
        .text(Y1);

    // right side year value
    sg.append('svg:text')
        .attr('x', WIDTH-RIGHT_MARGIN)
        .attr('y', TOP_MARGIN/2)
        .attr('opacity', .5)
        .text(Y2);
    */

    // separation line at top
    sg.append('svg:line')
        .attr('x1', LEFT_MARGIN/2)
        .attr('x2', WIDTH-RIGHT_MARGIN/2)
        .attr('y1', TOP_MARGIN*2/3)
        .attr('y2', TOP_MARGIN*2/3)
        .attr('stroke', 'black')
        .attr('opacity', .5);

    /*
    // selection type
    sg.append('svg:text')
        .attr('x', WIDTH/2)
        .attr('y', TOP_MARGIN/2)
        .attr('text-anchor', 'middle')
        .text('Average Score')
        .attr('font-variant', 'small-caps');
    */

    // cross lines
    sg.selectAll('.slopes')
        .data(data).enter().append('svg:line')
        .attr('x1', LEFT_MARGIN)
        .attr('x2', WIDTH-RIGHT_MARGIN)
        .attr('y1', function(d,i){
          return y(d.left_coord)
        })
        .attr('y2', function(d,i){
          return y(d.right_coord)
        })
        .attr('opacity', .6)
        .attr('stroke', 'black')
  }

  onLeftYearChange() {
    let tValue;

    try {
      tValue = document.querySelector(".app-change-slope-selector-left").value;
    } catch (e) {
      tValue = 2008
    }

    this.setState({
      leftYear: tValue,
    }, () => {
      console.log('change in left year', this.state.leftYear, this.state.rightYear);
      this.update();
    });
  }

  onRightYearChange() {
    let tValue;

    try {
      tValue = document.querySelector(".app-change-slope-selector-right").value;
    } catch (e) {
      tValue = 2009
    }

    this.setState({
      rightYear: tValue,
    }, () => {
      console.log('change in right year', this.state.leftYear, this.state.rightYear);
      this.update();
    });
  }

  onFormatChange() {
    let tValue;

    try {
      tValue = document.querySelector(".app-change-slope-selector-center").value;
    } catch (e) {
      tValue = "Win/Loss Ratio"
    }

    this.setState({
      format: tValue,
    }, () => {
      console.log('change in format', this.state.leftYear, this.state.rightYear);
      this.update();
    });
  }

  render() {
    const pStyle = {
      textAlign: 'center',
      width: 'max-content',
      margin: 'auto',
    };

    return (
        <div className='app-change-slope'>
          <h4 className="app-title">Performance Change with Time</h4>
          <p style={pStyle}>Mumbai Indians started slowly in the early seasons of the IPL but ended up winning it 3 times.</p>
          <p style={pStyle}>Rajasthan Royals won the first IPL trophy but finished 6th in the second season.</p>
          <br/>
          <p style={pStyle}>To summarize it all, the performance of a team varies every year.</p>
          <p style={pStyle}>Use the following chart to see the changes in "Average Scores" and "Win/Loss Ratio" of teams.</p>
          <div className="app-change-slope-selector">
            <select className="app-change-slope-selector-left" onChange={this.onLeftYearChange}>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
            </select>
            &nbsp;
            &nbsp;
            &nbsp;
            <select className="app-change-slope-selector-center" onChange={this.onFormatChange}>
              <option>Win/Loss Ratio</option>
              <option>Average Score</option>
            </select>
            &nbsp;
            &nbsp;
            &nbsp;
            <select className="app-change-slope-selector-right" onChange={this.onRightYearChange}>
              <option>2008</option>
              <option selected="selected">2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
            </select>
          </div>
          <div className='app-change-slope-content'/>
        </div>
    );
  }
}

export default ChangeSlope;

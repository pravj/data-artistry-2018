import React, {Component} from 'react';

const teams = [
  {team: "Kolkata Knight Riders", code: "KKR"},
  {team: "Chennai Super Kings", code: "CSK"},
  {team: "Rajasthan Royals", code: "RR"},
  {team: "Mumbai Indians", code: "MI"},
  {team: "Deccan Chargers", code: ""},
  {team: "Kings XI Punjab", code: ""},
  {team: "Royal Challengers Bangalore", code: "RCB"},
  {team: "Delhi Daredevils", code: "DD"},
  {team: "Kochi Tuskers Kerala", code: ""},
  {team: "Pune Warriors", code: ""},
  {team: "Sunrisers Hyderabad", code: ""},
  {team: "Rising Pune Supergiants", code: ""},
  {team: "Gujarat Lions", code: ""},
];

const grounds = {
  "M Chinnaswamy Stadium": {
    "lat": 12.9788191,
    "lang": 77.5974045
  },
  "Punjab Cricket Association Stadium, Mohali": {
    "lat": 30.6908936,
    "lang": 76.7353423
  },
  "Feroz Shah Kotla": {
    "lat": 28.637743,
    "lang": 77.240835
  },
  "Wankhede Stadium": {
    "lat": 18.9388278,
    "lang": 72.8234744
  },
  "Eden Gardens": {
    "lat": 22.564613,
    "lang": 88.3410758
  },
  "Sawai Mansingh Stadium": {
    "lat": 26.8940477,
    "lang": 75.8010644
  },
  "Rajiv Gandhi International Stadium, Uppal": {
    "lat": 17.4065313,
    "lang": 78.5482817
  },
  "MA Chidambaram Stadium, Chepauk": {
    "lat": 13.0628127,
    "lang": 80.2770915
  },
  "Dr DY Patil Sports Academy": {
    "lat": 19.042066,
    "lang": 73.0244567
  },
  "Sardar Patel Stadium, Motera": {
    "lat": 23.041856,
    "lang": 72.5617455
  },
  "Barabati Stadium": {
    "lat": 20.4807163,
    "lang": 85.8663635
  },
  "Vidarbha Cricket Association Stadium, Jamtha": {
    "lat": 21.0134971,
    "lang": 79.037367
  },
  "Himachal Pradesh Cricket Association Stadium": {
    "lat": 32.1976142,
    "lang": 76.3237065
  },
  "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium": {
    "lat": 17.7976774,
    "lang": 83.3501309
  },
  "Subrata Roy Sahara Stadium": {
    "lat": 18.674505,
    "lang": 73.704336
  },
  "Shaheed Veer Narayan Singh International Stadium": {
    "lat": 21.2034321,
    "lang": 81.8217358
  },
  "JSCA International Stadium Complex": {
    "lat": 23.3102057,
    "lang": 85.2726458
  },
  "Maharashtra Cricket Association Stadium": {
    "lat": 18.674505,
    "lang": 73.704336
  },
  "Saurashtra Cricket Association Stadium": {
    "lat": 22.3628812,
    "lang": 70.7077379
  },
  "Nehru Stadium": {
    "lat": 9.9972207,
    "lang": 76.2986478
  },
  "Holkar Cricket Stadium": {
    "lat": 22.7242592,
    "lang": 75.8774681
  },
  "Green Park": {
    "lat": 26.4822328,
    "lang": 80.3455433
  },
  "Brabourne Stadium": {
    "lat": 18.9322663,
    "lang": 72.8225507
  }
};

const matches = {
  'Kolkata Knight Riders': [{'ground': 'M Chinnaswamy Stadium', 'won': 4, 'lost': 4}, {'ground': 'Barabati Stadium', 'won': 3, 'lost': 0}, {'ground': 'Eden Gardens', 'won': 33, 'lost': 18}, {'ground': 'JSCA International Stadium Complex', 'won': 1, 'lost': 2}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 0, 'lost': 2}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 5}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 4, 'lost': 1}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 2, 'lost': 0}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 0, 'lost': 1}, {'ground': 'Brabourne Stadium', 'won': 0, 'lost': 2}, {'ground': 'Green Park', 'won': 0, 'lost': 1}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 0, 'lost': 1}, {'ground': 'Nehru Stadium', 'won': 0, 'lost': 1}, {'ground': 'Sawai Mansingh Stadium', 'won': 1, 'lost': 3}, {'ground': 'Dr DY Patil Sports Academy', 'won': 2, 'lost': 0}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 3, 'lost': 0}, {'ground': 'Feroz Shah Kotla', 'won': 4, 'lost': 3}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 2, 'lost': 5}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 3, 'lost': 2}],
  'Chennai Super Kings': [{'ground': 'M Chinnaswamy Stadium', 'won': 4, 'lost': 3}, {'ground': 'Eden Gardens', 'won': 4, 'lost': 5}, {'ground': 'JSCA International Stadium Complex', 'won': 3, 'lost': 2}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 0, 'lost': 2}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 1, 'lost': 0}, {'ground': 'Brabourne Stadium', 'won': 1, 'lost': 1}, {'ground': 'Sawai Mansingh Stadium', 'won': 2, 'lost': 2}, {'ground': 'Dr DY Patil Sports Academy', 'won': 3, 'lost': 1}, {'ground': 'Feroz Shah Kotla', 'won': 5, 'lost': 1}, {'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 1, 'lost': 1}, {'ground': 'Barabati Stadium', 'won': 0, 'lost': 1}, {'ground': 'Vidarbha Cricket Association Stadium, Jamtha', 'won': 0, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 4, 'lost': 6}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 2, 'lost': 1}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 0, 'lost': 1}, {'ground': 'Nehru Stadium', 'won': 0, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 1}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 33, 'lost': 14}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 3, 'lost': 1}],
  'Rajasthan Royals': [{'ground': 'M Chinnaswamy Stadium', 'won': 3, 'lost': 3}, {'ground': 'Eden Gardens', 'won': 1, 'lost': 5}, {'ground': 'JSCA International Stadium Complex', 'won': 0, 'lost': 1}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 7, 'lost': 5}, {'ground': 'Vidarbha Cricket Association Stadium, Jamtha', 'won': 1, 'lost': 0}, {'ground': 'Holkar Cricket Stadium', 'won': 0, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 2, 'lost': 4}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 2, 'lost': 2}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 1, 'lost': 1}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 1, 'lost': 0}, {'ground': 'Brabourne Stadium', 'won': 2, 'lost': 2}, {'ground': 'Sawai Mansingh Stadium', 'won': 24, 'lost': 9}, {'ground': 'Dr DY Patil Sports Academy', 'won': 1, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 1}, {'ground': 'Feroz Shah Kotla', 'won': 4, 'lost': 3}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 1, 'lost': 5}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 3, 'lost': 3}],
  'Mumbai Indians': [{'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 0, 'lost': 1}, {'ground': 'M Chinnaswamy Stadium', 'won': 6, 'lost': 2}, {'ground': 'Barabati Stadium', 'won': 0, 'lost': 1}, {'ground': 'Eden Gardens', 'won': 8, 'lost': 2}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 1, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 29, 'lost': 16}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 4, 'lost': 2}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 2, 'lost': 2}, {'ground': 'Brabourne Stadium', 'won': 6, 'lost': 2}, {'ground': 'Green Park', 'won': 0, 'lost': 1}, {'ground': 'Sawai Mansingh Stadium', 'won': 2, 'lost': 3}, {'ground': 'Dr DY Patil Sports Academy', 'won': 5, 'lost': 2}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 2, 'lost': 0}, {'ground': 'Feroz Shah Kotla', 'won': 2, 'lost': 6}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 3, 'lost': 3}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 4, 'lost': 3}],
  'Deccan Chargers': [{'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 2, 'lost': 0}, {'ground': 'Barabati Stadium', 'won': 3, 'lost': 1}, {'ground': 'M Chinnaswamy Stadium', 'won': 1, 'lost': 2}, {'ground': 'Eden Gardens', 'won': 0, 'lost': 3}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 0, 'lost': 1}, {'ground': 'Vidarbha Cricket Association Stadium, Jamtha', 'won': 2, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 1}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 3, 'lost': 15}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 0, 'lost': 2}, {'ground': 'Brabourne Stadium', 'won': 0, 'lost': 1}, {'ground': 'Nehru Stadium', 'won': 1, 'lost': 0}, {'ground': 'Sawai Mansingh Stadium', 'won': 0, 'lost': 2}, {'ground': 'Dr DY Patil Sports Academy', 'won': 2, 'lost': 4}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 0}, {'ground': 'Feroz Shah Kotla', 'won': 2, 'lost': 2}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 2, 'lost': 2}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 0, 'lost': 2}],
  'Kings XI Punjab': [{'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 5, 'lost': 4}, {'ground': 'Barabati Stadium', 'won': 1, 'lost': 2}, {'ground': 'M Chinnaswamy Stadium', 'won': 4, 'lost': 5}, {'ground': 'Eden Gardens', 'won': 2, 'lost': 6}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 1, 'lost': 0}, {'ground': 'Holkar Cricket Stadium', 'won': 1, 'lost': 0}, {'ground': 'Wankhede Stadium', 'won': 4, 'lost': 4}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 4, 'lost': 3}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 0, 'lost': 3}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 1, 'lost': 1}, {'ground': 'Brabourne Stadium', 'won': 0, 'lost': 1}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'Sawai Mansingh Stadium', 'won': 0, 'lost': 4}, {'ground': 'Dr DY Patil Sports Academy', 'won': 0, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 1}, {'ground': 'Feroz Shah Kotla', 'won': 4, 'lost': 4}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 2, 'lost': 3}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 20, 'lost': 22}],
  'Royal Challengers Bangalore': [{'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 0, 'lost': 1}, {'ground': 'M Chinnaswamy Stadium', 'won': 29, 'lost': 27}, {'ground': 'Eden Gardens', 'won': 3, 'lost': 4}, {'ground': 'JSCA International Stadium Complex', 'won': 1, 'lost': 2}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 1, 'lost': 0}, {'ground': 'Vidarbha Cricket Association Stadium, Jamtha', 'won': 0, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 3, 'lost': 4}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 2, 'lost': 5}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 2, 'lost': 0}, {'ground': 'Brabourne Stadium', 'won': 1, 'lost': 0}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 1, 'lost': 0}, {'ground': 'Nehru Stadium', 'won': 1, 'lost': 0}, {'ground': 'Sawai Mansingh Stadium', 'won': 3, 'lost': 2}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 0, 'lost': 1}, {'ground': 'Dr DY Patil Sports Academy', 'won': 1, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 2, 'lost': 0}, {'ground': 'Feroz Shah Kotla', 'won': 4, 'lost': 2}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 2, 'lost': 6}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 3, 'lost': 3}],
  'Delhi Daredevils': [{'ground': 'Himachal Pradesh Cricket Association Stadium', 'won': 1, 'lost': 2}, {'ground': 'M Chinnaswamy Stadium', 'won': 3, 'lost': 4}, {'ground': 'Barabati Stadium', 'won': 0, 'lost': 1}, {'ground': 'Eden Gardens', 'won': 1, 'lost': 5}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 1, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 5}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 4, 'lost': 1}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 1, 'lost': 2}, {'ground': 'Brabourne Stadium', 'won': 0, 'lost': 2}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 4, 'lost': 2}, {'ground': 'Nehru Stadium', 'won': 1, 'lost': 0}, {'ground': 'Sawai Mansingh Stadium', 'won': 1, 'lost': 3}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'Dr DY Patil Sports Academy', 'won': 1, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 2}, {'ground': 'Feroz Shah Kotla', 'won': 19, 'lost': 30}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 2, 'lost': 5}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 1, 'lost': 3}],
  'Kochi Tuskers Kerala': [{'ground': 'M Chinnaswamy Stadium', 'won': 0, 'lost': 1}, {'ground': 'Eden Gardens', 'won': 1, 'lost': 0}, {'ground': 'Nehru Stadium', 'won': 2, 'lost': 3}, {'ground': 'Sawai Mansingh Stadium', 'won': 0, 'lost': 1}, {'ground': 'Dr DY Patil Sports Academy', 'won': 0, 'lost': 1}, {'ground': 'Holkar Cricket Stadium', 'won': 1, 'lost': 1}, {'ground': 'Feroz Shah Kotla', 'won': 1, 'lost': 0}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 0, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 0}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 0, 'lost': 0}],
  'Pune Warriors': [{'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 1, 'lost': 1}, {'ground': 'M Chinnaswamy Stadium', 'won': 0, 'lost': 3}, {'ground': 'Barabati Stadium', 'won': 0, 'lost': 1}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 0, 'lost': 1}, {'ground': 'Eden Gardens', 'won': 0, 'lost': 1}, {'ground': 'Sawai Mansingh Stadium', 'won': 0, 'lost': 3}, {'ground': 'JSCA International Stadium Complex', 'won': 1, 'lost': 0}, {'ground': 'Dr DY Patil Sports Academy', 'won': 2, 'lost': 5}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 4, 'lost': 12}, {'ground': 'Feroz Shah Kotla', 'won': 1, 'lost': 1}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 1, 'lost': 2}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 2}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 1, 'lost': 2}],
  'Sunrisers Hyderabad': [{'ground': 'M Chinnaswamy Stadium', 'won': 2, 'lost': 3}, {'ground': 'Eden Gardens', 'won': 0, 'lost': 4}, {'ground': 'JSCA International Stadium Complex', 'won': 1, 'lost': 0}, {'ground': 'Sardar Patel Stadium, Motera', 'won': 1, 'lost': 0}, {'ground': 'Wankhede Stadium', 'won': 0, 'lost': 2}, {'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 14, 'lost': 9}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 3, 'lost': 2}, {'ground': 'Brabourne Stadium', 'won': 1, 'lost': 0}, {'ground': 'Shaheed Veer Narayan Singh International Stadium', 'won': 1, 'lost': 1}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'Sawai Mansingh Stadium', 'won': 0, 'lost': 1}, {'ground': 'Subrata Roy Sahara Stadium', 'won': 1, 'lost': 0}, {'ground': 'Feroz Shah Kotla', 'won': 4, 'lost': 1}, {'ground': 'MA Chidambaram Stadium, Chepauk', 'won': 0, 'lost': 2}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 3, 'lost': 0}],
  'Rising Pune Supergiants': [{'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 1, 'lost': 0}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 0, 'lost': 4}, {'ground': 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium', 'won': 2, 'lost': 1}, {'ground': 'M Chinnaswamy Stadium', 'won': 0, 'lost': 1}, {'ground': 'Eden Gardens', 'won': 0, 'lost': 1}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 0, 'lost': 1}, {'ground': 'Feroz Shah Kotla', 'won': 1, 'lost': 0}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 0}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 0, 'lost': 1}],
  'Gujarat Lions': [{'ground': 'Rajiv Gandhi International Stadium, Uppal', 'won': 0, 'lost': 1}, {'ground': 'Maharashtra Cricket Association Stadium', 'won': 1, 'lost': 0}, {'ground': 'M Chinnaswamy Stadium', 'won': 0, 'lost': 2}, {'ground': 'Green Park', 'won': 2, 'lost': 0}, {'ground': 'Eden Gardens', 'won': 1, 'lost': 0}, {'ground': 'Saurashtra Cricket Association Stadium', 'won': 2, 'lost': 3}, {'ground': 'Feroz Shah Kotla', 'won': 1, 'lost': 1}, {'ground': 'Wankhede Stadium', 'won': 1, 'lost': 0}, {'ground': 'Punjab Cricket Association Stadium, Mohali', 'won': 1, 'lost': 0}],
};

const mapboxgl = window.mapboxgl;
let map;
let markers = [];

class IndianGrounds extends Component {
  static getDescription(teamName) {
    switch (teamName) {
      case "Kolkata Knight Riders": {
        return "KKR"
      } default: {
      return "DEFAULT"
    }
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedTeam: teams[0].team,
      description: ""
    };

    this.onTeamChange = this.onTeamChange.bind(this);
    this.addGroundMarkers = this.addGroundMarkers.bind(this);
  };

  addGroundMarkers(teamName) {
    for(let i = 0; i < markers.length; i++) {
      markers[i].remove()
    }

    const geojson = {
      type: 'FeatureCollection',
      features: []
    };

    const teamGrounds = matches[teamName];

    for (let i = 0; i < teamGrounds.length; i++) {
      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [grounds[teamGrounds[i].ground].lang, grounds[teamGrounds[i].ground].lat],
        },
        properties: {
          title: 'Won ' + teamGrounds[i].won + ' Lost ' + teamGrounds[i].lost,
          description: teamGrounds[i].ground,
          won: teamGrounds[i].won,
          lost: teamGrounds[i].lost,
        }
      };

      geojson.features.push(feature);
    }

    let totalWon = 0;
    let totalLost = 0;
    for (let i = 0; i < teamGrounds.length; i++) {
      totalWon += teamGrounds[i].won;
      totalLost += teamGrounds[i].won;
    }

    // add markers to map
    // const t = [];
    markers = [];
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = marker.properties.won >= marker.properties.lost ? 'ground-marker-green' : 'ground-marker-red';

      const upper = marker.properties.won >= marker.properties.lost ? marker.properties.won : marker.properties.lost;
      const lower = marker.properties.won + marker.properties.lost;
      el.style.width = (20 * (upper/lower)) + 'px';
      el.style.height = (20 * (upper/lower)) + 'px';

      // make a marker for each feature and add to the map
      const m = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
              .setHTML('<br><p>' + marker.properties.title + '</p><p>' + marker.properties.description + '</p>'))
          .addTo(map);

      markers.push(m);
    });
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdmoiLCJhIjoiNjc1YTVjYTEzMjAyNjU4ZTgwNjQyMDQwNzgxNTc5MGMifQ.bEvQyBRzIuy5S_hmpsPLuA';

    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [78.96288, 20.59],
      zoom: 3
    });

    this.addGroundMarkers(this.state.selectedTeam)
  }

  onTeamChange() {
    let tValue;

    try {
      tValue = document.querySelector(".app-ground-performance-selector select").value;
    } catch (e) {
      tValue = teams[0].team
    }

    this.setState({
      selectedTeam: tValue,
    }, () => {
      this.addGroundMarkers(tValue)
    });
  }

  render() {
    return (
        <div id="app-ground-performance">
          <h4 className="app-title">IPL teams on Indian Grounds</h4>
          <div className="app-ground-performance-selector">
            <select onChange={this.onTeamChange}>
              {teams.map((t, i) => <option key={i}>{t.team}</option>)}
            </select>
          </div>
          <div className="app-ground-performance-description">
            {IndianGrounds.getDescription(this.state.selectedTeam)}
          </div>
          <div id="map"/>
        </div>
    );
  }
}

export default IndianGrounds;

import React, {Component} from 'react';

let d3;

const teamsData = {
  'Kolkata Knight Riders': {'code': 'KKR', 'team': 'Kolkata Knight Riders', 'total_match': 132, 'won_toss': 69, 'won_toss_won_match': 38, 'won_toss_lost_match': 31, 'lost_toss': 63, 'lost_toss_won_match': 30, 'lost_toss_lost_match': 33},
  'Chennai Super Kings': {'code': 'CSK', 'team': 'Chennai Super Kings', 'total_match': 131, 'won_toss': 66, 'won_toss_won_match': 42, 'won_toss_lost_match': 24, 'lost_toss': 65, 'lost_toss_won_match': 37, 'lost_toss_lost_match': 28},
  'Rajasthan Royals': {'code': 'RR', 'team': 'Rajasthan Royals', 'total_match': 118, 'won_toss': 63, 'won_toss_won_match': 34, 'won_toss_lost_match': 29, 'lost_toss': 55, 'lost_toss_won_match': 29, 'lost_toss_lost_match': 26},
  'Mumbai Indians': {'code': 'MI', 'team': 'Mumbai Indians', 'total_match': 140, 'won_toss': 74, 'won_toss_won_match': 41, 'won_toss_lost_match': 33, 'lost_toss': 66, 'lost_toss_won_match': 39, 'lost_toss_lost_match': 27},
  'Deccan Chargers': {'code': 'DC', 'team': 'Deccan Chargers', 'total_match': 75, 'won_toss': 43, 'won_toss_won_match': 19, 'won_toss_lost_match': 24, 'lost_toss': 32, 'lost_toss_won_match': 10, 'lost_toss_lost_match': 22},
  'Kings XI Punjab': {'code': 'KXIP', 'team': 'Kings XI Punjab', 'total_match': 134, 'won_toss': 64, 'won_toss_won_match': 26, 'won_toss_lost_match': 38, 'lost_toss': 70, 'lost_toss_won_match': 37, 'lost_toss_lost_match': 33},
  'Royal Challengers Bangalore': {'code': 'RCB', 'team': 'Royal Challengers Bangalore', 'total_match': 139, 'won_toss': 61, 'won_toss_won_match': 33, 'won_toss_lost_match': 28, 'lost_toss': 78, 'lost_toss_won_match': 37, 'lost_toss_lost_match': 41},
  'Delhi Daredevils': {'code': 'DD', 'team': 'Delhi Daredevils', 'total_match': 133, 'won_toss': 64, 'won_toss_won_match': 28, 'won_toss_lost_match': 36, 'lost_toss': 69, 'lost_toss_won_match': 28, 'lost_toss_lost_match': 41},
  'Kochi Tuskers Kerala': {'code': 'KTK', 'team': 'Kochi Tuskers Kerala', 'total_match': 14, 'won_toss': 8, 'won_toss_won_match': 4, 'won_toss_lost_match': 4, 'lost_toss': 6, 'lost_toss_won_match': 2, 'lost_toss_lost_match': 4},
  'Pune Warriors': {'code': 'PW', 'team': 'Pune Warriors', 'total_match': 46, 'won_toss': 20, 'won_toss_won_match': 3, 'won_toss_lost_match': 17, 'lost_toss': 26, 'lost_toss_won_match': 9, 'lost_toss_lost_match': 17},
  'Sunrisers Hyderabad': {'code': 'SH', 'team': 'Sunrisers Hyderabad', 'total_match': 62, 'won_toss': 30, 'won_toss_won_match': 14, 'won_toss_lost_match': 16, 'lost_toss': 32, 'lost_toss_won_match': 20, 'lost_toss_lost_match': 12},
  'Rising Pune Supergiants': {'code': 'RPS', 'team': 'Rising Pune Supergiants', 'total_match': 14, 'won_toss': 7, 'won_toss_won_match': 3, 'won_toss_lost_match': 4, 'lost_toss': 7, 'lost_toss_won_match': 2, 'lost_toss_lost_match': 5},
  'Gujarat Lions': {'code': 'GL', 'team': 'Gujarat Lions', 'total_match': 16, 'won_toss': 8, 'won_toss_won_match': 6, 'won_toss_lost_match': 2, 'lost_toss': 8, 'lost_toss_won_match': 3, 'lost_toss_lost_match': 5}
};

let vis, blockWidth, gap, centerSpace, internalLeftPadding, yScale, heightFactor;


class TossEffect extends Component {
  static getDescription(team) {
    switch (team) {
      case "Pune Warriors": {
        return "Pune Warriors has lost equal matches after toss"
      } case "Royal Challengers Bangalore": {
        return "RCB won't be interested in losing a toss"
      } case "Deccan Chargers": {
        return "Seems like Deccan Chargers doesn't believe in winning toss or match"
      } case "Mumbai Indians": {
        return "Mumbai Indians has no general side-effect of losing toss"
      } case "Kochi Tuskers Kerala": {
        return "Kochi Tuskers seems to lose more matches when they lose toss"
      } case "Gujarat Lions": {
        return "Gujarat Lions seems to win more matches when they win toss"
      } case "Rising Pune Supergiants": {
        return "Their lost count is as rising as their name"
      } case "Sunrisers Hyderabad": {
        return "Sunrisers Hyderabad wouldn't wish to win a toss"
      } case "Kolkata Knight Riders": {
        return "Looks like losing toss is unlucky for KKR"
      } case "Chennai Super Kings": {
        return "East or West. CSK doesn't care about the toss."
      } case "Rajasthan Royals": {
        return "Rajasthan Royals has won more matches after winning toss"
      } case "Delhi Daredevils": {
        return "Looks like Delhi Daredevils doesn't believe in winning toss or match"
      } case "Kings XI Punjab": {
        return "KXIP would never want to win a toss"
      } default: {
        return team
      }
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      team: 'Kolkata Knight Riders',
    };

    this.onTeamChange = this.onTeamChange.bind(this);
  };

  componentDidMount() {
    d3 = window.d3;

    const padding = {};

    const pageWidth = (window.innerWidth || document.body.clientWidth);
    if (pageWidth > 980) {
      padding.left = (pageWidth * 20) / 100;
      padding.right = (pageWidth * 20) / 100;
    } else {
      padding.left = (pageWidth * 5) / 100;
      padding.right = (pageWidth * 5) / 100;
    }

    const width = pageWidth - (2 * padding.left);
    const height = 400;

    // create an svg container
    vis = d3.select(".app-toss-effect-content")
        .append("svg:svg")
        .attr("width", width)
        .attr("height", height + 100);

    // per bar width
    // 40-40-10-40---40-10-40-40
    blockWidth = 40;
    gap = 10;
    internalLeftPadding = 40;
    centerSpace = width - (2*internalLeftPadding + 4*blockWidth + 2*gap);

    yScale = d3.scale.linear().domain([0, 50]).range([height, 0]);

    heightFactor = (h) => {
      return (h * height) / 50;
    };

    // horizontal lines
    for(let i = 0; i < 5; i++) {
      vis.append("line")
          .attr("stroke", "grey")
          .attr("stroke-dasharray", "2,2")
          .attr("x1", 0)
          .attr("y1", yScale(0) - heightFactor((i) * 10))
          .attr("x2", width)
          .attr("y2", yScale(0) - heightFactor((i) * 10));

      if (i !== 0) {
        vis.append("text")
            .attr("x", width/2)
            .attr("y", yScale(0) - heightFactor((i) * 10))
            .text("" + ((i) * 10) + "");
      }
    }

    vis.append("text")
        .attr("x", width/2)
        .attr("y", 420)
        .attr("class", "toss-text")
        .attr("opacity", "0.5")
        .attr("text-anchor", "middle")
        .text("Effect of Toss on Match Results");

    // left legend text
    vis.append("text")
        .attr("x", internalLeftPadding)
        .attr("y", 50)
        .attr("class", "toss-text")
        .attr("opacity", "0.5")
        .attr("text-anchor", "start")
        .text("Lost Toss");

    vis.append("rect")
        .attr("x", width/2 - 120)
        .attr("y", 40)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "#4E937A");

    vis.append("text")
        .attr("x", width/2 - 100)
        .attr("y", 50)
        .attr("class", "toss-text")
        .attr("opacity", "0.5")
        .attr("text-anchor", "start")
        .text("Won Match");

    vis.append("rect")
        .attr("x", width/2 + 110)
        .attr("y", 40)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "#BF4342");

    vis.append("text")
        .attr("x", width/2 + 20)
        .attr("y", 50)
        .attr("class", "toss-text")
        .attr("opacity", "0.5")
        .attr("text-anchor", "start")
        .text("Lost Match");

    // right legend text
    vis.append("text")
        .attr("x", width - internalLeftPadding)
        .attr("y", 50)
        .attr("class", "toss-text")
        .attr("opacity", "0.5")
        .attr("text-anchor", "end")
        .text("Won Toss");


    // lost toss won match
    vis.append("rect")
        .attr("class", "lost-toss-won-match")
        .attr("x", internalLeftPadding)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].lost_toss_won_match))
        .attr("height", heightFactor(teamsData[this.state.team].lost_toss_won_match))
        .attr("width", blockWidth);

    vis.append("text")
        .attr("x", internalLeftPadding + (blockWidth/2))
        .attr("y", 420)
        .attr("class", "toss-text")
        .attr("id", "lost-toss-won-match")
        .attr("text-anchor", "middle")
        .text("" + teamsData[this.state.team].lost_toss_won_match + "");

    // lost toss lost match
    vis.append("rect")
        .attr("class", "lost-toss-lost-match")
        .attr("x", internalLeftPadding + blockWidth + gap)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].lost_toss_lost_match))
        .attr("height", heightFactor(teamsData[this.state.team].lost_toss_lost_match))
        .attr("width", blockWidth);

    vis.append("text")
        .attr("x", internalLeftPadding + blockWidth + gap + (blockWidth/2))
        .attr("y", 420)
        .attr("class", "toss-text")
        .attr("id", "lost-toss-lost-match")
        .attr("text-anchor", "middle")
        .text("" + teamsData[this.state.team].lost_toss_lost_match + "");

    // won toss won match
    vis.append("rect")
        .attr("class", "won-toss-won-match")
        .attr("x", internalLeftPadding + blockWidth + gap + centerSpace + internalLeftPadding)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].won_toss_won_match))
        .attr("height", heightFactor(teamsData[this.state.team].won_toss_won_match))
        .attr("width", blockWidth);

    vis.append("text")
        .attr("x", internalLeftPadding + blockWidth + gap + centerSpace + internalLeftPadding + (blockWidth/2))
        .attr("y", 420)
        .attr("class", "toss-text")
        .attr("id", "won-toss-won-match")
        .attr("text-anchor", "middle")
        .text("" + teamsData[this.state.team].won_toss_won_match + "");

    // won toss lost match
    vis.append("rect")
        .attr("class", "won-toss-lost-match")
        .attr("x", internalLeftPadding + blockWidth + gap + centerSpace  + blockWidth + gap + internalLeftPadding)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].won_toss_lost_match))
        .attr("height", heightFactor(teamsData[this.state.team].won_toss_lost_match))
        .attr("width", blockWidth);

    vis.append("text")
        .attr("x", internalLeftPadding + blockWidth + gap + centerSpace  + blockWidth + gap + internalLeftPadding + (blockWidth/2))
        .attr("y", 420)
        .attr("class", "toss-text")
        .attr("id", "won-toss-lost-match")
        .attr("text-anchor", "middle")
        .text("" + teamsData[this.state.team].won_toss_lost_match + "");
  }

  update() {
    // lost toss won match
    d3.select(".lost-toss-won-match").transition()
        .duration(1000)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].lost_toss_won_match))
        .attr("height", heightFactor(teamsData[this.state.team].lost_toss_won_match));

    d3.select("#lost-toss-won-match").text("" + teamsData[this.state.team].lost_toss_won_match + "");

    // lost toss lost match
    d3.select(".lost-toss-lost-match").transition()
        .duration(1000)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].lost_toss_lost_match))
        .attr("height", heightFactor(teamsData[this.state.team].lost_toss_lost_match));

    d3.select("#lost-toss-lost-match").text("" + teamsData[this.state.team].lost_toss_lost_match + "");

    // won toss won match
    d3.select(".won-toss-won-match").transition()
        .duration(1000)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].won_toss_won_match))
        .attr("height", heightFactor(teamsData[this.state.team].won_toss_won_match));

    d3.select("#won-toss-won-match").text("" + teamsData[this.state.team].won_toss_won_match + "");

    // won toss lost match
    d3.select(".won-toss-lost-match").transition()
        .duration(1000)
        .attr("y", yScale(0) - heightFactor(teamsData[this.state.team].won_toss_lost_match))
        .attr("height", heightFactor(teamsData[this.state.team].won_toss_lost_match));

    d3.select("#won-toss-lost-match").text("" + teamsData[this.state.team].won_toss_lost_match + "");
  }

  onTeamChange() {
    let tValue;

    try {
      tValue = document.querySelector(".app-toss-effect-selector").value;
    } catch (e) {
      tValue = "Kolkata Knight Riders"
    }

    this.setState({
      team: tValue,
    }, () => {
      console.log('change in format', this.state.team);
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
        <div className="app-toss-effect">
          <h4 className="app-title">Effect of toss on match results</h4>
          <p style={pStyle}>The match starts with both the captains tossing a coin and calling out their sides.</p>
          <p style={pStyle}>The winning captain get to chose if they will ball or bat first.</p>
          <p style={pStyle}>We have all seen captains blaming toss results after a loss.</p>
          <br/>
          <p style={pStyle}>You can explore the effects of toss on a team's IPL results using this widget. Select the team and then you're on your own.</p>
          <select className="app-toss-effect-selector" style={{ marginTop: '20px' }} onChange={this.onTeamChange}>
            <option>Kolkata Knight Riders</option>
            <option>Chennai Super Kings</option>
            <option>Rajasthan Royals</option>
            <option>Mumbai Indians</option>
            <option>Deccan Chargers</option>
            <option>Kings XI Punjab</option>
            <option>Royal Challengers Bangalore</option>
            <option>Delhi Daredevils</option>
            <option>Kochi Tuskers Kerala</option>
            <option>Pune Warriors</option>
            <option>Sunrisers Hyderabad</option>
            <option>Rising Pune Supergiants</option>
            <option>Gujarat Lions</option>
          </select>
          <div className="app-ground-performance-description">
            {TossEffect.getDescription(this.state.team)}
          </div>
          <div className="app-toss-effect-content"/>
        </div>
    );
  }
}

export default TossEffect;

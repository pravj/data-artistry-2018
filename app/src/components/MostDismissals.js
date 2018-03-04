import React, {Component} from 'react';

let d3;

class MostDismissals extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  componentDidMount() {
    d3 = window.d3;

    const role = {
      'A Mishra': 'bowler',
      'A Nehra': 'bowler',
      'B Kumar': 'bowler',
      'DJ Bravo': 'bowler',
      'Harbhajan Singh': 'bowler',
      'IK Pathan': 'bowler',
      'MM Sharma': 'bowler',
      'P Kumar': 'bowler',
      'PP Chawla': 'bowler',
      'PP Ojha': 'bowler',
      'R Sharma': 'bowler',
      'R Vinay Kumar': 'bowler',
      'RA Jadeja': 'allrounder',
      'RP Singh': 'bowler',
      'SK Trivedi': 'bowler',
      'Z Khan': 'bowler',
      'AB de Villiers': 'batsmen',
      'AC Gilchrist': 'batsmen',
      'AM Rahane': 'batsmen',
      'AT Rayudu': 'batsmen',
      'BB McCullum': 'batsmen',
      'DJ Hussey': 'batsmen',
      'G Gambhir': 'batsmen',
      'JH Kallis': 'batsmen',
      'KC Sangakkara': 'batsmen',
      'MEK Hussey': 'batsmen',
      'MK Pandey': 'batsmen',
      'MS Dhoni': 'batsmen',
      'NV Ojha': 'batsmen',
      'PA Patel': 'batsmen',
      'R Dravid': 'batsmen',
      'RG Sharma': 'batsmen',
      'RV Uthappa': 'batsmen',
      'SC Ganguly': 'batsmen',
      'SK Raina': 'batsmen',
      'SR Watson': 'batsmen',
      'V Kohli': 'batsmen'
    };

    const links = [
      {'source': 'Z Khan', 'target': 'MS Dhoni', 'value': 7},
      {'source': 'PP Ojha', 'target': 'MS Dhoni', 'value': 7},
      {'source': 'A Nehra', 'target': 'V Kohli', 'value': 6},
      {'source': 'R Vinay Kumar', 'target': 'RG Sharma', 'value': 6},
      {'source': 'B Kumar', 'target': 'AM Rahane', 'value': 6},
      {'source': 'Z Khan', 'target': 'G Gambhir', 'value': 5},
      {'source': 'SK Trivedi', 'target': 'RG Sharma', 'value': 5},
      {'source': 'PP Ojha', 'target': 'G Gambhir', 'value': 5},
      {'source': 'DJ Bravo', 'target': 'RG Sharma', 'value': 5},
      {'source': 'PP Chawla', 'target': 'AB de Villiers', 'value': 5},
      {'source': 'Harbhajan Singh', 'target': 'MK Pandey', 'value': 5},
      {'source': 'A Mishra', 'target': 'RV Uthappa', 'value': 5},
      {'source': 'R Sharma', 'target': 'KC Sangakkara', 'value': 5},
      {'source': 'RA Jadeja', 'target': 'SR Watson', 'value': 5},
      {'source': 'B Kumar', 'target': 'PA Patel', 'value': 5},
      {'source': 'MM Sharma', 'target': 'AT Rayudu', 'value': 5},
      {'source': 'Harbhajan Singh', 'target': 'R Dravid', 'value': 4},
      {'source': 'P Kumar', 'target': 'SK Raina', 'value': 4},
      {'source': 'Z Khan', 'target': 'MEK Hussey', 'value': 4},
      {'source': 'IK Pathan', 'target': 'AC Gilchrist', 'value': 4},
      {'source': 'SK Trivedi', 'target': 'DJ Hussey', 'value': 4},
      {'source': 'R Vinay Kumar', 'target': 'SC Ganguly', 'value': 4},
      {'source': 'PP Chawla', 'target': 'SK Raina', 'value': 4},
      {'source': 'A Mishra', 'target': 'RA Jadeja', 'value': 4},
      {'source': 'DJ Bravo', 'target': 'SK Raina', 'value': 4},
      {'source': 'RP Singh', 'target': 'JH Kallis', 'value': 4},
      {'source': 'A Mishra', 'target': 'RG Sharma', 'value': 4},
      {'source': 'RP Singh', 'target': 'NV Ojha', 'value': 4},
      {'source': 'PP Chawla', 'target': 'BB McCullum', 'value': 4},
      {'source': 'Harbhajan Singh', 'target': 'G Gambhir', 'value': 4}
    ];

    let nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function(link) {
      link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
      link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
    });

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
    const height = width * 0.85;

    const force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        .linkDistance(60)
        .charge(-300)
        .on("tick", tick)
        .start();

    const svg = d3.select(".app-most-dismissals-content").append("svg")
        .attr("width", width)
        .attr("height", height);

    const link = svg.selectAll(".link")
        .data(force.links())
        .enter().append("line")
        .attr("class", function (d) {
          return "link-" + (d.value);
        });

    const node = svg.selectAll(".node")
        .data(force.nodes())
        .enter().append("g")
        .attr("class", "node")
        .attr("class", function (d) {
          return "node-" + (role[d.name]);
        })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .call(force.drag);

    node.append("circle")
        .attr("r", 8);

    node.append("text")
        .attr("x", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });

    function tick() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }

    function mouseover() {
      d3.select(this).select("circle").transition()
          .duration(750)
          .attr("r", 16);
    }

    function mouseout() {
      d3.select(this).select("circle").transition()
          .duration(750)
          .attr("r", 8);
    }
  }

  render() {
    return (
        <div className="app-most-dismissals">
          <h5 className="app-title">Batsman Vs. Bowler Pairs (Most Dismissal)</h5>
          <div className="app-most-dismissals-label">
            <span className="legend-node bowler-node">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Bowler &nbsp;</span>
            <span className="legend-node batsmen-node">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Batsman &nbsp;</span>
            <span className="legend-node allrounder-node">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Allrounder &nbsp;</span>
          </div>
          <div className="app-most-dismissals-content"/>
        </div>
    );
  }
}

export default MostDismissals;

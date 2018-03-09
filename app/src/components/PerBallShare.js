import React, {Component} from 'react';

let d3;

// Reference: http://bl.ocks.org/mbostock/2706022

class PerBallShare extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  componentDidMount() {
    d3 = window.d3;

    const padding = {};

    let isSmallDevice = false;
    const pageWidth = (window.innerWidth || document.body.clientWidth);
    if (pageWidth > 980) {
      padding.left = (pageWidth * 20) / 100;
      padding.right = (pageWidth * 20) / 100;
    } else {
      isSmallDevice = true
      padding.left = (pageWidth * 5) / 100;
      padding.right = (pageWidth * 5) / 100;
    }

    const width = pageWidth - (2 * padding.left);

    const svg = d3.select(".app-per-ball-share-content").append("svg")
        .attr("width", width)
        .attr("height", width);

    const blockWidth = width / 10;

    const colorCodes = (n) => {
      if (n <= 12) {
        return "#8c2d04"
      } else if (n > 12 && n <= 18) {
        return "#d94801"
      } else if (n > 18 && n <= 23) {
        return "#f16913"
      } else if (n > 23 && n <= 28) {
        return "#fd8d3c"
      } else if (n > 28 && n <= 35) {
        return "#fdae6b"
      } else if (n > 35 && n <= 72) {
        return "#fdd0a2"
      } else {
        return "#feedde"
      }
    };

    const textValue = (n) => {
      if (n <= 12) {
        return "4"
      } else if (n > 12 && n <= 18) {
        return "Ex"
      } else if (n > 18 && n <= 23) {
        return "6"
      } else if (n > 23 && n <= 28) {
        return "W"
      } else if (n > 28 && n <= 35) {
        return "2"
      } else if (n > 35 && n <= 72) {
        return "1"
      } else {
        return ""
      }
    };

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        svg.append("circle")
            .attr("cx", (blockWidth / 4) + (j * blockWidth))
            .attr("cy", (blockWidth / 4) + (i * blockWidth))
            .attr("r", (blockWidth / 4))
            .attr("fill", colorCodes(i*10 + j))

        svg.append("text")
            .attr("x", (blockWidth / 4) + (j * blockWidth))
            .attr("y", (blockWidth / 4) + (i * blockWidth))
            .attr("font-size", isSmallDevice ? '10px' : '25px')
            .attr("text-anchor", 'middle')
            .text(textValue(i*10 + j))
      }
    }
  }

  render() {
    const pStyle = {
      textAlign: 'center',
      width: 'max-content',
      margin: 'auto',
      marginBottom: '30px',
    };

    return (
        <div className="app-per-ball-share">
          <h5 className="app-title">100 balls of IPL</h5>
          <p style={pStyle}>Out of the <span style={{ fontWeight: 'bold', fontSize: '30px' }}>136598</span> balls in the all IPL matches (till 2016)</p>
          <p style={pStyle}><span style={{ fontWeight: 'bold', fontSize: '20px', color: '#8c2d04' }}>15421</span> balls were scored for 4 runs</p>
          <p style={pStyle}><span style={{ fontWeight: 'bold', fontSize: '22px', color: '#d94801' }}>7469</span> balls were sent out of the boundary for 6 runs</p>
          <p style={pStyle}><span style={{ fontWeight: 'bold', fontSize: '18px', color: '#fd8d3c' }}>6726</span> balls were responsible for sending a batsman out of the ground</p>
          <p style={pStyle}><span style={{ fontWeight: 'bold', fontSize: '16px', color: '#f16913' }}>5817</span> balls were directly sent out of the boundary for 6 runs</p>
          <div className="app-per-ball-share-content"/>
        </div>
    );
  }
}

export default PerBallShare;

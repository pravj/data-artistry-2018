import React, {Component} from 'react';
// import * as d3 from 'd3';
import IndianGrounds from './components/IndianGrounds'
import ChangeSlope from './components/ChangeSlope'
import MostDismissals from './components/MostDismissals'
import PerBallShare from './components/PerBallShare'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  componentDidMount() {
    //
  }

  // IndianGrounds
  render() {
    const pStyle = {
      textAlign: 'center',
      width: 'max-content',
      margin: 'auto',
      marginTop: '40px',
    };

    return (
        <div>
          <p style={pStyle}><a href="https://hackpravj.com" target="_blank">Pravendra Singh</a> <a href="https://github.com/pravj/data-artistry-2018" target="_blank">(GitHub)</a></p>
          <IndianGrounds/>
          <ChangeSlope/>
          <MostDismissals/>
          <PerBallShare/>
        </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
// import * as d3 from 'd3';
import IndianGrounds from './components/IndianGrounds'
import ChangeSlope from './components/ChangeSlope'
import MostDismissals from './components/MostDismissals'

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
    return (
        <div>
          <IndianGrounds/>
          <ChangeSlope/>
          <MostDismissals/>
        </div>
    );
  }
}

export default App;

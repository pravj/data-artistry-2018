import React, {Component} from 'react';
// import logo from './logo.svg';
// import * as d3 from 'd3';
import IndianGrounds from './components/IndianGrounds'
import ChangeSlope from './components/ChangeSlope'

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

  render() {
    return (
        <div>
          <IndianGrounds/>
          <ChangeSlope/>
        </div>
    );
  }
}

export default App;

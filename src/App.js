import React, { Component } from "react";
import { connect } from "react-redux";
import { incrCounter, dcrCounter } from "./actions";

import Cmpcntr from "./components/Cmpcntr.js";

class App extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <Cmpcntr
          onAddClick={text => dispatch(incrCounter(text))}
          onSubClick={text => dispatch(dcrCounter(text))}
        />
      </div>
    );
  }
}

export default connect()(App);

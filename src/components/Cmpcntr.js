import React, { Component } from "react";
import { connect } from "react-redux";

class Cmpcntr extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={e => this.addClick(e)}>+</button>
        <input type="text" ref="input" />
        <button onClick={e => this.subClick(e)}>-</button>
      </div>
    );
  }

  addClick(e) {
    e.preventDefault();
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = this.props.count;
    console.log("Inside Add=" + text + "-" + node.value);
  }
  subClick(e) {
    e.preventDefault();
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onSubClick(text);
    node.value = this.props.count;
    console.log("Inside Sub=" + text + "-" + node.value);
  }
}
function mapStateToProps(state) {
  return {
    count: state.counter
  };
}
export default connect(mapStateToProps)(Cmpcntr);

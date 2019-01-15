import React from "react";
import PropTypes from "prop-types";

export default class ChildTwo extends React.Component {
  static contextTypes = {
    value: PropTypes.string
  };
  render() {
    return <div>子组件二 {this.context.value}</div>;
  }
}

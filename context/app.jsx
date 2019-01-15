import React from "react";
import PropTypes from "prop-types";

import Parent from "./p";
import ChildOne from "./c1";
import ChildTwo from "./c2";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  static childContextTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func
  };

  changeValue = value => {
    this.setState({ value });
  };

  getChildContext() {
    return {
      value: this.state.value,
      changeValue: this.changeValue
    };
  }

  render() {
    return (
      <div>
        <ChildOne />
        <ChildTwo />
      </div>
    );
  }
}

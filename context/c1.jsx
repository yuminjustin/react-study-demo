import React from 'react'
import PropTypes from 'prop-types'

export default class ChildOne extends React.Component {
  handleChange = e => {
    const { changeValue } = this.context;
    changeValue(e.target.value);
  };
  static contextTypes = {
    changeValue: PropTypes.func
  }

  render() {
    return (
      <div>
        子组件一
        <input onChange={this.handleChange} />
      </div>
    );
  }
}


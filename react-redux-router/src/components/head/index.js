import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default class Headers extends Component {
    render() {
      return (<Header>
           <h2 className="_app_name">Agent管理平台</h2>
         </Header>
      );
    }
  }

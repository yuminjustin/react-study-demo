import React, { Component } from 'react';
import { Tabs } from 'antd';
import SearchBox from './search'   /* 搜索栏 */
import First from './first'  
import Sub from './sub'

const TabPane = Tabs.TabPane;



  class AgentList extends Component {

    callback(key) {
      console.log(key);
    }

    render() {
      return (
        <div className="_common_list">
          <h3>Agent列表</h3>
          <SearchBox />
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="一级Agent" key="1">
              <First />
            </TabPane>
            <TabPane tab="下级Agent" key="2">
              <Sub />
            </TabPane>
          </Tabs>
        </div>
      );
    }
  }

  export default AgentList;

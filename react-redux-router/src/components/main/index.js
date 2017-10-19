import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'   /*  路由 */
import Bundle from '../../bundle'

import { Layout } from 'antd'
const { Content } = Layout


/*  按需加载 组件 */
const Test = (props) => (
    <Bundle load={() => import('../test')}>
        {(Test) => <Test {...props}/>}
    </Bundle>
  );
  
const Test2 = (props) => (
    <Bundle load={() => import('../test2')}>
        {(Test2) => <Test2 {...props}/>}
    </Bundle>
  );
// 404
const NoMatch = (props) => (
    <Bundle load={() => import('../error')}>
        {(NoMatch) => <NoMatch {...props}/>}
    </Bundle>
  );

// Agent列表
const AgentList = (props) => (
    <Bundle load={() => import('../agent/list')}>
        {(AgentList) => <AgentList {...props}/>}
    </Bundle>
  );
  

export default class Headers extends Component {
    state = {
        height:window.innerHeight-84
    };

    render() {

      return (
        <Content className="_content" style={{height:this.state.height}}>
          <Switch>
            <Route exact path="/" component={Test}/>
            <Route exact path="/test2" component={Test2}/>
            <Route exact path="/agentList" component={AgentList}/>
            <Route component={NoMatch} />
          </Switch>
        </Content>
      );
    }
  }

import React , {Component} from 'react'
import {BrowserRouter as Router } from 'react-router-dom'

import Headers from './head'   /*  头部 */
import Bar from './bar'  /* 菜单 */
import Main from './main'  /* 主体 */

import { Layout } from 'antd';
const { Sider } = Layout;


class App extends Component {
  render() {
	return (
    <Router>
      <Layout>
        <Headers />
        <Layout>
          <Sider>
            <Bar/>
          </Sider>
          <Layout className="_main_body">
            <Main />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
 }
}

export default App

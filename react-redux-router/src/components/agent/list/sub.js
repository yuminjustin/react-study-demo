import React, { Component } from 'react';
import { Table,Button } from 'antd';
import Store from '../../../store' /* store */

/* Agent列表 下级Agent */

  class Sub extends Component {
    state = {
      height:window.innerHeight-320
    }
    
    columns(){
      
      const { num_href,simulation_login } = this.props.actions;   /* 全局方法 */

       return [{
        title: 'Agent ID',
        dataIndex: 'id',
        key: 'id',
        width: 80
      }, {
        title: 'Agent 名称',
        dataIndex: 'name',
        key: 'name',
        width: 120
      }, {
        title: '平台ID',
        dataIndex: 'ad_id',
        key: 'ad_id',
        width: 80
      }, {
        title: '业务',
        dataIndex: 'zqb',
        key: 'zqb',
        width: 80
      },
      {
        title: '区域',
        dataIndex: 'area',
        key: 'area',
        width: 80
      },
      {
        title: '商家',
        dataIndex: 'store',
        key: 'store',
        width: 80,
        render: (text, record) => num_href(record.store,'javascript:;')
      },
      {
        title: '上级Agent',
        dataIndex: 'superior',
        key: 'superior',
        width: 120
      },
      {
        title: '下级Agent',
        dataIndex: 'sub',
        key: 'sub',
        width: 80,
        render: (text, record) => num_href(record.sub,'javascript:;')
      },
      {
        title: '部署量',
        dataIndex: 'put',
        key: 'put',
        width: 80,
        render: (text, record) => num_href(record.put,'javascript:;')
      },
      {
        title: '库存量',
        dataIndex: 'stock',
        key: 'stock',
        width: 80,
        render: (text, record) => num_href(record.stock,'javascript:;')
      },
      {
        title: '操作',
        key: 'action',
        width: 120,
        render: (text, record) => ( <Button type="primary" icon="paper-clip" onClick={() => simulation_login(record)}>远程控制</Button>)
      }]
    }

    render() {
      return (
        <Table columns={this.columns()} dataSource={this.props.agentList.sub} pagination={{ pageSize: 20 }} scroll={{ y: this.state.height }} size="middle"/>
      );
    }
  }

  export default Store(Sub);
  

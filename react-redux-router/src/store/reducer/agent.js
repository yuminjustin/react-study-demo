import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types'

const initialState = {
    list_params: {
        type: '0',
        types: [{
                value: '0',
                text: '按关键字'
            },
            {
                value: '1',
                text: '按时间段'
            },
            {
                value: '2',
                text: '按业务区域'
            }
        ],
        kw_types: [{
                value: '0',
                text: 'Agent ID'
            },
            {
                value: '1',
                text: 'Agent名称'
            },
            {
                value: '2',
                text: 'Agent账号'
            }
        ],
        time_types: [{
                value: '0',
                text: '全部时间'
            },
            {
                value: '1',
                text: '加盟时间'
            },
            {
                value: '2',
                text: '添加时间'
            }
        ]
    },
    list_form:{ /* 表单提交数据  页面初始化使用 不同步数值的改变 */
        kw_type: '0',
        kw: '',
        time_type: '0',
        start_time: '',
        end_time: ''
    },
    first:[{  /* 一级Agent  静态数据  实际开发应该是接口获取 */
        key: '1',
        id: '001',
        name: 'Agent1',
        ad_id: 'ad001',
        zqb:'0',
        area:'华中区',
        store:'0',
        sub:'0',
        order:'0',
        push:'0',
        put:'0',
        stock:'0'
      }, {
        key: '2',
        id: '002',
        name: 'Agent2',
        ad_id: 'ad002',
        zqb:'0',
        area:'华东区',
        store:'0',
        sub:'1',
        order:'2',
        push:'3',
        put:'0',
        stock:'4'
      }, {
        key: '3',
        id: '003',
        name: 'Agent3',
        ad_id: 'ad003',
        zqb:'0',
        area:'华西区',
        store:'5',
        sub:'3',
        order:'4',
        push:'0',
        put:'6',
        stock:'0'
      }],
    sub:[{  /* 下级Agent  静态数据  实际开发应该是接口获取 */
        key: '1',
        id: '001',
        name: 'Agent1',
        ad_id: 'ad001',
        zqb:'0',
        area:'华中区',
        store:'0',
        superior:'AgentX',
        sub:'0',
        put:'0',
        stock:'0'
      }, {
        key: '2',
        id: '002',
        name: 'Agent2',
        ad_id: 'ad002',
        zqb:'0',
        area:'华东区',
        store:'0',
        superior:'AgentX',
        sub:'1',
        put:'0',
        stock:'4'
      }, {
        key: '3',
        id: '003',
        name: 'Agent3',
        ad_id: 'ad003',
        zqb:'0',
        area:'华西区',
        store:'5',
        superior:AgentX',
        sub:'3',
        put:'6',
        stock:'0'
      }]
}

export default handleActions({
  /* 以下两个 reducer 并未使用 仅示例*/
    [TYPES.AGENT_CHANGE_TYPE]:(state,action) => {
        let params = Object.assign({},state.list_params,{type:action.payload.value})
        return Object.assign({},state,{list_params:params});
    },
    [TYPES.AGENT_CHANGE_DATE]:(state,action) => {
        let arr = action.payload.arr,
            form = Object.assign({},state.list_form,{
                start_time: arr[0],
                end_time: arr[1]
            })
        return Object.assign({},state,{list_form:form});
    }
},initialState)

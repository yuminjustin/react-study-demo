import * as TYPES from './types'

/* Agent 相关操作 一下两个并未使用 只是示例*/

export default {
    agent_change_type: (val) => async (dispatch, getState) =>{ /* Agent列表搜索项搜索类型变更 */
        let value = await Promise.resolve(val);
        dispatch({
            type:TYPES.AGENT_CHANGE_TYPE,
            payload:{
                value
            }
        });
    },
    agent_change_date: (val) => async (dispatch, getState) =>{ /* Agent列表搜索项日期变更 */
        let arr = await Promise.resolve(val);
        dispatch({
            type:TYPES.AGENT_CHANGE_DATE,
            payload:{
                arr
            }
        });
    }
}

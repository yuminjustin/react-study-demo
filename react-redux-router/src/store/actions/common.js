import React from 'react';
import * as TYPES from './types'

/*  利用redux 存放的一公用的全局的方法 */

export default {
    /* 大于0显示超链接 0则显示文本0 */
    num_href: (num,url) => ((Number(num) !== 0) ? (<a href={url}>{num}</a>) :(<span>0</span>)),
    /* 模拟登陆 */
    simulation_login:(row) => async =>{
        console.log(row)
    }   
}

#### 运行环境：<br>
webpack, babel, react@next (16.7+)<br>
无特殊配置，就是你平时开发的配置就好！


#### 注意事项：<br>
目前hooks的方式不能和class的方式混合使用，二者只能选其一。否则就会报错：<br>

    Unexpected "Hooks can only be called inside the body of a function component."
    
以前的component，是基于 class APP extends React.Component 来是实现<br>
采用hooks的方式，按照上述报错内容来看，应该成为Function Component<br>

#### 引用&借鉴：<br>
官方API：https://reactjs.org/docs/hooks-reference.html<br>
官方示例：https://reactjs.org/docs/hooks-overview.html#-state-hook<br>
30分钟精通React今年最劲爆的新特性：https://www.jqhtml.com/18670.html

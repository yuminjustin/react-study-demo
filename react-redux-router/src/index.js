/* react*/
import React from 'react';
import { render } from 'react-dom';

/* redux */
import { createStore,applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './store/reducer'

/* css */
import 'antd/dist/antd.css';
import './assets/style.css';

/* 入口 */
import App from './components/App';

/* create-react-app 生成 */
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware,thunk)
)

/* render */
render( <Provider store={store}>
           <App/> 
        </Provider>, 
     document.getElementById('root'));
registerServiceWorker();

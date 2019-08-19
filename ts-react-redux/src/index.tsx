import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { StoreState } from './types/index';
import Counter from './containers/Counter';
const store = createStore<StoreState>(reducer);
ReactDOM.render(
    <Provider store={ store }>
        <Counter/>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
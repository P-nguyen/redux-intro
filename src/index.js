import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import all redux modules needed.
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


import App from './components/app';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
//React-Redux provides <Provider />, which makes the Redux store available to the rest of your app
import { Provider } from 'react-redux';

import { store } from './helpers';
import App from './App';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
/*
render(<App />, document.getElementById('root'));*/



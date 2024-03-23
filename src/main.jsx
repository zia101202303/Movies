

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM.render
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import counterReducer from './reducers';

const store = createStore(counterReducer);

// Use createRoot to render your application
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

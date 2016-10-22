import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    console.log('Redux/app state is: ', store.getState());
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;

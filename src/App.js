import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './Router';

let store = createStore(reducers);

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

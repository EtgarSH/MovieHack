/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Navigation} from 'react-native-navigation';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import {registerScreens} from './screens';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

registerScreens(store, Provider)

export default class App {
  constructor() {

  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feed',
          screen: 'MovieHack.FeedTabScreen',
          title: 'Movies Feed',
        },
        {
          label: 'To Watch',
          screen: 'MovieHack.ToWatchTabScreen',
          title: 'To Watch',
        }
      ]
    });
  }
}

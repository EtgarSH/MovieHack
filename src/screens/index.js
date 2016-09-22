import {Navigation} from 'react-native-navigation';

import FeedTabScreen from './FeedTabScreen';
import ToWatchTabScreen from './ToWatchTabScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('MovieHack.FeedTabScreen', () => FeedTabScreen, store, Provider);
  Navigation.registerComponent('MovieHack.ToWatchTabScreen', () => ToWatchTabScreen, store, Provider);
}

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatListPage from './src/pages/FlatListPage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppRoot = createStackNavigator(
  {
    App: App,
    FlatListPage: {
      screen: FlatListPage,
    },
  },
  {
    headerMode: 'none',
  },
);
AppRegistry.registerComponent(appName, () => createAppContainer(AppRoot));

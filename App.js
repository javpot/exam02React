/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './Navigator';
import store from './store/store';
import {Provider} from 'react-redux';
import SwitchNav from './swtichNav';

const App = () => {
  return (
    <Provider store={store}>
      <SwitchNav />
    </Provider>
  );
};

export default App;

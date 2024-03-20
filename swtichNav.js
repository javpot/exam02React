import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Navigator from './Navigator';
import AuthNav from './authNav';

const SwitchNav = ({params}) => {
  const selector = useSelector(state => state.auth.isLogged);

  if (selector === true) {
    return <Navigator />;
  } else {
    return <AuthNav />;
  }
};

export default SwitchNav;

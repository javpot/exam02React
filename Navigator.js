import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Pages/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Map from './Pages/Map';
import Option from './Pages/Option';

const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Option" component={Option} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/pages/Home';
import Inspect from './src/pages/Inspect';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Inspect" component={Inspect} />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

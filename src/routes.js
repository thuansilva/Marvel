import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import logo from './assets/faust.png';

const routes = createAppContainer(
  createStackNavigator(
    {Main},
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default routes;

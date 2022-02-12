import React, { useEffect, useState } from 'react';
import EventsScreen from './screens/EventsScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import EditScreen from './screens/EditScreen';
enableScreens();

const AppNavigator = createStackNavigator(
  {
    Home: EventsScreen, 
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Home',
    
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    }
  }
);

export default createAppContainer(AppNavigator);

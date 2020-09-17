import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigation from '../app-navigation';
import ModalNavigation from '../modal-navigation';
import {navigationRef} from '../NavigationService';

import Routes from '../routes';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name={Routes.Navigations.APP} component={AppNavigation} />
        <Stack.Screen
          name={Routes.Navigations.MODAL}
          component={ModalNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

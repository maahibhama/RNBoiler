import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigation from '../app-navigation';
import ModalNavigation from '../modal-navigation';

import Routes from '../routes';


const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={Routes.Navigations.APP} component={AppNavigation} />
        <Stack.Screen name={Routes.Navigations.MODAL} component={ModalNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

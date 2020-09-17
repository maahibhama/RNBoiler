import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GetStarted from '../../screens/get-started';
import Home from '../../screens/home';

import Routes from '../routes';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={Routes.Screens.GET_STARTED}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name={Routes.Screens.GET_STARTED} component={GetStarted} />
      <Stack.Screen name={Routes.Screens.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

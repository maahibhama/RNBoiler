import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigation from '../app-navigation';
import ModalNavigation from '../modal-navigation';
import {isReadyRef, navigationRef} from '../RootNavigation';

import Routes from '../routes';

const Stack = createStackNavigator();

const AppContainer = () => {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator
        headerMode={'none'}
        mode={'modal'}
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1,
          },
        }}>
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

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddExpense from '../../screens/add-expense';
import EditIncome from '../../screens/edit-income';

import Routes from '../routes';

const Stack = createStackNavigator();

const ModalNavigation = () => {
  return (
    <Stack.Navigator
      mode={'modal'}
      headerMode={'none'}
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
          opacity: 1,
        },
      }}>
      <Stack.Screen name={Routes.Screens.ADD_EXPENSE} component={AddExpense} />
      <Stack.Screen name={Routes.Screens.EDIT_INCOME} component={EditIncome} />
    </Stack.Navigator>
  );
};

export default ModalNavigation;

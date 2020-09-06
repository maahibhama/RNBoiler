import React from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from '../../store';

import Root from '../root';

import styles from './styles';


const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.main}>
          <Root></Root>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

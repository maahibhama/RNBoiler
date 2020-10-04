import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AppContainer from '../../routes/app-container';
import {navigationRef} from '../../routes/RootNavigation';

const Root = () => {
  return (
    <View style={styles.main}>
      <AppContainer />
    </View>
  );
};

export default Root;

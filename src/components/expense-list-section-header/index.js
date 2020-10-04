import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const ExpenseListSectionHeader = (props) => {
  return (
    <View style={[styles.container, props.styles]}>
      <Text style={styles.titleStyle}>{props.date}</Text>
      <View style={styles.middle} />
      <Text style={styles.titleStyle}>{props.expense}</Text>
    </View>
  );
};
ExpenseListSectionHeader.propTypes = {
  date: PropTypes.string,
  expense: PropTypes.string,
  styles: PropTypes.any,
};

ExpenseListSectionHeader.defaultProps = {
  styles: {},
};
export default ExpenseListSectionHeader;

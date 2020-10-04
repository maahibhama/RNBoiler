import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';
import Item from './item';

import styles from './styles';

const ExpenseListHeader = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Item
        title={props.firstTitle}
        value={props.firstValue}
        styles={styles.itemStyle}
      />
      <View style={styles.lineView} />
      <Item
        title={props.secondTitle}
        value={props.secondValue}
        styles={styles.itemStyle}
      />
      <View style={styles.lineView} />
      <Item
        title={props.thirdTitle}
        value={props.thirdValue}
        styles={styles.itemStyle}
      />
    </View>
  );
};
ExpenseListHeader.propTypes = {
  firstTitle: PropTypes.string,
  firstValue: PropTypes.string,
  secondTitle: PropTypes.string,
  secondValue: PropTypes.string,
  thirdTitle: PropTypes.string,
  thirdValue: PropTypes.string,
  containerStyle: PropTypes.any,
};

ExpenseListHeader.defaultProps = {
  containerStyle: {},
};
export default ExpenseListHeader;

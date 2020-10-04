import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const CategoryLineItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dotView, { borderColor: props.borderColor }]}></View>
      <Text style={styles.titleStyle}>{props.name}</Text>
      <Text style={styles.percentageStyle}>{props.percentage}</Text>
    </View>
  );
};
CategoryLineItem.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.string,
  borderColor: PropTypes.string
};

CategoryLineItem.defaultProps = {
  name: 'sss',
  percentage: '20%',
  borderColor: '#FFFFFF'
};
export default CategoryLineItem;

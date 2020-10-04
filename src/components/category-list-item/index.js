import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const CategoryListItem = (props) => {
  const percentageStyle = {width: props.percentage};
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.middle}>
        <View style={styles.detailsView}>
          <Text style={styles.titleStyle}>{props.name}</Text>
          <Text style={styles.subTitleStyle}>{props.percentage}</Text>
        </View>
        <Text style={styles.valueStyles}>{props.expense}</Text>
      </View>
      <View style={styles.lineView}>
        <View style={[styles.percentageLine, percentageStyle]}></View>
      </View>
    </View>
  );
};
CategoryListItem.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object,
  percentage: PropTypes.string,
  containerStyle: PropTypes.any,
  expense: PropTypes.string,
  styles: PropTypes.any,
};

CategoryListItem.defaultProps = {
  styles: {},
  info: {},
  name: 'sss',
  expense: '$40',
  percentage: '20%',
  containerStyle: {},
};
export default CategoryListItem;

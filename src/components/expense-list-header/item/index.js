import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Item = (props) => {
  return (
    <View style={[styles.container, props.styles]}>
      {!!props.title && <Text style={styles.titleStyle}>{props.title}</Text>}
      {!!props.value && <Text style={styles.valueStyle}>{props.value}</Text>}
    </View>
  );
};
Item.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  titleStyle: PropTypes.any,
  valueStyle: PropTypes.any,
  styles: PropTypes.any,
};

Item.defaultProps = {
  styles: {},
  titleStyle: {},
  valueStyle: {},
};
export default Item;

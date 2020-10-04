import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Colors} from '../../../theme';

import styles from './styles';

const ListItem = (props) => {

  const selectedViewStyle = props.isSelected
    ? {backgroundColor: Colors.grayBackground}
    : {backgroundColor: Colors.transparent};

  return (
    <TouchableOpacity
      style={styles.touchStyle}
      onPress={() => {
        props.onTouch(props.info);
      }}>
      <View style={[styles.viewStyle, selectedViewStyle, props.styles]}>
        <Text style={[styles.titleStyle, props.textStyles]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.any,
  textStyles: PropTypes.any,
  onTouch: PropTypes.func,
  info: PropTypes.any,
  isSelected: PropTypes.bool,
};

ListItem.defaultProps = {
  title: '',
  styles: {},
  textStyles: {},
  onTouch: () => {},
  isSelected: false,
};

export default ListItem;

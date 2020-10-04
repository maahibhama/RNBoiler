import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import AppButton from '../app-button';
import {icons} from '../../utilities/assets';

const ExpenseListItem = (props) => {

  const onTouchDelete = () => {
    props.onTouchDelete(props.info)
  }

  const onTouchEdit = () => {
    props.onTouchEdit(props.info)
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.middle}>
        <Text style={styles.titleStyle}>{props.name}</Text>
        <Text style={styles.subTitleStyle}>{props.category}</Text>
      </View>
      <Text style={styles.valueStyles}>{props.expense}</Text>
      <AppButton
        image={icons.edit}
        onTouch={onTouchEdit}
        styles={styles.editButtonStyle}
        imageStyles={styles.buttonImageStyle}
      />
      <AppButton
        image={icons.delete}
        onTouch={onTouchDelete}
        styles={styles.buttonStyle}
        imageStyles={styles.buttonImageStyle}
      />
    </View>
  );
};
ExpenseListItem.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object,
  category: PropTypes.string,
  containerStyle: PropTypes.any,
  onTouchEdit: PropTypes.func,
  onTouchDelete: PropTypes.func,
  expense: PropTypes.string,
  styles: PropTypes.any,
};

ExpenseListItem.defaultProps = {
  styles: {},
  info: {},
  onTouchEdit: () => {},
  onTouchDelete: () => {},
  containerStyle: {},
};
export default ExpenseListItem;

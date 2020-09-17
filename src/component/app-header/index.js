import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {icons} from '../../constants/Assets';
import AppButton from '../app-button';

import styles from './styles';

const AppHeader = (props) => {
  return (
    <View style={[styles.headerView, props.styles]}>
      <AppButton
        image={icons.back}
        onPress={props.onClickBack}
        styles={styles.buttonStyle}
      />
      <AppButton
        image={icons.delete}
        onPress={props.onClickDelete}
        styles={styles.buttonStyle}
      />
      <View style={styles.middleView} />
      <AppButton
        image={icons.undo}
        onPress={props.onClickUndo}
        styles={styles.buttonStyle}
      />
      <AppButton
        image={icons.redo}
        onPress={props.onClickRedo}
        styles={styles.buttonStyle}
      />
      <AppButton
        title={'Done'}
        onPress={props.onClickDone}
        styles={styles.doneButtonStyle}
      />
    </View>
  );
};

AppHeader.propTypes = {
  onClickBack: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickUndo: PropTypes.func,
  onClickRedo: PropTypes.func,
  onClickDone: PropTypes.func,
  styles: PropTypes.any,
};
AppHeader.defaultProps = {
  onClickBack: () => {},
  onClickDelete: () => {},
  onClickUndo: () => {},
  onClickRedo: () => {},
  onClickDone: () => {},
  styles: {},
};

export default AppHeader;

import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import AppButton from '../app-button';

import styles from './styles';

const AppNavigationView = (props) => {
  return (
    <View style={[styles.mainViewStyle, props.styles]}>
      <View style={styles.leftViewStyle}>
      {props.showLeftButton && (
        <AppButton
          title={props.leftButtonTitle}
          textStyles={props.leftTextStyle}
          image={props.leftButtonImage}
          imageStyles={props.leftButtonImageStyle}
          onTouch={props.onTouchLeft}></AppButton>
      )}
      </View>
      <View style={styles.middleView}>
        {!!props.title && <Text style={[styles.titleStyle, props.titleStyle]}>{props.title}</Text>}
      </View>
      <View style={styles.rightViewStyle}>
      {props.showRightButton && (
        <AppButton
          title={props.rightButtonTitle}
          textStyles={props.rightTextStyle}
          image={props.rightButtonImage}
          imageStyles={props.rightButtonImageStyle}
          onTouch={props.onTouchRight}></AppButton>
      )}
      </View>
     
    </View>
  );
};

AppNavigationView.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.any,
  titleStyle: PropTypes.any,
  showLeftButton: PropTypes.bool,
  leftButtonTitle: PropTypes.string,
  leftTextStyle: PropTypes.any,
  leftButtonImage: PropTypes.any,
  leftButtonImageStyle: PropTypes.any,
  onTouchLeft: PropTypes.func,
  showRightButton: PropTypes.bool,
  rightButtonTitle: PropTypes.string,
  rightTextStyle: PropTypes.any,
  rightButtonImage: PropTypes.any,
  rightButtonImageStyle: PropTypes.any,
  onTouchRight: PropTypes.func,
};

AppNavigationView.defaultProps = {
  title: null,
  styles: {},
  titleStyle: {},
  showLeftButton: false,
  leftButtonTitle: null,
  leftTextStyle: {},
  leftButtonImage: null,
  leftButtonImageStyle: {},
  onTouchLeft: () => {},
  showRightButton: false,
  rightButtonTitle: null,
  rightTextStyle: {},
  rightButtonImage: null,
  rightButtonImageStyle: {},
  onTouchRight: () => {},
};

export default AppNavigationView;

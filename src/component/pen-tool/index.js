import React, {useState} from 'react';
import {Animated, PanResponder} from 'react-native';
import PropTypes from 'prop-types';

import {icons} from '../../constants/Assets';
import {Colors, ScreenHeight} from '../../theme';

import AppButton from '../app-button';

import styles from './styles';

const PenTool = (props) => {
  const {selectedColor, enableEarser} = props;

  const position = useState(
    new Animated.ValueXY({x: 0, y: (ScreenHeight - 100) / 2}),
  )[0];

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return true;
    },
    onPanResponderGrant: (_, gestureState) => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
    },
    onPanResponderMove: (_, gestureState) => {
      position.x.setValue(gestureState.dx);
      position.y.setValue(gestureState.dy);
    },
    onPanResponderRelease: (evt, gestureState) => {
      position.flattenOffset();
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.editorStyle,
        props.styles,
        {transform: [{translateX: position.x}, {translateY: position.y}]},
      ]}>
      <AppButton
        image={icons.fillColor}
        imageStyles={{tintColor: selectedColor.color}}
        onPress={props.onClickColorChange}
        styles={styles.buttonStyle}
      />
      <AppButton
        image={icons.lineColor}
        imageStyles={{tintColor: selectedColor.color}}
        onPress={props.onClickStockWidth}
        styles={styles.buttonStyle}
      />
      <AppButton
        image={icons.eraser}
        imageStyles={{
          tintColor: enableEarser ? Colors.actionTint : Colors.lightGray,
        }}
        onPress={props.onClickEarser}
        styles={styles.buttonStyle}
      />
    </Animated.View>
  );
};

PenTool.propTypes = {
  enableEarser: PropTypes.bool,
  selectedColor: PropTypes.any.isRequired,
  onClickColorChange: PropTypes.func,
  onClickStockWidth: PropTypes.func,
  onClickEarser:PropTypes.func,
  styles: PropTypes.any,
};
PenTool.defaultProps = {
  enableEarser: false,
  onClickColorChange: () => {},
  onClickStockWidth: () => {},
  onClickEarser: () => {},
  styles: {},
};


export default PenTool;

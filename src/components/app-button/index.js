import React from 'react';
import {TouchableHighlight, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import {Colors} from '../../theme';

import styles from './styles';

const AppButton = (props) => {
  const touchViewStyle = props.isDisable
    ? styles.disableViewStyle
    : styles.viewStyle;

  const textStyle = props.isDisable
    ? styles.disableTextStyle
    : styles.textStyle;

  const onlyImageStyle =
    props.image != null && props.title == null ? styles.imageTouchStyle : {};

  const onPress = () => {
    if (props.isDisable == false) {
      props.onTouch();
    }
  };

  return (
    <TouchableHighlight
      style={[touchViewStyle, onlyImageStyle, props.styles]}
      onPress={onPress}
      underlayColor={Colors.transparent}>
      <View style={[styles.container, props.containerStyle]}>
        {props.image && (
          <Image
            source={props.image}
            style={[styles.imageView, props.imageStyles]}
          />
        )}
        {props.title && (
          <Text
            numberOfLines={props.numberOfLines}
            style={[textStyle, props.textStyles]}>
            {props.title}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.any,
  textStyles: PropTypes.any,
  onTouch: PropTypes.func,
  image: PropTypes.any,
  imageStyles: PropTypes.any,
  isDisable: PropTypes.bool,
  containerStyle: PropTypes.any,
  numberOfLines: PropTypes.number,
};

AppButton.defaultProps = {
  styles: {},
  textStyles: {},
  onTouch: () => {},
  imageStyles: {},
  isDisable: false,
  title: null,
  image: null,
  containerStyle: {},
  numberOfLines: 1,
};

export default AppButton;

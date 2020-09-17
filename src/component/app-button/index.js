import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
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
  return (
    <TouchableHighlight
      style={[touchViewStyle, onlyImageStyle, props.styles]}
      onPress={props.onPress}
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
  isDisable: PropTypes.bool,
  image: PropTypes.any,
  imageStyles: PropTypes.any,
  title: PropTypes.string,
  numberOfLines: PropTypes.number,
  textStyles: PropTypes.any,
  onPress: PropTypes.func,
  styles: PropTypes.any,
  containerStyle: PropTypes.any,
};
AppButton.defaultProps = {
  isDisable: false,
  image: null,
  imageStyles: {},
  title: null,
  numberOfLines: 0,
  textStyles: {},
  onPress: () => {},
  styles: {},
  containerStyle: {},
};

export default AppButton;

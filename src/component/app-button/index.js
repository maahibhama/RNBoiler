import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';

import { Colors } from '../../theme';

import styles from './styles'

const AppButton = (props) => {
  const touchViewStyle = props.isDisable ? styles.disableViewStyle : styles.viewStyle;
  const textStyle = props.isDisable ? styles.disableTextStyle : styles.textStyle;
  const onlyImageStyle = props.image != null && props.title == null ? styles.imageTouchStyle : {};
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

export default AppButton;

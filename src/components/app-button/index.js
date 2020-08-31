import React, { PureComponent } from 'react';
import { TouchableHighlight, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../theme';

import styles from './styles';

export class AppButton extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    styles: PropTypes.any,
    textStyles: PropTypes.any,
    onTouch: PropTypes.func,
    image: PropTypes.any,
    imageStyles: PropTypes.any,
    isDisable: PropTypes.bool,
    containerStyle: PropTypes.any,
    numberOfLines: PropTypes.number
  };

  static defaultProps = {
    styles: {},
    textStyles: {},
    onTouch: () => {},
    imageStyles: {},
    isDisable: false,
    title: null,
    image: null,
    containerStyle: {},
    numberOfLines: 1
  };

  onPress = this.onPress.bind(this);

  onPress() {
    if (this.props.isDisable == false) {
      this.props.onTouch();
    }
  }

  render() {
    const touchViewStyle = this.props.isDisable ? styles.disableViewStyle : styles.viewStyle;
    const textStyle = this.props.isDisable ? styles.disableTextStyle : styles.textStyle;
    const onlyImageStyle = this.props.image != null && this.props.title == null ? styles.imageTouchStyle : {};
    return (
      <TouchableHighlight
        style={[touchViewStyle, onlyImageStyle, this.props.styles]}
        onPress={this.onPress}
        underlayColor={Colors.transparent}>
        <View style={[styles.container, this.props.containerStyle]}>
          {this.props.image && <Image source={this.props.image} style={[styles.imageView, this.props.imageStyles]} />}
          {this.props.title && <Text numberOfLines={this.props.numberOfLines} style={[textStyle, this.props.textStyles]}>{this.props.title}</Text>}
        </View>
      </TouchableHighlight>
    );
  }
}

export default AppButton;

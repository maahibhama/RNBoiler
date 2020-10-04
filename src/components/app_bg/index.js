import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AppBg = (props) => {
  return (
    <View style={[styles.main, props.styles]}>
      <ImageBackground
        source={props.image}
        style={[styles.imageStyle, props.imageStyle]}>
        {props.children}
      </ImageBackground>
    </View>
  );
};

AppBg.propTypes = {
  styles: PropTypes.any,
  image: PropTypes.any.isRequired,
  imageStyle: PropTypes.any,
  children: PropTypes.object,
};

AppBg.defaultProps = {
  styles: {},
  imageStyle: {},
  children: {},
};

export default AppBg;

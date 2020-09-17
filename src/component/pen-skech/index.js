import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {images} from '../../constants/Assets';

import AppButton from '../app-button';

import styles from './styles';

const PenSkech = (props) => {

  const {isPenSelected, onClickPen, onClickSkech} = props;

  const penHeightStyle = isPenSelected ? {top: 0} : {};
  const skechHeightStyle = isPenSelected ? {} : {top: 0};

  return (
    <View style={[styles.container, props.styles]}>
      <AppButton
        image={images.pen}
        imageStyles={styles.skechPenStyles}
        onPress={onClickPen}
        styles={[styles.skechPen, penHeightStyle]}
      />
      <AppButton
        imageStyles={styles.skechPenStyles}
        image={images.skech}
        onPress={onClickSkech}
        styles={[styles.skechPen, skechHeightStyle]}
      />
    </View>
  );
};

PenSkech.propTypes = {
  isPenSelected: PropTypes.bool,
  onClickPen: PropTypes.func,
  onClickSkech: PropTypes.func,
  styles: PropTypes.any,
};
PenSkech.defaultProps = {
  isPenSelected: true,
  onClickPen: () => {},
  onClickSkech: () => {},
  styles: {},
};

export default PenSkech;

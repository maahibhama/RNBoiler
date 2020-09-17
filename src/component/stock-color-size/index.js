import React from 'react';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {EditorColors, StockWidths} from '../../constants/content';

import AppButton from '../app-button';

import styles from './styles';

const StockColorSize = (props) => {
  const { showLineWidth, selectedColor, onClickChangeStockWidth, onClickColor }  = props
  const renderItem = ({item, index}) => {
    const style = showLineWidth
      ? {justifyContent: 'center', alignItems: 'center'}
      : {backgroundColor: item.color};
    const containerStyle = showLineWidth
      ? {
          backgroundColor: selectedColor.color,
          width: item,
          height: item,
          borderRadius: item / 2,
          flex: 0,
        }
      : {};
    return (
      <AppButton
        key={index}
        onPress={() => {
          showLineWidth
            ? onClickChangeStockWidth(item)
            : onClickColor(item);
        }}
        styles={[styles.item, style]}
        containerStyle={containerStyle}
      />
    );
  };

  return (
    <View style={[styles.colorContainer, props.styles]}>
      <FlatList
        extraData={showLineWidth}
        data={showLineWidth ? StockWidths : EditorColors}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

AppButton.propTypes = {
  showLineWidth: PropTypes.bool,
  selectedColor: PropTypes.any.isRequired,
  onClickChangeStockWidth: PropTypes.func,
  onClickColor: PropTypes.func,
  styles: PropTypes.any,
};
AppButton.defaultProps = {
  showLineWidth: false,
  onClickChangeStockWidth: () => {},
  onClickColor: () => {},
  styles: {},
};

export default StockColorSize;

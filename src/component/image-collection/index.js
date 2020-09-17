import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import {icons} from '../../constants/Assets';

import styles from './styles';

const ImageCollection = (props) => {
  const {selectedImage, images, onSelectImage} = props;

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onSelectImage(item);
        }}>
        <View style={styles.item}>
          <Image source={{uri: item.uri}} style={styles.itemImage} />
          {item.isSelected && (
            <View style={styles.imageSelectedIconContainer}>
              <Image source={icons.check} style={styles.imageSelectedIcon} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tableContainer}>
      <FlatList
        horizontal
        extraData={selectedImage}
        data={images}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.tableStyle}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

ImageCollection.propTypes = {
  selectedImage: PropTypes.any,
  images: PropTypes.array,
  onSelectImage: PropTypes.func,
};
ImageCollection.defaultProps = {
  images: [],
  onSelectImage: () => {},
};

export default ImageCollection;

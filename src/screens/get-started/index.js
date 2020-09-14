import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

import PropTypes from 'prop-types';
import CameraRoll from '@react-native-community/cameraroll';

import styles from './styles';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {icons} from '../../constants/Assets';
import Routes from '../../routes/routes';
import {navigate} from '../../routes/NavigationService';
import AppButton from '../../component/app-button';

const GetStarted = (props) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    CameraRoll.getPhotos({first: 100})
      .then((data) => {
        const assets = data.edges;
        const photos = assets.map((asset, index) => {
          const info = asset.node.image;
          info.id = index;
          info.isSelected = false;
          return info;
        });
        console.log(photos);
        photos[0].isSelected = true;
        setSelectedImage(photos[0]);
        setImages(photos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelectImage = (item) => {
    const selectedImageIndex = selectedImage ? selectedImage.id : 0;
    images[selectedImageIndex].isSelected = false;
    images[item.id].isSelected = true;
    setImages(images);
    setSelectedImage(item);
  };

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

  const onClickEdit = () => {
    navigate(Routes.Screens.HOME, {selectedImage: selectedImage});
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topView}>
        <AppButton title={'Edit'} onPress={onClickEdit} styles={styles.buttonStyle}/>
      </View>
      <View style={styles.imageConatiner}>
        {selectedImage && (
          <Image
            resizeMethod={'resize'}
            resizeMode={'center'}
            source={{uri: selectedImage.uri}}
            style={styles.selectedImageStyle}
          />
        )}
      </View>
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
    </SafeAreaView>
  );
};

GetStarted.propTypes = {};

export default GetStarted;

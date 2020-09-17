import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';
import {useFocusEffect} from '@react-navigation/native';

import CameraRoll from '@react-native-community/cameraroll';

import {icons} from '../../constants/Assets';
import Routes from '../../routes/routes';

import {navigate} from '../../routes/NavigationService';
import AppButton from '../../component/app-button';

import {getImageUrl} from '../../constants/utility';
import ImageCollection from '../../component/image-collection';

import styles from './styles';

const GetStarted = (props) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS == 'ios') {
        getImages();
      } else {
        hasAndroidPermission().then((response) => {
          if (response) {
            getImages();
          }
        });
      }
    }, []),
  );

  useEffect(() => {
    if (Platform.OS == 'ios') {
      getImages();
    } else {
      hasAndroidPermission().then((response) => {
        if (response) {
          getImages();
        }
      });
    }
  }, []);

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const getImages = () => {
    CameraRoll.getPhotos({first: 100, groupTypes: 'All', assetType: 'Photos'})
      .then((data) => {
        const assets = data.edges;
        const photos = assets.map((asset, index) => {
          const info = asset.node.image;
          info.uri = getImageUrl({selectedImage: info});
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

  const onClickEdit = () => {
    navigate(Routes.Screens.HOME, {selectedImage: selectedImage});
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topView}>
        <AppButton
          title={'Edit'}
          onPress={onClickEdit}
          styles={styles.buttonStyle}
        />
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
      <ImageCollection selectedImage={selectedImage} images={images} onSelectImage={onSelectImage} />
    </SafeAreaView>
  );
};

GetStarted.propTypes = {};

export default GetStarted;

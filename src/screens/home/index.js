import React, {useState} from 'react';
import {View, SafeAreaView, Image, Animated, PanResponder} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';
import {icons} from '../../constants/Assets';
import AppButton from '../../component/app-button';

const Home = (props) => {
  const [selectedImage, setSelectedImage] = useState(
    props.route.params.selectedImage,
  );
  const pan = React.useRef(new Animated.ValueXY());
  const onClickEdit = () => {};

  const onMove = React.useCallback((_, gesture) => {
  }, []);

  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: (evt, gestureState) => {
      pan.current.setOffset({x: pan.current.x._value, y: pan.current.y._value});
      pan.current.setValue({x: 0, y: 0});
    },

    onPanResponderMove: Animated.event([null, {
      dx  : pan.current.x,
      dy  : pan.current.y
    }], {
      listener: onMove
    }),
    onPanResponderRelease: (e, gesture) => {
      /*if (!isDropZone(gesture)) {*/
        Animated.spring(
          pan.current,
          {toValue:{x:0 - pan.current.x._offset,y: 0- pan.current.y._offset}}
        ).start(() => {
            pan
                .current
                .setValue({x: 0, y: 0})
            pan
                .current
                .setOffset({x: 0, y: 0})
        });
      /*}
      else {
        pan.current.flattenOffset()
      }*/
    }
  }), []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headerView}>
        <AppButton
          image={icons.delete}
          onPress={onClickEdit}
          styles={styles.buttonStyle}
        />
        <View style={styles.middleView} />
        <AppButton
          image={icons.undo}
          onPress={onClickEdit}
          styles={styles.buttonStyle}
        />
        <AppButton
          image={icons.redo}
          onPress={onClickEdit}
          styles={styles.buttonStyle}
        />
        <AppButton
          title={'Done'}
          onPress={onClickEdit}
          styles={styles.doneButtonStyle}
        />
      </View>
      <View style={styles.imageConatainer}>
        <Image
          resizeMethod={'resize'}
          resizeMode={'center'}
          source={{uri: selectedImage.uri}}
          style={styles.selectedImage}
        />
      </View>
      <Animated.View
          {...panResponder.panHandlers}
          style={[pan.current.getLayout(), styles.editorStyle]}
        >
        </Animated.View>
    </SafeAreaView>
  );
};

Home.propTypes = {};

export default Home;

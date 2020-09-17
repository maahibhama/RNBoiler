import {StyleSheet} from 'react-native';
import {Colors, AppStyles, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  imageConatainer: {
    flex: 1,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  imageViewAboveView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  }
});

export default styles;

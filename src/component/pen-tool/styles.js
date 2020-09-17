import {StyleSheet} from 'react-native';
import {Colors, AppStyles, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  editorStyle: {
    width: 40,
    height: 130,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    position: 'absolute',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: 'center',
  },
  buttonStyle: {
    height: 35,
    width: 35,
  },
});

export default styles;

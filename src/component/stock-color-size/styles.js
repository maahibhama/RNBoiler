import {StyleSheet} from 'react-native';
import {Colors, AppStyles, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  colorContainer: {
    top: (ScreenHeight - 400) / 2,
    right: 10,
    width: 32,
    height: 400,
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
  item: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 0,
    borderWidth: 0.5,
    backgroundColor: Colors.white,
  },
});

export default styles;

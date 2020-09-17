import {StyleSheet} from 'react-native';
import {Colors, AppStyles, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  tableContainer: {
    paddingVertical: 20,
  },
  tableStyle: {
    paddingVertical: 5,
  },
  item: {
    width: 50,
    borderWidth: 1,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginHorizontal: 5,
  },
  itemImage: {
    height: 80,
    width: 50,
  },
  imageSelectedIconContainer: {
    position: 'absolute',
    right: 2,
    top: 2,
    height: 16,
    width: 16,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 8,
    elevation: 2,
  },
  imageSelectedIcon: {
    height: 16,
    width: 16,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Colors, AppStyles} from '../../theme';

const styles = StyleSheet.create({
  headerView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonStyle: {
    height: 35,
    width: 35,
  },
  middleView: {
    flex: 1,
  },
  doneButtonStyle: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    marginLeft: 20,
  },
});

export default styles;

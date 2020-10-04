import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

export default StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    lineHeight: 13,
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 13,
    color: Colors.white,
  },
  valueStyle: {
    marginTop: 8,
    fontWeight: '500',
    lineHeight: 20,
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 20,
    color: Colors.white,
  },
});

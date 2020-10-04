import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineView: {
    height: 25,
    width: 1,
    backgroundColor: Colors.white,
  },
  itemStyle: {
    flex: 1,
  },
});

import {StyleSheet} from 'react-native';

import {Colors} from '../../../theme';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grayBorder,
  },
  emptyView: {
    padding: 24,
  },
});

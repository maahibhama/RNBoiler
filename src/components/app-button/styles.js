import { StyleSheet, Platform } from 'react-native';

import { Colors } from '../../theme';

export default StyleSheet.create({
  viewStyle: {
    height: 36,
  },
  disableViewStyle: {
    height: 36,
    backgroundColor: Colors.grayBorder,
  },
  textStyle: {
    fontWeight: '500',
    lineHeight: 18,
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 14,
    color: Colors.darkText,
  },
  imageTouchStyle: {
    paddingHorizontal: 0,
    backgroundColor: Colors.transparent,
    borderWidth: 0,
  },
  disableTextStyle: {
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: 14,
    color: Colors.lightText,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
});

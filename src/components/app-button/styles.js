import { StyleSheet, Platform } from 'react-native';

import { Colors } from '../../theme';

export default StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 16,
    borderRadius: 6,
    borderColor: Colors.darkBorder,
    borderWidth: 1,
    height: 36,
    backgroundColor: Colors.darkYellow,
  },
  disableViewStyle: {
    paddingHorizontal: 16,
    borderRadius: 6,
    borderColor: Colors.lightBorder,
    borderWidth: 1,
    height: 36,
    backgroundColor: Colors.grayBorder,
    color: Colors.lightGray,
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

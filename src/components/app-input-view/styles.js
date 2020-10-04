import { StyleSheet } from 'react-native';

import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
  },
  headerTitle: {
    fontSize: 12,
    color: Colors.lightBlack,
    fontWeight: 'normal',
    lineHeight: 15,
  },
  leftImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayBorder,
  },
  inputViewStyle: {
    padding: 0,
    flex: 1,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    minHeight: 40,
    backgroundColor: 'white',
    color: Colors.darkText,
  },
  errorTitle: {
    marginTop: 7,
    fontSize: 11,
    color: Colors.redError,
    fontWeight: '300',
    lineHeight: 15,
  },
  rightImage: {
    width: 24,
    height: 24,
  },
  rightButtonStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    paddingHorizontal: 0,
  },
});

import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.lightGray,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  middle: {
    flex: 1,
  },
  titleStyle: {
    lineHeight: 14,
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 14,
    color: Colors.lightText,
  }
});

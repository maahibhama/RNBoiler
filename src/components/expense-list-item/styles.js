import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGray,
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
  titleStyle:{
    lineHeight: 18,
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  subTitleStyle:{
    marginTop: 5,
    lineHeight: 12,
    textAlignVertical: 'center',
    fontSize: 12,
    color: Colors.lightText,
  },
  valueStyles:{
    lineHeight: 14,
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  editButtonStyle:{
    marginHorizontal: 5,
  },
  buttonImageStyle:{
    tintColor: Colors.tintGray
  }
});

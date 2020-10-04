import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    paddingVertical: 15,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsView:{
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle:{
    lineHeight: 18,
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  subTitleStyle:{
    marginLeft: 10,
    lineHeight: 18,
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
  lineView:{
    marginTop: 10,
    height: 5,
  },
  percentageLine:{
    height: 5,
    backgroundColor: Colors.darkYellow
  }
});

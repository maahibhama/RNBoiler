import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  mainViewStyle: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    height: 50,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftViewStyle:{
    width: 100,
    justifyContent:'center',
    alignItems: 'flex-start'
  },
  rightViewStyle:{
    width: 100,
    justifyContent:'center',
    alignItems: 'flex-end'
  },
  titleStyle:{
    fontWeight: 'bold',
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 24,
    color: Colors.white,
  }
});

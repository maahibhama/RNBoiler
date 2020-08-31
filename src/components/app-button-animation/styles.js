import { StyleSheet, Platform } from 'react-native';

import { Colors } from '../../theme';

export default StyleSheet.create({
  viewStyle: {
      width: 100,
      height: 50,
      justifyContent: 'center',
  },
  progressViewContainer:{
      height: '12%',
      borderRadius: 2,
      backgroundColor: Colors.grayBorder,
      width: '100%',
  },
  progressView:{
      height: '100%', 
      width: '0%',
      backgroundColor: Colors.darkGreen,
  },
  validIcon:{
      height: '100%',
      width: '100%',
  }
})      
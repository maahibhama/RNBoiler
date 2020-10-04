import {StyleSheet} from 'react-native';

import {Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 3,
  },
  dotView:{
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 3
  },
  titleStyle:{
    marginLeft: 10, 
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold'
  },
  percentageStyle:{
    fontSize: 12,
  }
});

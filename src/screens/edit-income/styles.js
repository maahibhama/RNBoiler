import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#00000030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    padding: 20,
    width: '80%',
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  headerStyle: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 20,
    color: Colors.darkText,
    textAlign: 'center',
    marginBottom: 20,
  },
  nameInputView: {
    marginBottom: 20,
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  doneButtonStyle:{
    backgroundColor: Colors.darkGreen,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: 80
  },
  cancelButtonStyle:{
    borderRadius: 4,
    paddingHorizontal: 10,
    borderColor: Colors.lightBorder,
    borderWidth: 1,
    width: 80
  },
  doneButtonTextStyle:{
    color: Colors.white
  }
});

export default styles;

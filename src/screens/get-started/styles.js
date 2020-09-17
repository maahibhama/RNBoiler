import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageConatiner: {
    flex: 1,
  },
  topView: {
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  selectedImageStyle: {
    width: '100%',
    height: '100%',
  },
  buttonStyle:{
    borderWidth: 0,
  }
});

export default styles;

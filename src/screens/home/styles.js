import {StyleSheet} from 'react-native';
import {Colors, ScreenHeight, ScreenWidth} from '../../theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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
  imageConatainer: {
    flex: 1,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  buttonStyle: {
    height: 35,
    width: 35,
  },
  middleView: {
    flex: 1,
  },
  doneButtonStyle: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    marginLeft: 20,
  },
  editorStyle:{
    width: 40,
    height: 100,
    backgroundColor: Colors.darkGreen,
    position: 'absolute',
    left: 0,
    top: '50%'
  }
});

export default styles;

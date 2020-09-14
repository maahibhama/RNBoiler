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
  tableContainer: {
    paddingVertical: 20,
  },
  item: {
    width: 50,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginHorizontal: 5,
  },
  itemImage: {
    height: 80,
    width: 50,
  },
  tableStyle: {
    paddingVertical: 5,
  },
  imageSelectedIconContainer: {
    position: 'absolute',
    right: 2,
    top: 2,
    height: 16,
    width: 16,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 8,
    elevation: 2,
  },
  imageSelectedIcon: {
    height: 16,
    width: 16,
  },
  buttonStyle:{
    borderWidth: 0,
  }
});

export default styles;

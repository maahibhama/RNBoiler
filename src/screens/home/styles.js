import {StyleSheet} from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  navigationTitle:{
    color: Colors.darkText
  },
  topView:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 40
  },
  pieChartStyle:{
  },
  backImageStyle:{
    tintColor: Colors.shadow
  },
  sectionFooter: {
    height: 10,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addStyle: {
    bottom: 40,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: Colors.red,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  totalExpenseStyle:{
    position: 'absolute',
    top: 50,
    left: 20,
    height: 50,
    width: 150,
    lineHeight: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  expenseList:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;

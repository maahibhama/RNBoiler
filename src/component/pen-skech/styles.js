import {StyleSheet} from 'react-native';
import {Colors, AppStyles, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  skechPen: {
    top: 50,
    height: 100,
    width: 40,
  },
  skechPenStyles: {
    height: '100%',
    resizeMode: 'center',
  },
});

export default styles;

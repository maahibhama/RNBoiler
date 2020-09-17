import { Dimensions } from 'react-native';

import Colors from './colors';
import AppStyles from './application-styles';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export { Colors, AppStyles, ScreenWidth, ScreenHeight };

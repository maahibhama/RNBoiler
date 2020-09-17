import { Platform } from 'react-native';

import Colors from './colors';

const AppStyles = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
    }),
  },
};

export default AppStyles;

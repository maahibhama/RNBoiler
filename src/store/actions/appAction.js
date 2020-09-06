import {UPDATE_INSTALL_FIRST_TIME} from '../types/appType';

export const updateInstallFirstTime = () => (dispatch) => {
  dispatch({
    type: UPDATE_INSTALL_FIRST_TIME,
  });
};

import { UPDATE_INSTALL_FIRST_TIME } from "../types/appType";

const defaultState = {
  userType: 'Guest',
  isUserLogin: false,
  installFirstTime: true
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {

    case UPDATE_INSTALL_FIRST_TIME: {
      return { ...state, installFirstTime: false };
    }

    default:
      return state;
  }
};

export default appReducer;

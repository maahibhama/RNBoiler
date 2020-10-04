import {
  ADD_EXPENSES,
  DELETE_EXPENSES,
  EDIT_EXPENSES,
  UPDATE_EXPENSES,
  UPDATE_INCOME,
} from '../types/appType';

export const updateIncome = (response) => (dispatch) => {
  dispatch({
    type: UPDATE_INCOME,
    payload: response,
  });
};

export const updateExpenses = (response) => (dispatch) => {
  dispatch({
    type: UPDATE_EXPENSES,
    payload: response,
  });
};

export const addExpenses = (response) => (dispatch) => {
  dispatch({
    type: ADD_EXPENSES,
    payload: response,
  });
};

export const editExpenses = (response) => (dispatch) => {
  dispatch({
    type: EDIT_EXPENSES,
    payload: response,
  });
};

export const deleteExpenses = (response) => (dispatch) => {
  dispatch({
    type: DELETE_EXPENSES,
    payload: response,
  });
};

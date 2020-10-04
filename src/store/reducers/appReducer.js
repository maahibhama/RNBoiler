import {
  ADD_EXPENSES,
  DELETE_EXPENSES,
  EDIT_EXPENSES,
  UPDATE_EXPENSES,
  UPDATE_INCOME,
} from '../types/appType';
import {defaultCategories} from '../../utilities/content';

const defaultState = {
  income: 0,
  expenses: 0,
  balance: 0,
  expenseList: [],
  categories: defaultCategories,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_INCOME: {
      const balance = action.payload - state.expenses;
      return {...state, income: action.payload, balance: balance};
    }
    case UPDATE_EXPENSES: {
      const balance = state.income - action.payload;
      return {...state, expenses: action.payload, balance: balance};
    }

    case ADD_EXPENSES: {
      const expenseList = [...state.expenseList, ...[action.payload]];
      let totalExpenses = 0;
      expenseList.forEach((t) => {
        totalExpenses += parseFloat(t.amount);
      });
      const balance = state.income - totalExpenses;
      return {
        ...state,
        expenseList: expenseList,
        balance: balance,
        expenses: totalExpenses,
      };
    }

    case EDIT_EXPENSES: {
      const mapExpenseList = state.expenseList.map((t) => {
        if(t.id == action.payload.id){
          return action.payload
        }
        return t;
      });
      let totalMExpenses = 0;
      mapExpenseList.forEach((t) => {
        totalMExpenses += parseFloat(t.amount);
      });
      const mapbalance = state.income - totalMExpenses;
      return {
        ...state,
        expenseList: mapExpenseList,
        balance: mapbalance,
        expenses: totalMExpenses,
      };
    }
    case DELETE_EXPENSES: {
      const filterExpenseList = state.expenseList.filter((t) => {
        return t.id != action.payload;
      });
      let totalFExpenses = 0;
      filterExpenseList.forEach((t) => {
        totalFExpenses += parseFloat(t.amount);
      });
      const filterbalance = state.income - totalFExpenses;
      return {
        ...state,
        expenseList: filterExpenseList,
        balance: filterbalance,
        expenses: totalFExpenses,
      };
    }

    default:
      return state;
  }
};

export default appReducer;

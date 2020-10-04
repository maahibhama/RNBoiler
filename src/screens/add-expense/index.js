import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppInputView from '../../components/app-input-view';
import {icons} from '../../utilities/assets';
import {
  isValidDate,
  isValidNumber,
  isValidString,
} from '../../utilities/helper';
import AppButton from '../../components/app-button';
import {backNavigation} from '../../routes/RootNavigation';

import styles from './styles';
import {addExpenses, editExpenses} from '../../store/actions/appActions';

const AddExpense = (props) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const categoryOptions = useSelector((state) => state.app.categories);
  const balance = useSelector((state) => state.app.balance);

  const info = props.route?.params?.info || {};

  const defaultCatValue = info?.category || '';
  const [categoryValue, setCategoryValue] = useState(defaultCatValue);
  const [showCategoryError, setShowCategoryError] = useState(false);

  const defaultDes = info?.description || '';
  const [description, setDescription] = useState(defaultDes);
  const [showDesError, setShowDesError] = useState(false);

  const defaultDate = info?.date || '';
  const [date, setDate] = useState(defaultDate);
  const [showDateError, setShowDateError] = useState(false);

  const defaultAmount = info?.amount || '';
  const [amount, setAmount] = useState(defaultAmount);
  const [showAmountError, setShowAmountError] = useState(false);
  const [showOutBalanceError, setShowOutBalanceError] = useState(false);

  const dispatch = useDispatch();

  const onChangeCategoryText = (text) => {
    setShowOptionList(true);
    setShowCategoryError(false);
    //dsetCategoryValue(text);
  };

  const onSubmitCategoryEditing = () => {};

  const onTouchListItem = (info) => {
    setCategoryValue(info.item);
    setShowOptionList(false);
  };

  const onChangeDescText = (text) => {
    setDescription(text);
    setShowDesError(false);
  };

  const onSubmitDescEditing = () => {};

  const onChangeDateText = (text) => {
    setShowDateError(false);
    setDate(text);
  };

  const onSubmitDateEditing = () => {};

  const onChangeAmountText = (text) => {
    setShowAmountError(false);
    setAmount(text);
  };

  const onSubmitAmountEditing = () => {};

  const onClickDone = () => {
    if (categoryValue.length == 0) {
      setShowCategoryError(true);
      return;
    } else if (description.length == 0) {
      setShowDesError(true);
      return;
    } else if (date.length != 10 || isValidDate(date) == false) {
      setShowDateError(true);
      return;
    } else if (isValidNumber(amount) == false || parseFloat(amount) < 0) {
      setShowAmountError(true);
      return;
    } else if (parseFloat(amount) > balance) {
      setShowOutBalanceError(true);
      setShowAmountError(true);
      return;
    }
    if (info?.id) {
      const addInfo = {
        id: info?.id,
        description,
        category: categoryValue,
        date,
        amount,
      };
      dispatch(editExpenses(addInfo));
      backNavigation();
    } else {
      const addInfo = {
        id: new Date().getTime(),
        description,
        category: categoryValue,
        date,
        amount,
      };
      dispatch(addExpenses(addInfo));
      backNavigation();
    }
  };

  const onClickCancel = () => {
    backNavigation();
  };
  const balanceError = showOutBalanceError
    ? 'You can not add more more then ' + '$' + balance + ' amount'
    : 'Please enter a valid Amount';
  return (
    <View style={styles.main}>
      <View style={styles.middleView}>
        <Text style={styles.headerStyle}>{'Add Expense'}</Text>
        <AppInputView
          showError={showCategoryError}
          errorText={'Please select Category'}
          headerTitle={'Category'}
          placeholder={'e.g. Education'}
          isEditingShow={showOptionList}
          styles={styles.nameInputView}
          onChangeText={onChangeCategoryText}
          onSubmitEditing={onSubmitCategoryEditing}
          showOptionList={showOptionList}
          optionListData={categoryOptions}
          onTouchItem={onTouchListItem}
          value={categoryValue}
          maxLength={80}
        />
        <AppInputView
          showError={showDesError}
          errorText={'Please enter a description.'}
          headerTitle={'Description'}
          placeholder={'Enter a description.'}
          isEditingShow={true}
          styles={styles.nameInputView}
          onChangeText={onChangeDescText}
          onSubmitEditing={onSubmitDescEditing}
          value={description}
          maxLength={25}
        />
        <AppInputView
          showError={showDateError}
          errorText={'Please enter a valid date (dd/mm/yyyy)'}
          headerTitle={'Date'}
          placeholder={'Enter a date (dd/mm/yyyy)'}
          isEditingShow={true}
          styles={styles.nameInputView}
          onChangeText={onChangeDateText}
          onSubmitEditing={onSubmitDateEditing}
          value={date}
          maxLength={10}
        />
        <AppInputView
          showError={showAmountError}
          errorText={balanceError}
          headerTitle={'Amount'}
          placeholder={'Enter a Amount'}
          isEditingShow={true}
          styles={styles.nameInputView}
          onChangeText={onChangeAmountText}
          onSubmitEditing={onSubmitAmountEditing}
          value={amount}
          maxLength={25}
        />
        <View style={styles.bottomContainer}>
          <AppButton
            title={'Done'}
            styles={styles.doneButtonStyle}
            textStyles={styles.doneButtonTextStyle}
            onTouch={onClickDone}></AppButton>
          <AppButton
            title={'Cancel'}
            styles={styles.cancelButtonStyle}
            onTouch={onClickCancel}></AppButton>
        </View>
      </View>
    </View>
  );
};

AddExpense.propTypes = {};

export default AddExpense;

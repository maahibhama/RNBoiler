import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppInputView from '../../components/app-input-view';
import {icons} from '../../utilities/assets';
import {isValidNumber} from '../../utilities/helper';
import AppButton from '../../components/app-button';
import {backNavigation} from '../../routes/RootNavigation';

import styles from './styles';
import { updateIncome } from '../../store/actions/appActions';

const EditIncome = (props) => {
  const income = useSelector((state) => state.app.income);
  const [name, setName] = useState(income.toString());
  const [showNameRightButton, setShowNameRightButton] = useState(false);
  const dispatch = useDispatch()

  const onChangeNameText = (text) => {
    setShowNameRightButton(false)
    setName(text);
  };

  const onSubmitNameEditing = () => {
    setShowNameRightButton(true)
  };

  const onClickDone = () => {
    setShowNameRightButton(true)
    if(isValidNumber(name)){
      const newIncome = parseFloat(name)
      dispatch(updateIncome(newIncome))
      backNavigation();
    }
  };

  const onClickCancel = () => {
    backNavigation();
  };

  const invalidName = name.length == 0 || isValidNumber(name) == false;
  const rightNameImage = invalidName ? icons.invalid : icons.valid;
  const showNameError = invalidName && showNameRightButton;
  const headerTitle = income > 0 ? 'Edit Income' : 'Add Income'
  return (
    <View style={styles.main}>
      <View style={styles.middleView}>
        <Text style={styles.headerStyle}>{headerTitle}</Text>
        <AppInputView
          showError={showNameError}
          errorText={'Please enter a valid Amount'}
          headerTitle={'Amount'}
          placeholder={'Enter a Amount'}
          isEditingShow={true}
          showRightImage={showNameRightButton}
          rightImage={rightNameImage}
          styles={styles.nameInputView}
          onChangeText={onChangeNameText}
          onSubmitEditing={onSubmitNameEditing}
          value={name}
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

EditIncome.propTypes = {};

export default EditIncome;

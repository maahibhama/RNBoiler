import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, SectionList, View} from 'react-native';

import PropTypes from 'prop-types';

import AppNavigationView from '../../components/app-navigation-view';
import ExpenseListItem from '../../components/expense-list-item';
import ExpenseListHeader from '../../components/expense-list-header';
import AppBg from '../../components/app_bg';
import {icons, images} from '../../utilities/assets';
import ExpenseListSectionHeader from '../../components/expense-list-section-header';
import AppButton from '../../components/app-button';

import styles from './styles';
import {model, navigate} from '../../routes/RootNavigation';
import Routes from '../../routes/routes';
import {getData} from '../../utilities/helper';
import {deleteExpenses} from '../../store/actions/appActions';

const GetStarted = (props) => {
  const income = useSelector((state) => state.app.income);
  const expenses = useSelector((state) => state.app.expenses);
  const balance = useSelector((state) => state.app.balance);
  const expenseList = useSelector((state) => state.app.expenseList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (income == 0) {
      model(Routes.Screens.EDIT_INCOME);
    }
  }, []);

  const onTouchRight = () => {
    navigate(Routes.Screens.HOME);
  };

  const onTouchLeft = () => {
    model(Routes.Screens.EDIT_INCOME);
  };

  const onTouchAdd = () => {
    if (income == 0) {
      model(Routes.Screens.EDIT_INCOME);
    } else {
      model(Routes.Screens.ADD_EXPENSE);
    }
  };

  const onTouchEdit = (info) => {
    const {item} = info;
    model(Routes.Screens.ADD_EXPENSE, {info: item});
  };

  const onTouchDelete = (info) => {
    const {item} = info;

    dispatch(deleteExpenses(item.id));
  };

  const renderItem = (info) => {
    const {item} = info;
    const price = '$' + item.amount;
    return (
      <ExpenseListItem
        name={item.description}
        expense={price}
        category={item.category}
        info={info}
        onTouchEdit={onTouchEdit}
        onTouchDelete={onTouchDelete}
      />
    );
  };

  const renderSectionHeader = (info) => {
    const {section} = info;
    const {header} = section;
    const expensesStr = 'Expenses: ' + '$' + header.expense;
    return (
      <ExpenseListSectionHeader date={header.date} expense={expensesStr} />
    );
  };

  const renderSectionFooter = () => {
    return <View style={styles.sectionFooter} />;
  };

  const data = getData(expenseList);

  return (
    <AppBg image={images.listBg}>
      <SafeAreaView style={styles.main}>
        <AppNavigationView
          title={'Expenses'}
          showRightButton={true}
          showLeftButton={true}
          onTouchLeft={onTouchLeft}
          leftButtonImage={icons.edit}
          leftButtonImageStyle={styles.leftIconStyle}
          rightButtonImage={icons.chart}
          onTouchRight={onTouchRight}
        />
        <ExpenseListHeader
          firstTitle={'Income'}
          firstValue={'$' + income.toString()}
          secondTitle={'Expenses'}
          secondValue={'$' + expenses.toString()}
          thirdTitle={'Balance'}
          thirdValue={'$' + balance.toString()}
        />
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={data}
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={renderSectionFooter}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <AppButton
          image={icons.add}
          styles={styles.addStyle}
          onTouch={onTouchAdd}
        />
      </SafeAreaView>
    </AppBg>
  );
};

GetStarted.propTypes = {};

export default GetStarted;

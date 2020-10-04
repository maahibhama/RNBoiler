import React from 'react';
import {View, SafeAreaView, SectionList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import PropTypes from 'prop-types';
import styles from './styles';
import {icons, images} from '../../utilities/assets';
import AppBg from '../../components/app_bg';
import PieChart from '../../library/pie-chart';
import AppNavigationView from '../../components/app-navigation-view';
import ExpenseListSectionHeader from '../../components/expense-list-section-header';
import {backNavigation, model} from '../../routes/RootNavigation';
import AppButton from '../../components/app-button';
import Routes from '../../routes/routes';
import CategoryListItem from '../../components/category-list-item';
import {getCategoriesData} from '../../utilities/helper';
import CategoryLineItem from '../../components/category-line-item';

const Home = (props) => {
  const expenses = useSelector((state) => state.app.expenses);
  const expenseList = useSelector((state) => state.app.expenseList);
  const categories = useSelector((state) => state.app.categories);

  const categoryData = getCategoriesData(categories, expenseList);
  const data = [
    {
      header: '',
      data: categoryData,
      footer: '',
    },
  ];

  const chart_wh = 150;
  const series = expenses
    ? categoryData.map((t) => {
        return t.amount || 0;
      })
    : [100];
  const sliceColor = [
    '#F44336',
    '#2196F3',
    '#FFEB3B',
    '#4CAF50',
    '#FF9800',
    '#FFF555',
  ];

  const onTouchRight = () => {};

  const onTouchLeft = () => {
    backNavigation();
  };

  const onTouchAdd = () => {
    model(Routes.Screens.ADD_EXPENSE);
  };

  const renderListItems = categoryData.map((t, i) => {
    const percentage =
      (expenses ? ((t.amount * 100) / expenses).toFixed(2) : 0) + '%';
    return (
      <CategoryLineItem
        key={i}
        name={t.name}
        borderColor={sliceColor[i]}
        percentage={percentage}
      />
    );
  });

  const renderItem = (info) => {
    const {item} = info;
    const expense = '$' + item.amount;
    const percentage =
      (expenses ? ((item.amount * 100) / expenses).toFixed(2) : 0) + '%';
    return (
      <CategoryListItem
        name={item.name}
        expense={expense}
        percentage={percentage}
      />
    );
  };

  const renderSectionHeader = () => {
    const expensesStr = 'Total: ' + '$' + expenses;
    return <ExpenseListSectionHeader date={'Expenses'} expense={expensesStr} />;
  };

  const renderSectionFooter = () => {
    return <View style={styles.sectionFooter} />;
  };

  return (
    <AppBg image={images.graphBg}>
      <SafeAreaView style={styles.main}>
        <AppNavigationView
          title={'Graph'}
          titleStyle={styles.navigationTitle}
          showRightButton={true}
          showLeftButton={true}
          leftButtonImage={icons.back}
          leftButtonImageStyle={styles.backImageStyle}
          rightButtonImage={icons.filter}
          onTouchRight={onTouchRight}
          onTouchLeft={onTouchLeft}
        />
        <View style={styles.topView}>
          <PieChart
            style={styles.pieChartStyle}
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.9}
            coverFill={'#FFF'}
          />
          <Text style={styles.totalExpenseStyle}>
            {'Expense \n' + expenses}
          </Text>
          <View style={styles.expenseList}>{renderListItems}</View>
        </View>
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

Home.propTypes = {};

export default Home;

import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from '../list-item';

import styles from './styles';

const InputList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPressRenderItem = (info) => {
    const {item, index} = info;
    setSelectedIndex(index);
    props.onTouchItem(info);
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text>{'No results found'}</Text>
      </View>
    );
  };

  const renderItems = (info) => {
    const {item, index} = info;
    const isSelectedItem = selectedIndex == index;
    return (
      <ListItem
        isSelected={isSelectedItem}
        title={item}
        onTouch={onPressRenderItem}
        info={info}
      />
    );
  };

  const tableStyle = props.data.length > 0 ? {height: 200} : {height: 80};

  return (
    <FlatList
      ListEmptyComponent={listEmptyComponent}
      keyboardShouldPersistTaps={'handled'}
      data={props.data}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
      style={[styles.container, tableStyle, props.styles]}
    />
  );
};

InputList.propTypes = {
  data: PropTypes.array,
  styles: PropTypes.any,
  onTouchItem: PropTypes.func,
};

InputList.defaultProps = {
  data: [],
  styles: {},
  onTouchItem: () => {},
};

export default InputList;

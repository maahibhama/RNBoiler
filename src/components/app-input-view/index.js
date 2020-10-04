import React, {useState} from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';

import AppButton from '../app-button';
import InputList from './input-list';
import { Colors } from '../../theme';

import styles from './styles';

const AppInputView = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onChangeText = (text) => {
    setIsEditing(true);
    props.onChangeText(text);
  };

  const onSubmitEditing = () => {
    setIsEditing(false);
    props.onSubmitEditing();
  };

  const titleTextColor = props.showError
    ? {color: '#D7373F'}
    : {color: '#505050'};
  const subContainerColor =
    isEditing && props.isEditingShow
      ? {borderBottomColor: Colors.darkYellow}
      : {borderBottomColor: Colors.grayBorder};
  return (
    <View style={[styles.container, props.styles]}>
      {props.headerTitle && (
        <Text style={[styles.headerTitle, props.headerStyle, titleTextColor]}>
          {props.headerTitle}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          subContainerColor,
          props.inputContainerStyle,
        ]}>
        {props.showLeftImage && (
          <AppButton
            onTouch={props.onTouchLeftImage}
            image={props.leftImage}
            imageStyles={styles.leftImage}
            styles={styles.rightButtonStyle}
          />
        )}
        <TextInput
          ref={props.inputRef}
          underlineColorAndroid={'transparent'}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.placeholderText}
          keyboardType={props.keyboardType}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          autoFocus={props.autoFocus}
          style={[styles.inputViewStyle, props.inputViewStyle]}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          value={props.value}
          editable={props.editable}
          multiline={props.multiline}
          maxLength={props.maxLength}
        />
        {props.showRightImage && (
          <AppButton
            onTouch={props.onTouchRightImage}
            image={props.rightImage}
            imageStyles={styles.rightImage}
            styles={styles.rightButtonStyle}
          />
        )}
      </View>
      {props.showError && (
        <Text style={styles.errorTitle}>{props.errorText}</Text>
      )}
      {props.showOptionList && (
        <InputList
          data={props.optionListData}
          onTouchItem={props.onTouchItem}
          styles={styles.optionList}
        />
      )}
    </View>
  );
};

AppInputView.propTypes = {
  showError: PropTypes.bool,
  styles: PropTypes.any,
  isEditingShow: PropTypes.bool,
  inputContainerStyle: PropTypes.any,
  inputViewStyle: PropTypes.any,
  headerStyle: PropTypes.any,
  headerTitle: PropTypes.string,
  showLeftImage: PropTypes.bool,
  leftImage: PropTypes.any,
  showRightImage: PropTypes.bool,
  rightImage: PropTypes.any,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  value: PropTypes.string,
  showError: PropTypes.bool,
  errorText: PropTypes.string,
  onTouchRightImage: PropTypes.func,
  onTouchLeftImage: PropTypes.func,
  showOptionList: PropTypes.bool,
  optionListData: PropTypes.array,
  onTouchItem: PropTypes.func,
  inputRef: PropTypes.any,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
};

AppInputView.defaultProps = {
  showError: false,
  styles: {},
  isEditingShow: false,
  inputContainerStyle: {},
  inputViewStyle: {},
  headerStyle: {},
  showLeftImage: false,
  showRightImage: false,
  placeholder: '',
  keyboardType: 'default',
  onChangeText: () => {},
  onSubmitEditing: () => {},
  value: null,
  errorText: '',
  onTouchRightImage: () => {},
  showOptionList: false,
  optionListData: [],
  onTouchItem: () => {},
  onTouchLeftImage: () => {},
  inputRef: null,
  editable: true,
  multiline: false,
  autoFocus: true,
  maxLength: null,
};

export default AppInputView;

import * as React from 'react';
import {CommonActions} from '@react-navigation/native';
import Routes from './routes';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function model(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(Routes.Navigations.MODAL, {
      screen: name,
      params: params,
    });
  }
}

export function backNavigation() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
}

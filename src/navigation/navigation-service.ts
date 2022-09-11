import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import React, {RefObject} from 'react';

export const navigationRef: RefObject<NavigationContainerRef<{}>> =
  React.createRef();

export const appLockNavigationRef: RefObject<NavigationContainerRef> =
  React.createRef();

function navigate(
  routeName: string,
  params?: {},
  navRef?: RefObject<NavigationContainerRef>,
) {
  const ref = navRef || navigationRef;

  ref.current?.navigate(routeName, params);
}

function replace(routeName: string, params?: {}) {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
}

function pop() {
  navigationRef.current?.dispatch(StackActions.pop());
}

function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

function push(
  routeName: string,
  params?: {},
  navRef?: RefObject<NavigationContainerRef>,
) {
  const ref = navRef || navigationRef;

  ref.current?.dispatch(StackActions.push(routeName, params));
}

export default {
  navigate,
  push,
  replace,
  pop,
  popToTop,
};

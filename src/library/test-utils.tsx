import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React, {ReactElement} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ThemeProvider from '../contexts/theme-context';
import {store} from '../store';
import {ThemeA} from '../theme/themes';

export const renderWithRedux = (component: ReactElement) => {
  return {
    ...render(
      <ThemeProvider value={{theme: ThemeA, setTheme: jest.fn()}}>
        <SafeAreaProvider
          initialSafeAreaInsets={{top: 1, left: 2, right: 3, bottom: 4}}>
          <Provider store={store}>{component}</Provider>
        </SafeAreaProvider>
      </ThemeProvider>,
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export const renderWithReduxAndNavi = (component: ReactElement) => {
  const App = component;

  return {
    ...render(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>,
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export const renderWithMockStore = (
  component: ReactElement,
  mockStore: object,
) => {
  const mockReducer = configureStore([]);
  const store = mockReducer(mockStore);

  return {
    ...render(
      <SafeAreaProvider
        initialSafeAreaInsets={{top: 1, left: 2, right: 3, bottom: 4}}>
        <Provider store={store}>{component}</Provider>
      </SafeAreaProvider>,
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export const renderWithSafeArea = (component: ReactElement) => ({
  ...render(
    <ThemeProvider value={{theme: ThemeA, setTheme: jest.fn()}}>
      <SafeAreaProvider
        initialSafeAreaInsets={{top: 1, left: 2, right: 3, bottom: 4}}>
        {component}
      </SafeAreaProvider>
    </ThemeProvider>,
  ),
});

export const makeProps = (
  params: {[key: string]: any} = {},
  props?: object,
) => ({
  navigation: {
    addListener: jest.fn().mockReturnValue(jest.fn),
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
  },
  route: {params},
  ...props,
});

import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import RootNavigator from './src/root-navigator';
import {persistor, store} from './src/store';

import {navigationRef} from './src/navigation/navigation-service';
import ThemeProvider from './src/contexts/theme-context';

export default () => (
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

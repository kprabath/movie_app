global.fetch = require('jest-fetch-mock');

global.mockNavigation = {navigate: jest.fn()};
global.mockRouteParams = {params: jest.fn()};
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockNavigation,
  useRoute: () => mockRouteParams,
}));

jest.mock('react-native-svg');

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    TouchableWithoutFeedback: View,
  };
});

jest.mock('@react-native-community/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args,
  };
});

jest.mock('react-redux', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-redux');

  return {
    __esModule: true,
    ...originalModule,
    batch: callback => {
      callback();
    },
  };
});

// Disable YellowBox warnings in tests
console.disableYellowBox = true;

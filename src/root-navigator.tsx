import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from './library/enums';
import {RootStackParamList} from './library/types';

import HomeScreen from './screens/home/home-screen';
import DetailScreen from './screens/detail/detail-screen';
import WhistListScreen from './screens/wishlist/wish-list-screen';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.HOME} component={HomeScreen} />
      <HomeStack.Screen name={Screens.DETAIL_PAGE} component={DetailScreen} />
      <HomeStack.Screen name={Screens.WHIST_LIST} component={WhistListScreen} />
    </HomeStack.Navigator>
  );
};

export default RootNavigator;

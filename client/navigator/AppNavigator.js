/* eslint react/prop-types: 0 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreens';

const activeColor = '#FED433';
const inactiveColor = '#b8bece';


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: 'modal',
  
    // transitionConfig,
  },
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state.routes[navigation.state.index];

  // if (routeName === 'Section') {
  //   tabBarVisible = false;
  // }

  return {
    tabBarVisible,
    tabBarLabel: 'מאגר',
    navigationOptions: {
      header: {
        visible: false,
      },
    },
    tabBarOptions: { showLabel: false },
    tabBarIcon: ({ focused }) => (
      <Ionicons name="library" size={22} color={focused ? activeColor : inactiveColor} />
    ),
  };
};

const FavoritesStack = createStackNavigator({
  Favorites:{
      screen: FavoritesScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
});

FavoritesStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  // tabBarLabel: 'שמורים',
  tabBarIcon: ({ focused }) => (
    <AntDesign name="star" size={22} color={focused ? activeColor : inactiveColor} />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    FavoritesStack,
  },
  {
    mode: 'modal',
    tabBarOptions: {
      style: {
        paddingBottom: 10,
        paddingTop: 8,
        height: 80,
        elevation: 12,
      },
    },
  }
);

export default createAppContainer(TabNavigator);


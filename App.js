import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer , createStackNavigator , createDrawerNavigator} from 'react-navigation';
import HomeScreen from './pages/home';
import Activity from './pages/Activity';
import User from './pages/user';
import Agent from './pages/agent';
import {Icon} from 'native-base';
import {baseStyle} from "./style/base";
const HomeStack = createStackNavigator({
  Home: HomeScreen
});
const Hometab = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => ({
        title: `首页`,
        tabBarIcon:({tintColor, focused}) => (
            <Icon
                name='home' style={{color:baseStyle.acyive(focused)}}
            />
        ),
    }),
  },
  Activity:{
    screen: Activity,
    navigationOptions: () => ({
        title: `活动`,
        tabBarIcon:({tintColor, focused}) => (
            <Icon
                name='logo-apple' style={{color:baseStyle.acyive(focused)}}
            />
        ),
    }),
  },
  User:{
    screen: User,
    navigationOptions: () => ({
        title: `我的`,
        tabBarIcon:({tintColor, focused}) => (
            <Icon
                name='person' style={{color:baseStyle.acyive(focused)}}
            />
        ),
    }),
  },
},
    {
      tabBarOptions: {
        activeTintColor:baseStyle.acyive(true),
        inactiveTintColor:'#fff',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: baseStyle.them.backgroundColor
        },
      }
    }
);
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Hometab,
  },
  Activity: {
    screen: Activity,
  },
  User: {
    screen: User,
  },
      Agent: {
        screen: Agent,
      },
},
    {
      drawerBackgroundColor:baseStyle.them.backgroundColor,
      contentOptions:{
        activeTintColor:baseStyle.acyive(true),
        inactiveTintColor:'#fff'
      },
        drawerType:'slide'
    }
    );

export default createAppContainer(MyDrawerNavigator);
import React from 'react';
import {Text, View, ScrollView, SafeAreaView, Image} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';
import HomeScreen from './pages/home';
import Activity from './pages/Activity';
import User from './pages/user';
import Agent from './pages/agent';
import signIn from './pages/signIn'
import {Icon, Button, Container} from 'native-base';
import {baseStyle} from "./style/base";

const HomeStack = createStackNavigator({
    Home: HomeScreen
});
const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={{
                width: '100%',
                height: 140,
                marginTop: 10,
                marginBottom: 10,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Image
                    style={{width: '100%', height: 74, marginBottom: 20}}
                    source={{uri: 'https://image.hnidb.cn/sr/picture/logo/201901080942121976544636.png'}}
                />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{width: 68, height: 33}}>
                        <Button warning style={{height: 33, width: 68, justifyContent: 'center'}}
                                onPress={() => props.navigation.navigate('signIn')}><Text
                            style={{color: '#fff'}}>注册</Text></Button>
                    </View>
                    <View style={{width: 68, height: 33}}>
                        <Button success style={{height: 33, width: 68, justifyContent: 'center'}}
                                onPress={() => props.navigation.navigate('signIn')}><Text
                            style={{color: '#fff'}}>登录</Text></Button>
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
                <DrawerItems {...props} />
            </View>
        </SafeAreaView>
    </ScrollView>
);
const Hometab = createBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: ({navigation}) => ({
                title: `首页`,
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='home' style={{color: baseStyle.acyive(focused)}}
                    />
                ),
            }),
        },
        Activity: {
            screen: Activity,
            navigationOptions: () => ({
                title: `活动`,
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='logo-apple' style={{color: baseStyle.acyive(focused)}}
                    />
                ),
            }),
        },
        User: {
            screen: User,
            navigationOptions: () => ({
                title: `我的`,
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='person' style={{color: baseStyle.acyive(focused)}}
                    />
                ),
            }),
        },
    },
    {
        tabBarOptions: {
            activeTintColor: baseStyle.acyive(true),
            inactiveTintColor: '#fff',
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
            navigationOptions: () => ({
                title: `首页`,
            }),
        },
        Activity: {
            screen: Activity,
            navigationOptions: () => ({
                title: `活动`,
            }),
        },
        User: {
            screen: User,
            navigationOptions: () => ({
                title: `会员中心`,
            }),
        },
        Agent: {
            screen: Agent,
            navigationOptions: () => ({
                title: `代理`,
            }),
        }
    },
    {
        drawerBackgroundColor: baseStyle.them.backgroundColor,
        contentOptions: {
            activeTintColor: baseStyle.acyive(true),
            inactiveTintColor: '#fff'
        },
        contentComponent: CustomDrawerContentComponent,//自定义侧边栏组件
        drawerType: 'slide',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(MyDrawerNavigator);
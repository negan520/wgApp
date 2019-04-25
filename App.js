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
import signIn from './pages/signIn';
import Register from './pages/register';
import Vip from './pages/vip';
import vipClub from './pages/vipClub'
import { Button, Container,ListItem,Left,Body,Right} from 'native-base';
import {baseStyle} from "./style/base";
import Icon from 'react-native-vector-icons/FontAwesome5';
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
                                onPress={() => props.navigation.navigate('Register')}><Text
                            style={{color: '#fff'}}>注册</Text></Button>
                    </View>
                    <View style={{width: 68, height: 33}}>
                        <Button success style={{height: 33, width: 68, justifyContent: 'center'}}
                                onPress={() => props.navigation.navigate('signIn')}><Text
                            style={{color: '#fff'}}>登录</Text></Button>
                    </View>
                </View>
            </View>
            <View style={{flex: 1,paddingRight:10}}>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                            <Icon name="crown" size={18} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>VIP俱乐部</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={22} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="gift" size={25} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>优惠活动</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="user-md" size={25} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>代理中心</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="universal-access" size={25} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>安全中心</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="user-circle" size={25} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>会员中心</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="comments-o" size={20} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>在线客服</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="arrow-down" size={25} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>APP下载</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={()=>{props.navigation.navigate('Register')}}>
                    <Left>
                        <Icon name="laptop" size={18} color='#fff'/>
                    </Left>
                    <Body style={baseStyle.menusItem}>
                    <Text style={{color:baseStyle.colorWite.color}}>电脑版</Text>
                    </Body>
                    <Right style={baseStyle.menusItemCon}>
                        <Icon name="angle-right" size={25} color='#fff'/>
                    </Right>
                </ListItem>
                <View style={{paddingLeft:20,paddingRight:10,paddingTop:20}}>
                    <Button full warning style={baseStyle.buttonSubymit}>
                        <Text style={{color:'#fff'}}>免费试玩</Text>
                    </Button>
                </View>
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
                        name='home' size={20} color={baseStyle.acyive(focused)}
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
                        name='gift' size={20} color={baseStyle.acyive(focused)}
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
                        name='user' size={20} color={baseStyle.acyive(focused)}
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
        signIn: {
            screen: signIn,
            title: '登录',
            headerTitle:'登录'
        },
        Register: {
            screen: Register,
            title: '注册',
            headerTitle:'注册'
        },
        Agent: {
            screen: Agent,
            navigationOptions: () => ({
                title: `代理`,
            }),
        },
        Vip: {
            screen: Vip,
            navigationOptions: () => ({
                title: `VIP`,
            }),
        },
        vipClub: {
            screen: vipClub,
            navigationOptions: () => ({
                title: `VIP`,
            }),
        }
    },
    {
        drawerBackgroundColor: baseStyle.mainBackground.backgroundColor,
        contentOptions: {
            activeTintColor: baseStyle.acyive(true),
            inactiveTintColor: '#fff',
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
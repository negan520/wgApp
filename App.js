import React,{Component} from 'react';
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
import vipClub from './pages/vipClub';
import Fund from './pages/fund';
import Safe from './pages/safe';
import Concacts from './pages/contacts';
import EditPassWord from './pages/editPassword';
import EditSafePass from './pages/editSafePass';
import PassProtection from './pages/passProtection';
import BankCard from './pages/bankCard';
import { Button, Container,ListItem,Left,Body,Right,Footer,FooterTab} from 'native-base';
import {baseStyle} from "./style/base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from "react-redux";
import {isLogin} from "./actions/loginAction";
const HomeStack = createStackNavigator({
    Home: HomeScreen
});
export class FooterTobar extends Component {
    render() {
        return (
            <Footer style={{backgroundColor: baseStyle.them.backgroundColor}}>
                <FooterTab style={{paddingTop:10,height:60}}>
                    <Button vertical onPress={()=>this.props.navigat.navigate('Home')}>
                        <Icon
                            name='home' size={26} color={this.props.navigat.state.index==0?'#36a6e5':'#fff'}
                        />
                        <Text style={{color:this.props.navigat.state.index==0?'#36a6e5':'#fff',marginTop:5}}>首页</Text>
                    </Button>
                    <Button vertical onPress={()=>this.props.navigat.navigate('Activity')}>
                        <Icon
                            name='gift' size={26} color={this.props.navigat.state.index==1?'#36a6e5':'#fff'}
                        />
                        <Text style={{color:this.props.navigat.state.index==1?'#36a6e5':'#fff',marginTop:5}}>活动</Text>
                    </Button>
                    <Button vertical onPress={()=>{console.log('ff',this.props.navigat.state.index)}}>
                        <Icon
                            name='handshake' size={26} color={this.props.navigat.state.index==4?'#36a6e5':'#fff'}
                        />
                        <Text style={{color:this.props.navigat.state.index==4?'#36a6e5':'#fff',marginTop:5}}>代理</Text>
                    </Button>
                    <Button vertical onPress={()=>{}}>
                        <Icon
                            name='weixin' size={32} color={this.props.navigat.state.index==5?'#36a6e5':'#fff'}
                        />
                        <Text style={{color:this.props.navigat.state.index==5?'#36a6e5':'#fff',marginTop:5}}>客服</Text>
                    </Button>
                    <Button vertical onPress={()=>this.props.navigat.navigate(this.props.isSuccess?'User':'signIn', {
                        pageName:'User'
                    })}>
                        <Icon
                            name='user' size={26} color={this.props.navigat.state.index==2?'#36a6e5':'#fff'}
                        />
                        <Text style={{color:this.props.navigat.state.index==2?'#36a6e5':'#fff',marginTop:5}}>我的</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
let FooterTobarContain = connect((state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user,
}), (dispatch) => ({
    isLogin: (user) => dispatch(isLogin(user)),
}))(FooterTobar);
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
                <ListItem icon onPress={()=>{props.navigation.navigate('vipClub')}}>
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
                <ListItem icon onPress={()=>{props.navigation.navigate('Activity')}}>
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
                <ListItem icon onPress={()=>{props.navigation.navigate('Safe')}}>
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
                <ListItem icon onPress={()=>{props.navigation.navigate('User')}}>
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
        Home:HomeStack,
        Activity:Activity
    },
    {
        tabBarComponent:({navigation})=>(
            <FooterTobarContain navigat={navigation}/>
        )
    }
);
const MyDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: Hometab,
            navigationOptions: () => ({
                title: `首页`,
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
        },
        Fund: {
            screen: Fund
        },
        Safe: {
            screen: Safe
        },
        Concacts:{
            screen: Concacts
        },
        EditPassWord:{
            screen: EditPassWord
        },
        EditSafePass:{
            screen: EditSafePass
        },
        PassProtection:{
            screen: PassProtection
        },
        BankCard:{
            screen: BankCard
},
        },
    {
        drawerBackgroundColor: baseStyle.mainBackground.backgroundColor,
        contentOptions: {
            activeTintColor: baseStyle.acyive(true),
            inactiveTintColor: '#fff',
        },
        contentComponent: CustomDrawerContentComponent,//自定义侧边栏
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
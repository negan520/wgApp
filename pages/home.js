import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, FlatList, ScrollView, AsyncStorage} from 'react-native';
import Swiper from 'react-native-swiper';
import {Container, Header, Tab, Tabs, TabHeading,Button} from 'native-base';
import {getInfo, getSwiper, getGameList, getChildGameList} from '../serve/getData';
import {imageUrl, signOut} from "../serve/getData";
import {baseStyle} from "../style/base";
import {domain} from "../config/api";
import {connect} from 'react-redux';
import {login, isLogin} from '../actions/loginAction';
import MarqueeLabel from 'react-native-lahk-marquee-label';
import Icon from 'react-native-vector-icons/FontAwesome5';
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../images/201812201156402955427070.png')}
            />
        );
    }
}

class Homebutton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Icon name='list-ul' onPress={() => _this.props.navigation.openDrawer()}
                  size={30} color="#fff"  style={{marginLeft:10}}/>
        );
    }
}

class HeaderR extends React.Component {
    componentDidUpdate() {

    }

    userLoginOut() {
        signOut().then((res) => {
            if (res.Code == 'SessionNotExist') {
                AsyncStorage.setItem('user', JSON.stringify({}));
                AsyncStorage.setItem('zz', '');
                this.props.isLogin('');
            }
        })
    }

    render() {
        return !this.props.isSuccess ? (
            <ImageBackground source={require('../images/header_login_regiter.png')} style={{
                flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                height:22,
                paddingTop:0,
                borderRadius:5,
                alignItems: 'flex-start',
                width: 83,
            }}>
                <Button onPress={() => this.props.name.navigate('signIn')} transparent warning style={baseStyle.loginButton}>
                    <Text style={{color:'#fff'}}>登录</Text>
                </Button>
                <Button onPress={() => this.props.name.navigate('Agent')} transparent warning style={baseStyle.loginButton}>
                    <Text style={{color:'#fff'}}>注册</Text>
                </Button>
            </ImageBackground>
        ) : (
            <Text onPress={() => this.userLoginOut()} style={{color:"#fff"}}>退出</Text>
        )
    }
}

let HeaderRContainer = connect((state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user,
}), (dispatch) => ({
    isLogin: (user) => dispatch(isLogin(user)),
}))(HeaderR);

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        _this = this;
        this.state = {
            swipers: [],
            gameList: null,
            gameChild: [],
            tabIndex: 0,
            merhcantInfo:'',
            lastingDomai:''
        };
        this.changgeTab = (index) => {
            this.setState({tabIndex: index})
        }
    }

    userLoginOut() {
        signOut().then(function (res) {

        })
    }
    componentWillMount(){
        getInfo().then(res=> {//获取基本信息
            this.setState({lastingDomai:res.Data.BaseInfo.LastingDomain});
            this.setState({merhcantInfo:res.Data})
        });
    }
    componentDidMount(): void {
        AsyncStorage.getItem('zz').then((res) => {
            let data = res;
            if (data) {
                this.props.login(data, 'LOGIN_IN_DONE');
            } else {
                this.props.isLogin('');
            }
        })
        getSwiper(2).then(res => {//获取轮播图
            this.setState({swipers: res.Data})
        })
        getGameList(0).then(res => {//获取游戏列表
            let gameType = [
                {
                    type: 'Card',
                    name: '棋牌',
                    child: []
                },
                {
                    type: 'Casino',
                    name: '视讯',
                    child: []
                },
                {
                    type: 'Lottery',
                    name: '彩票',
                    child: []
                },
                {
                    type: 'Egames',
                    name: '电子',
                    child: []
                },
                {
                    type: 'Fish',
                    name: '捕鱼',
                    child: []
                },
                {
                    type: 'SportsBook',
                    name: '体育',
                    child: []
                }

            ]
            for (let i = 0; i < res.Data.length; i++) {
                for (let j = 0; j < gameType.length; j++) {
                    if (res.Data[i].Type == gameType[j].type) {
                        gameType[j].child.push(res.Data[i])
                    }
                }
            }
            this.setState({gameList: gameType})
        })
        getChildGameList(JSON.stringify({
            "ParentClassId": 12,
            "ChildClassId": 0,
            "IsHot": false,
            "Platform": 2
        })).then(res => {
            this.setState({gameChild: res.Data});
        })
    }

    componentDidUpdate() {

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle/>,
            headerLeft: <Homebutton/>,
            headerRight: <HeaderRContainer name={navigation}/>,
            headerStyle: {
                backgroundColor: baseStyle.them.backgroundColor,
                paddingEnd: 10,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };

    render(): React.ReactNode {
        return (
            <ScrollView style={{backgroundColor: '#101d3d'}}>
                <Text style={baseStyle.domaiText}>
                     主页域名:{this.state.lastingDomai}
                </Text>
                <View style={{width: '100%', height: 120, backgroundColor: baseStyle.mainBackground.backgroundColor}}>
                    {
                        this.state.swipers.length ? (<Swiper autoplay={true} style={styles.wrapper}>
                            {
                                this.state.swipers.map((station, index) => (
                                    <View key={index} style={styles.slide1}><Image
                                        style={styles.imgestyle}
                                        source={{uri: imageUrl + station.Url}}
                                    /></View>
                                ))
                            }
                        </Swiper>) : (<View/>)
                    }
                </View>
                <View style={{flex:1,flexDirection: 'row',height:28}}>
                    <View style={{width:32,height:28,lineHeight:28,marginLeft:5}}>
                        <Icon name="volume-up" size={25} color="#4F8EF7" />
                    </View>
                    <View style={{flex:1,}}>
                        <MarqueeLabel
                            speed={50}
                            textStyle={{fontSize: 13, color: 'white' }}
                        >
                            This is a Marquee Label.
                        </MarqueeLabel>
                    </View>
                </View>
                <Tabs onChangeTab={(item) => this.setState({tabIndex: item.i})}>
                    <Tab heading="棋牌" activeTextStyle={{color: styles.gameTabStyle.color}}
                         activeTabStyle={{backgroundColor: baseStyle.acyive(true)}}
                         textStyle={{color: styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                            {
                                this.state.gameChild.map((station, index) => (
                                    <View key={index} style={{
                                        width: '25%',
                                        height: 89,
                                        marginTop: 20,
                                        paddingLeft: 10,
                                        paddingRight: 10
                                    }}>
                                        <Image
                                            style={{width: '100%', height: 69}}
                                            source={{uri: domain + '/assets/images/game/' + station[0].GameId + '.png'}}
                                        />
                                        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
                                            {station[1]}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </Tab>
                    <Tab heading="真人" activeTextStyle={{color: styles.gameTabStyle.color}}
                         activeTabStyle={{backgroundColor: baseStyle.acyive(true)}}
                         textStyle={{color: styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                            {
                                (this.state.tabIndex == 1) ? this.state.gameList[1].child.map((station, index) => (
                                    <View key={station.Id} style={{
                                        width: '50%',
                                        height: 120,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                        paddingRight: 5
                                    }}>
                                        <Image
                                            style={{width: '100%', height: 120}}
                                            source={{uri: domain + '/assets/images/game' + station.Id + '.png'}}
                                        />
                                    </View>
                                )) : (<View/>)
                            }
                        </View>
                    </Tab>
                    <Tab heading="彩票" activeTextStyle={{color: styles.gameTabStyle.color}}
                         activeTabStyle={{backgroundColor: baseStyle.acyive(true)}}
                         textStyle={{color: styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                        <View>
                            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>

                            </View>
                            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>

                            </View>
                            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
                        </View>
                    </Tab>
                    <Tab heading="电子" activeTextStyle={{color: styles.gameTabStyle.color}}
                         activeTabStyle={{backgroundColor: baseStyle.acyive(true)}}
                         textStyle={{color: styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                        <View>
                            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
                        </View>
                    </Tab>
                    <Tab heading="捕鱼" activeTextStyle={{color: styles.gameTabStyle.color}}
                         activeTabStyle={{backgroundColor: baseStyle.acyive(true)}}
                         textStyle={{color: styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                        <View>
                            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
                        </View>
                    </Tab>
                </Tabs>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgestyle: {
        width: '100%',
        height: 120
    },
    gameTabStyle: {
        backgroundColor: baseStyle.mainBackground.backgroundColor,
        color: '#fff'
    }
});
export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: (data, status) => dispatch(login(data, status)),
        isLogin: (user) => dispatch(isLogin(user)),
    })
)(HomeScreen)
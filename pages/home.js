import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, FlatList, ScrollView, AsyncStorage,TouchableOpacity,PanResponder} from 'react-native';
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
import NavigationService from '../config/NavigationService';
import ScrollableTabView from 'react-native-scrollable-tab-view';
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
                  size={22} color="#fff"  style={{marginLeft:10}}/>
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
                <Button onPress={() =>NavigationService.navigate('signIn')} transparent warning style={baseStyle.loginButton}>
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
class ImageView extends React.Component{//占位图效果组件
    state: {
        loading: boolean;
    };
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentWillMount(){

    }
    render() {
        return (
            <View style={[this.props.style,{position:'relative'}]}>
                <Image style={[this.props.style]} source={this.props.source} onLoad={() => this.setState({loading: false})}/>
                {this.state.loading ? <Image style={[this.props.style,{positionX:0,positionY:0,position:'absolute'}]} source={this.props.placeholderSource}/> : null}
            </View>
        );
    }
}
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        _this = this;
        this.state = {
            swipers: [],
            gameList: null,
            gameChild: [],
            lotteryList:[],
            tabIndex: 0,
            merhcantInfo:'',
            lastingDomai:'',
            tabNav:[
                {name:'棋牌',active:require('../images/active_gameType_Card.png'),img:require('../images/gameType_Card.png')},
                {name:'真人',active:require('../images/active_gameType_Casino.png'),img:require('../images/gameType_Casino.png')},
                {name:'彩票',active:require('../images/active_gameType_Lottery.png'),img:require('../images/gameType_Lottery.png')},
                {name:'电子',active:require('../images/active_gameType_Egames.png'),img:require('../images/gameType_Egames.png')},
                {name:'捕鱼',active:require('../images/active_gameType_Fish.png'),img:require('../images/gameType_Fish.png')},
                {name:'体育',active:require('../images/active_gameType_SportsBook.png'),img:require('../images/gameType_SportsBook.png')},
                ]
        };
        this.changgeTab = (index) => {
            this.setState({tabIndex: index});
            if (index==2)
            {
                getChildGameList(JSON.stringify({"ParentClassId":33,"ChildClassId":0,"IsHot":false,"Platform":2})).then(res => {
                    this.setState({lotteryList: res.Data});
                });
            }
        }
    }

    userLoginOut() {
        signOut().then(function (res) {

        })
    }
    componentWillMount(){
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder:  (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(`gestureState.dx : ${gestureState.dx}   gestureState.dy : ${gestureState.dy}`);
                this.setState({
                    marginLeft: this.lastX + gestureState.dx,
                    marginTop: this.lastY + gestureState.dy,
                });
            },
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.lastX = this.state.marginLeft;
                this.lastY = this.state.marginTop;
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });
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
            this.setState({gameList: gameType});
            console.log(this.state.gameList,'sgdhs');
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
            <View scrollEventThrottle={1} onContentSizeChange={()=>{console.log('0-0-0')}} style={{backgroundColor: '#101d3d',flex:1}}>
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
                <View style={{flexDirection: 'row',height:28}}>
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
                <ScrollableTabView
                   page={this.state.tabIndex} onChangeTab={(item)=>this.changgeTab(item.i)} renderTabBar={() => <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#123079',borderStyle:'solid',height:74}}>
                    {
                        this.state.tabNav.map((station,index)=>(
                            <TouchableOpacity onPress={() => this.changgeTab(index)} style={{flex:1,height:74,alignItems:'center',justifyContent:'center'}}>
                                {
                                    this.state.tabIndex==index?(
                                        <ImageBackground style={{flex:1,alignItems:'center',height:74,width:'100%',justifyContent:'center'}} source={require('../images/game_nav_active.png')}>
                                            <Image style={{height:38,width:38}} source={station.active}/>
                                            <Text style={{color:'#fff',marginTop:5}}>{station.name}</Text>
                                        </ImageBackground>
                                    ):(<View style={{flex:1,alignItems:'center',height:74,width:'100%',justifyContent:'center'}}>
                                        <Image style={{height:38,width:38}} source={station.img}/>
                                        <Text style={{color:'#fff',marginTop:5}}>{station.name}</Text>
                                    </View>)
                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>}>
                    <ScrollView>
                        <View ref='card' tabLabel="card" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                            {
                                this.state.gameChild.map((station, index) => (
                                    <View style={{
                                        width: '25%',
                                        height: 89,
                                        marginTop: 20,
                                        paddingLeft:5,
                                        paddingRight:5,
                                        paddingBottom:10
                                    }}>
                                        <View key={index} style={{backgroundColor:'#162a5b',borderRadius:5,paddingBottom:10,alignItems:'center'}}>
                                            <ImageView style={{width:69, height: 69,textAlign:'center'}} source={{uri: domain + '/assets/images/game/' + station[0].GameId + '.png'}} placeholderSource={require('../images/loading_small.png')}/>
                                            <Text numberOfLines={1} style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
                                                {station[1]}
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View ref='casino' tabLabel="casino"  style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
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
                                )) :null
                            }
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View ref='lottery' tabLabel="lottery" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                            {
                                (this.state.tabIndex == 2)?this.state.lotteryList.map((station, index) => (
                                    <View style={{
                                        width: '25%',
                                        height: 89,
                                        marginTop: 20,
                                        paddingLeft:5,
                                        paddingRight:5,
                                        paddingBottom:10
                                    }}>
                                        <View key={index} style={{backgroundColor:'#162a5b',borderRadius:5,paddingBottom:10,alignItems:'center'}}>
                                            <ImageView style={{width:69, height: 69}} source={{uri: domain + '/assets/images/game/' + station[0].GameId + '.png'}} placeholderSource={require('../images/loading_small.png')}/>
                                            <Text numberOfLines={1} style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
                                                {station[1]}
                                            </Text>
                                        </View>
                                    </View>
                                )):null
                            }
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View ref='game' tabLabel="game" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                            {
                                (this.state.tabIndex == 3) ? this.state.gameList[3].child.map((station, index) => (
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
                                )) :null
                            }
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View ref='fish' tabLabel="fish" style={{flex: 1,backgroundColor: '#101d3d'}}>
                            {
                                (this.state.tabIndex ==4) ? this.state.gameList[4].child.map((station, index) => (
                                    <View key={station.Id} style={{
                                        width:'100%',
                                        height: 123,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                        paddingRight: 5
                                    }}>
                                        <Image
                                            style={{width: '100%', height: 120}}
                                            source={{uri: domain + '/assets/Default/game' + station.Id + '.png'}}
                                        />
                                    </View>
                                )) :null
                            }
                            <View style={{
                                width:'100%',
                                height: 123,
                                marginTop: 10,
                                paddingLeft: 5,
                                paddingRight: 5
                            }}>
                                <Image
                                    style={{width: '100%', height: 120}}
                                    source={{uri:'http://m.yc02.com/assets/Default/gameFishjqqd.png'}}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View ref='sport' tabLabel="sport"  style={{flex: 1,backgroundColor: '#101d3d'}}>
                            {
                                (this.state.tabIndex ==5) ? this.state.gameList[5].child.map((station, index) => (
                                    <View key={station.Id} style={{
                                        width:'100%',
                                        height: 123,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                        paddingRight: 5
                                    }}>
                                        <Image
                                            style={{width: '100%', height: 120}}
                                            source={{uri: domain + '/assets/Default/game' + station.Id + '.png'}}
                                        />
                                    </View>
                                )) :null
                            }
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
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
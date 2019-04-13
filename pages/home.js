import React,{ Component } from 'react';
import {Text,View,Button,Image,ImageBackground,StyleSheet,FlatList,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Header, Tab, Tabs, TabHeading, Icon} from 'native-base';
import {getInfo,getSwiper,getGameList,getChildGameList} from '../serve/getData';
import {imageUrl} from "../serve/getData";
import {baseStyle} from "../style/base";
import {domain} from "../config/api";
import {connect} from 'react-redux'
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
            <Icon ios='ios-menu' onPress={() => navigation.openDrawer()} android="md-menu" style={{fontSize:30, color: '#fff',marginLeft:10}}/>
        );
    }
}
 class HomeScreen extends Component{
    constructor(props){
        super(props);
        navigation = this.props.navigation;
        this.state={
            swipers:[],
            gameList:null,
            gameChild:[],
            tabIndex:0
        };
        this.changgeTab=(index)=>{
            this.setState({tabIndex:index})
        }
    }
    componentDidMount(): void {
        getInfo().then(function (res) {//获取基本信息

        });
        getSwiper(2).then(res=>{//获取轮播图
            this.setState({swipers:res.Data})
        })
        getGameList(0).then(res=>{//获取游戏列表
            let gameType=[
                {
                    type:'Card',
                    name:'棋牌',
                    child:[]
                },
                {
                    type:'Casino',
                    name:'视讯',
                    child:[]
                },
                {
                    type:'Lottery',
                    name:'彩票',
                    child:[]
                },
                {
                    type:'Egames',
                    name:'电子',
                    child:[]
                },
                {
                    type:'Fish',
                    name:'捕鱼',
                    child:[]
                },
                {
                    type:'SportsBook',
                    name:'体育',
                    child:[]
                }

            ]
            for (let i=0;i<res.Data.length;i++)
            {
                for (let j=0;j<gameType.length;j++)
                {
                    if (res.Data[i].Type==gameType[j].type)
                    {
                        gameType[j].child.push(res.Data[i])
                    }
                }
            }
            this.setState({gameList:gameType})
        })
        getChildGameList(JSON.stringify({"ParentClassId":12,"ChildClassId":0,"IsHot":false,"Platform":2})).then(res=>{
            this.setState({gameChild:res.Data});
        })
    }
     shouldComponentUpdate(nextProps, nextState,user){
        console.log('状态',nextProps,nextProps,user)
     }
    static navigationOptions = {
        headerTitle:<LogoTitle />,
        headerLeft:<Homebutton/>,
        headerRight: (
            <ImageBackground source={require('../images/header_login_regiter.png')} style={{flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                height:30,
                alignItems:'flex-start',
                width:83,
            }}>
                    <Button
                        onPress={() => navigation.navigate('Agent')}
                        title="登录"
                        color="#fff"
                    />
                    <Button
                        onPress={() => navigation.navigate('Agent')}
                        title="注册"
                        color="#fff"
                    />
            </ImageBackground>
        ),
        headerStyle: {
            backgroundColor:baseStyle.them.backgroundColor,
            paddingEnd:10,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render(): React.ReactNode {
        return (
                <ScrollView style={{backgroundColor:'#101d3d'}}>
                    <View style={{width:'100%', height:120, backgroundColor:baseStyle.mainBackground.backgroundColor}}>
                        {
                            this.state.swipers.length?( <Swiper autoplay={true} style={styles.wrapper}>
                                {
                                    this.state.swipers.map((station,index) => (
                                        <View key={index} style={styles.slide1}><Image
                                            style={styles.imgestyle}
                                            source={{uri:imageUrl+station.Url}}
                                        /></View>
                                    ))
                                }
                            </Swiper>):(<View/>)
                        }
                    </View>
                    <Tabs onChangeTab={(item)=>this.setState({tabIndex:item.i})}>
                        <Tab heading="棋牌" activeTextStyle={{color:styles.gameTabStyle.color}} activeTabStyle={{backgroundColor:baseStyle.acyive(true)}} textStyle={{color:styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                            <View style={{flex: 1, flexDirection: 'row',flexWrap:'wrap',backgroundColor:'#101d3d'}}>
                                {
                                    this.state.gameChild.map((station,index) => (
                                        <View key={index} style={{width:'25%', height:89,marginTop:20,paddingLeft:10,paddingRight:10}}>
                                            <Image
                                                style={{width:'100%',height:69}}
                                                source={{uri:domain+'/assets/images/game/'+station[0].GameId+'.png'}}
                                            />
                                            <Text style={{color:'#fff',textAlign:'center',marginTop:5}}>
                                                {station[1]}
                                            </Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </Tab>
                        <Tab heading="真人" activeTextStyle={{color:styles.gameTabStyle.color}} activeTabStyle={{backgroundColor:baseStyle.acyive(true)}} textStyle={{color:styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                            <View style={{flex: 1, flexDirection: 'row',flexWrap:'wrap',backgroundColor:'#101d3d'}}>
                                {
                                    (this.state.tabIndex==1)?this.state.gameList[1].child.map((station,index) => (
                                        <View key={station.Id} style={{width:'50%', height:120,marginTop:10,paddingLeft:5,paddingRight:5}}>
                                            <Image
                                                style={{width:'100%',height:120}}
                                                source={{uri:domain+'/assets/images/game'+station.Id+'.png'}}
                                            />
                                        </View>
                                    )):(<View/>)
                                }
                            </View>
                        </Tab>
                        <Tab heading="彩票" activeTextStyle={{color:styles.gameTabStyle.color}} activeTabStyle={{backgroundColor:baseStyle.acyive(true)}} textStyle={{color:styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                            <View>
                                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                            </View>
                        </Tab>
                        <Tab heading="电子" activeTextStyle={{color:styles.gameTabStyle.color}} activeTabStyle={{backgroundColor:baseStyle.acyive(true)}} textStyle={{color:styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                            <View>
                                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                            </View>
                        </Tab>
                        <Tab heading="捕鱼" activeTextStyle={{color:styles.gameTabStyle.color}} activeTabStyle={{backgroundColor:baseStyle.acyive(true)}} textStyle={{color:styles.gameTabStyle.color}} tabStyle={styles.gameTabStyle}>
                            <View>
                                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
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

    wrapper: {
    },

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
    imgestyle:{
        width:'100%',
        height:120
    },
    gameTabStyle:{
        backgroundColor:baseStyle.mainBackground.backgroundColor,
        color:'#fff'
    }
});
export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)(HomeScreen)
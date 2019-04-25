import React,{ Component } from 'react';
import {Text, View, ScrollView, WebView, ImageBackground, Image} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title,
    Content,
} from 'native-base'
import {baseStyle} from "../style/base";
import {getActivity} from "../serve/getData";
import Img from '../component/Img';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class vipClub extends Component{
    constructor(props) {
        super(props);
        this.state = {
            indexSet:0
        };
    }
    componentWillMount(){

    }
    changeIndex(index)
    {
        this.setState({indexSet:index})
    }
    render() {
        return (
            <Container style={baseStyle.main}>
                <Header style={baseStyle.headerStyle}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='chevron-left' size={26} color={baseStyle.colorWite.color}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>VIP俱乐部</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View>
                        <Image
                            style={{width:'100%',height:150}}
                            source={require('../images/banner_vip_home.png')}
                        />
                    </View>
                    <View style={baseStyle.activiNation}>
                        {
                            ['会员优势','晋级彩金','会员特权','特权说明'].map((station, index)=>(
                                (this.state.indexSet==index)?<ImageBackground source={require('../images/game_nav_active.png')} style={{flex:1,height:48,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fff',textAlign:'center'}}>{station}</Text>
                                </ImageBackground>:<View pointerEvents={'auto'} style={{flex:1}} key={index}><Text onPress={() => this.changeIndex(index)} style={{color:'#fff',textAlign:'center'}}>{station}</Text></View>
                            ))
                        }
                    </View>
                </ScrollView>
            </Container>)
    }
}
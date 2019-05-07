import React,{ Component } from 'react';
import {Text,View,ScrollView,WebView,ImageBackground,TouchableHighlight,FlatList} from 'react-native';
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
import NavigationService from '../config/NavigationService';
export default class Activity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activiList:[],
            indexSet:0
        };
    }
    activiType={
        'Other':7,
        'Egames':4,
        'Lottery':3,
        'Card':1
    };
    componentWillMount(){
        getActivity().then(res=> {//获取基本信息
           if(res.Code == 'NoError')
           {
               this.setState({activiList:res.Data})
           }
        });
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

                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>优惠活动</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={baseStyle.activiNation}>
                    {
                        ['全部','棋牌','真人','彩票','电子','捕鱼','体育','其他'].map((station, index)=>(
                            (this.state.indexSet==index)?<ImageBackground source={require('../images/game_nav_active.png')} style={{flex:1,height:41,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#fff',textAlign:'center'}}>{station}</Text>
                            </ImageBackground>:<TouchableHighlight onPress={() => this.changeIndex(index)} pointerEvents={'auto'} style={{flex:1}} key={index}><Text style={{color:'#fff',textAlign:'center'}}>{station}</Text></TouchableHighlight>
                        ))
                    }
                </View>
                <ScrollView>
                  <View style={{flex:1}}>
                      <FlatList
                          data={this.state.activiList}
                          extraData={this.state}
                          refreshing={true}
                          renderItem={({item}) => (
                              (this.state.indexSet==0||this.state.indexSet==this.activiType[item.PromotionClass])?<View style={{flex:1,padding:10}}>
                                  <View style={baseStyle.activiList}>
                                      <Img source={{uri:'https://image.hnidb.cn/sr/picture/promotion/'+item.Poster}} width={353} height={'auto'}/>
                                      <View style={baseStyle.activiListSet}>
                                          <Text style={{color:'#fff'}}>
                                              {item.Name}
                                          </Text>
                                          <Button style={baseStyle.activiButton} warning><Text style={{color:'#fff'}}>登录</Text></Button>
                                      </View>
                                      <View style={baseStyle.activiListSet}>
                                          <Text style={{color:'#999'}}>
                                              {item.ValidDateInfo}
                                          </Text>
                                          <Button style={[baseStyle.activiButton]} bordered warning><Text style={{color:'#ffb239'}}>查看结果</Text></Button>
                                      </View>
                                  </View>
                              </View>:null
                          )}
                      />
                  </View>
                </ScrollView>
            </Container>)
    }
}
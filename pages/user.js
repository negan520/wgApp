import React,{ Component } from 'react';
import {Text, View, ScrollView, ImageBackground, Image,TouchableOpacity,Linking} from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount(){

    }
    _onPressButton(){
        Linking.openURL('https://kingddownload.hnidb.cn/').catch(err => console.error('An error occurred', err));
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
                    <Title style={baseStyle.headerStyle}>会员中心</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                  <View style={baseStyle.userInfo}>
                      <ImageBackground source={require('../images/personal_card.png')} style={{
                          width:345,
                          height:185
                      }}>
                          <View style={{flex:1,height:94,flexDirection:'row',padding:10,paddingBottom:0}}>
                              <Image
                                  style={{width:65,height:70}}
                                  source={require('../images/personal_vip_head.png')}
                              />
                              <View style={{flex:1,paddingLeft:10}}>
                                  <Text style={{fontSize:22}}>bixuzimu</Text>
                                  <View style={{flex:1,flexDirection:'row'}}>
                                      <ImageBackground style={{width:152,height:38}} source={require('../images/personal_vip.png')}>
                                          <Text style={baseStyle.lockViptx}>普通会员</Text>
                                      </ImageBackground>
                                      <Button style={baseStyle.lockVipbt}>
                                          <Text style={baseStyle.lockVipbttx}>查看特权</Text>
                                      </Button>
                                  </View>
                                  <Text style={{}}>
                                      上次登录：2019-04-24 08:37:22
                                  </Text>
                              </View>
                          </View>
                          <View style={{flexDirection:'row'}}>
                              <View style={{flex:1,height:49,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                  <View>
                                      <Text>
                                          总资产:0
                                      </Text>
                                      <Icon name='angle-double-down' size={20} color={'#850000'}/>
                                  </View>
                                  <View>
                                      <Text>
                                          钱包余额:0
                                      </Text>
                                      <Icon name='repeat' size={20} color={'#850000'}/>
                                  </View>
                              </View>
                          </View>
                          <View style={{height:44,width:'100%'}}>
                             <View style={{flex:1,flexDirection:"row",justifyContent:'space-around'}}>
                                 <Button iconLeft style={[{backgroundColor:'#00742b',width:72},baseStyle.vipMoneybt]}>
                                     <Icon name='amazon-pay' size={20} color={'#fff'}/>
                                     <Text style={{color:'#fff'}}>充值</Text>
                                 </Button>
                                 <Button iconLeft style={[{backgroundColor:'#d68d02',width:100},baseStyle.vipMoneybt]}>
                                     <Icon name='retweet' size={20} color={'#fff'}/>
                                     <Text style={{color:'#fff'}}>额度转换</Text>
                                 </Button>
                                 <Button iconLeft style={[{backgroundColor:'#be2e2e',width:72},baseStyle.vipMoneybt]}>
                                     <Icon name='cc-visa' size={20} color={'#fff'}/>
                                     <Text style={{color:'#fff'}}>取出</Text>
                                 </Button>
                             </View>
                          </View>
                      </ImageBackground>
                  </View>
                  <View style={{flex:1,flexDirection:"row",marginTop:10,justifyContent:"space-evenly",flexWrap:'wrap'}}>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={()=>this.props.navigation.navigate('Activity')}>
                             <Image style={{width:60,height:60}}  source={require('../images/linkIcon-promotion.png')}/>
                             <Text style={{color:'#fff',textAlign:'center'}}>优惠活动</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={()=>this.props.navigation.navigate('Vip')}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-vip.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>Vip特权</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-news.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>消息中心</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-fundingRecordsl.png')}/>
                          <Text style={{color:'#fff',textAlign:'center'}}>资金记录</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-bettingRecord.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>投注记录</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-registe.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>代理中心</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-loginPasswordl.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>安全中心</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <View style={baseStyle.userInfoLinkContain}>
                          <Image style={{width:60,height:60}}  source={require('../images/linkIcon-server.png')} />
                          <Text style={{color:'#fff',textAlign:'center'}}>客服支持</Text>
                          </View>
                      </View>
                      <View style={baseStyle.userInfoLink}>
                          <TouchableOpacity style={baseStyle.userInfoLinkContain} onPress={this._onPressButton}>
                              <Image style={{width:60,height:60}}  source={require('../images/linkIcon-appDownload.png')} />
                              <Text style={{color:'#fff',textAlign:'center'}}>APP下载</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                </ScrollView>
            </Container>)
    }
}
import React,{ Component } from 'react';
import {Text,View,ScrollView,WebView} from 'react-native';
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
export default class Activity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activiList:[]
        };
    }
    componentWillMount(){
        getActivity().then(res=> {//获取基本信息
           if(res.Code == 'NoError')
           {
               this.setState({activiList:res.Data})
           }
        });
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
                    <Title style={baseStyle.headerStyle}>优惠活动</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                  <View style={{flex:1}}>
                      {
                          this.state.activiList.map((station, index)=>(
                             <View style={{flex:1,padding:10}}>
                                 <View style={baseStyle.activiList}>
                                     <Img source={{uri:'https://image.hnidb.cn/sr/picture/promotion/'+station.Poster}} width={353} height={'auto'}/>
                                     <View style={baseStyle.activiListSet}>
                                         <Text style={{color:'#fff'}} key={index}>
                                             {station.Name}
                                         </Text>
                                         <Button style={baseStyle.activiButton} warning><Text style={{color:'#fff'}}>登录</Text></Button>
                                     </View>
                                     <View style={baseStyle.activiListSet}>
                                         <Text style={{color:'#999'}} key={index}>
                                             {station.ValidDateInfo}
                                         </Text>
                                         <Button style={[baseStyle.activiButton]} bordered warning><Text style={{color:'#ffb239'}}>查看结果</Text></Button>
                                     </View>
                                 </View>
                             </View>
                          ))
                      }
                  </View>
                </ScrollView>
            </Container>)
    }
}
import React,{ Component } from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title,
} from 'native-base'
import {baseStyle} from "../style/base";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Safe extends Component{
    constructor(props){
        super(props);
        this.state = {date:"2016-05-15 00:00:00"}
    }
    componentWillMount(){

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
                    <Title style={baseStyle.headerStyle}>安全中心</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                   <View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>真实姓名</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>真实姓名</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>币种</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>CNY</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>钱包余额</Text><Text style={[baseStyle.marRight10,baseStyle.greenColor]}>0.00</Text>
                       </View>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Concacts')}>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                           <Text style={baseStyle.vipListItemTxleft}>修改个人信息</Text><Icon name='arrow-right' size={20} color={'#fff'}/>
                       </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditPassWord')}>
                           <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                               <Text style={baseStyle.vipListItemTxleft}>修改登录密码</Text><Icon name='arrow-right' size={20} color={'#fff'}/>
                           </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditSafePass')}>
                           <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                               <Text style={baseStyle.vipListItemTxleft}>修改安全密码</Text><Icon name='arrow-right' size={20} color={'#fff'}/>
                           </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('PassProtection')}>
                           <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                               <Text style={baseStyle.vipListItemTxleft}>设置密保</Text><Icon name='arrow-right' size={20} color={'#fff'}/>
                           </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('BankCard')}>
                           <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                               <Text style={baseStyle.vipListItemTxleft}>银行卡</Text><Icon name='arrow-right' size={20} color={'#fff'}/>
                           </View>
                       </TouchableOpacity>
                       <View style={{padding:20,marginTop:10}}>
                           <Button block style={{backgroundColor:baseStyle.colorDanger.color}}>
                               <Text style={{color:'#fff'}}>退出</Text>
                           </Button>
                       </View>
                   </View>
                </ScrollView>
            </Container>)
    }
}
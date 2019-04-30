import React,{ Component } from 'react';
import {Text, View, ScrollView,ActionSheetIOS,} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title,
    Form,
    Item,
    Label,
    Input
} from 'native-base'
import {baseStyle} from "../style/base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getBankList} from "../serve/getData";

export default class BankCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            bankList:[],
            bankNmae:'请选择银行'
        }
    }
    componentWillMount(){
        getBankList().then(res => {
            let list=['选择银行','取消'];
            res.Data.forEach(function (data,item) {
                list.push(data[1])
            })
            this.setState({bankList:list});
        })
    }
    selectBank=()=>{
        ActionSheetIOS.showActionSheetWithOptions({
            options:this.state.bankList,
            cancelButtonIndex:1,
            destructiveButtonIndex:0,

        },(buttonIndex)=>{(buttonIndex!=0&&buttonIndex!=1)?this.setState({bankNmae:this.state.bankList[buttonIndex]}):''});
    };
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
                    <Title style={baseStyle.headerStyle}>绑定银行卡</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View>
                        <Form>
                            <View style={[baseStyle.vipListItem]}>
                                <Text style={[baseStyle.colorDanger,{flex:1,flexDirection:'row',justifyContent:'center',textAlign:'center'}]}>* 银行卡信息绑定后不能修改</Text>
                            </View>
                            <View onPress={()=>this.props.navigation.navigate('EditSafePass')}>
                                <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                                    <Text style={[baseStyle.vipListItemTxleft,{marginLeft:15}]}>选择银行:</Text>
                                    <Button iconRight style={{backgroundColor:'transparent'}} onPress={()=>this.selectBank()}>
                                        <Text style={{color:'#fff',marginRight:10}}>{this.state.bankNmae}</Text>
                                        <Icon name='caret-down' size={20} color={'#ddd'}/>
                                    </Button>
                                </View>
                            </View>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#fff'}}>银行账号:</Label>
                                <Input secureTextEntry={true} color={'#fff'} placeholder={'请输入银行账号'}/>
                            </Item>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#fff'}}>银行地址:</Label>
                                <Input secureTextEntry={true} color={'#fff'} placeholder={'请输入银行地址'}/>
                            </Item>
                            <View style={{padding:20,marginTop:10}}>
                                <Button block style={baseStyle.buttonSubymit}>
                                    <Text style={{color:'#fff'}}>提交</Text>
                                </Button>
                            </View>
                        </Form>
                    </View>
                </ScrollView>
            </Container>)
    }
}
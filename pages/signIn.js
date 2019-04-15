import React,{ Component } from 'react';
import {Image,Text, View,AsyncStorage} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content, Form, Item, Input} from 'native-base';
import {connect} from "react-redux";
import {isLogin, login} from "../actions/loginAction";
import {baseStyle} from "../style/base";
import {signIn} from "../serve/getData";
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
          userName:'',
          passWord:''
        }
    }
    loginSubymit=()=>{
        let _this=this;
        signIn({"UserName":this.state.userName,"Password":this.state.passWord,"VerifyCode":"","Device":"Mobile"}).then(function (res) {
            if(res.Code=='NoError')
            {

                _this.props.login(res.Data,'LOGIN_IN_DONE');
                _this.props.navigation.navigate('Home');
                AsyncStorage.setItem('user',JSON.stringify(res.Data));
            }
        })
    }
    componentDidUpdate(){
        console.log(this.props,'rrr')
    }
    render() {
        return (
            <Container style={baseStyle.mainBackground}>
                <Header style={baseStyle.headerStyle}>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>登录</Title>
                    </Body>
                    <Right />
                </Header>
                <Image
                    style={{width:'auto', height:90,marginTop:10}}
                    source={{uri:'https://image.hnidb.cn/sr/picture/logo/201901080942121976544636.png'}}
                />
                <Content style={{paddingLeft:10,paddingRight:15}}>
                    <Form>
                        <Item>
                            <Text style={{color:baseStyle.colorWite.color,fontSize:16}}>
                                用户名:
                            </Text>
                            <Input placeholder="请输入用户名" onChangeText={(userName) => this.setState({userName})}/>
                        </Item>
                        <Item>
                            <Text style={{color:baseStyle.colorWite.color,fontSize:16}}>
                                密码:
                            </Text>
                            <Input type="password" secureTextEntry={true} password={true} placeholder="请输入密码  " onChangeText={(passWord) => this.setState({passWord})}/>
                        </Item>
                        <View style={{flex:1,marginTop:10,padding:20}}>
                            <Button full style={{backgroundColor:'#a56001',borderRadius:5}} onPress={()=>this.loginSubymit()}>
                                <Text style={{color:baseStyle.colorWite.color,fontSize:16}}>立即登录</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}
export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: (data,status) => dispatch(login(data,status)),
        isLogin: (user) => dispatch(isLogin(user)),
    })
)(SignIn)

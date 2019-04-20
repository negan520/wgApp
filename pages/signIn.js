import React, {Component} from 'react';
import {Image, Text, View, AsyncStorage, ActivityIndicator,} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Content,
    Form,
    Item,
    Input,
    Toast
} from 'native-base';
import {connect} from "react-redux";
import {isLogin, login} from "../actions/loginAction";
import {baseStyle} from "../style/base";
import {signIn} from "../serve/getData";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            showToast: false,
            loading: false
        }
    }

    loginSubymit = () => {//登录提交
        if (!this.state.userName || !/^[0-9a-zA-Z]*$/.test(this.state.userName)) {
            Toast.show({
                text: "用户名格式不对!",
                position: "top"
            });
            return
        }
        if (!this.state.passWord || !/^[0-9a-zA-Z]*$/.test(this.state.passWord)) {
            Toast.show({
                text: "密码格式不对!",
                position: "top"
            });
            return
        }
        this.setState({loading: true});
        signIn({
            "UserName": this.state.userName,
            "Password": this.state.passWord,
            "VerifyCode": "",
            "Device": "Mobile"
        }).then((res) => {
            if (res.Code == 'NoError') {

                this.props.login(res.Data, 'LOGIN_IN_DONE');
                this.props.navigation.navigate('Home');
                AsyncStorage.setItem('user', JSON.stringify(res.Data));
                AsyncStorage.setItem('zz', res.Data.SessionId);
            } else {
                Toast.show({
                    text: res.Code,
                    position: "top"
                });
            }
            this.setState({loading: false})
        })
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Container style={baseStyle.mainBackground}>
                <Header style={baseStyle.headerStyle}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>登录</Title>
                    </Body>
                    <Right/>
                </Header>
                <Image
                    style={{width: 'auto', height: 90, marginTop: 10}}
                    source={{uri: 'https://image.hnidb.cn/sr/picture/logo/201901080942121976544636.png'}}
                />
                <Content style={{paddingLeft: 10, paddingRight: 15}}>
                    <Form>
                        <Item error={!/^[0-9a-zA-Z]*$/.test(this.state.userName)}>
                            <Text style={{color: baseStyle.colorWite.color, fontSize: 16}}>
                                用户名:
                            </Text>
                            <Input style={{color: baseStyle.colorWite.color, fontSize: 16}} value={this.state.userName}
                                   placeholder="请输入用户名" onChangeText={(userName) => this.setState({userName})}/>
                            {
                                this.state.userName ? (
                                    <Icon onPress={() => this.setState({userName: ''})} name='close-circle'/>) : (
                                    <View/>)
                            }
                        </Item>
                        <Item error={!/^[0-9a-zA-Z]*$/.test(this.state.passWord)}>
                            <Text style={{color: baseStyle.colorWite.color, fontSize: 16}}>
                                密码:
                            </Text>
                            <Input style={{color: baseStyle.colorWite.color, fontSize: 16}} value={this.state.passWord}
                                   type="password" secureTextEntry={true} password={true} placeholder="请输入密码  "
                                   onChangeText={(passWord) => this.setState({passWord})}/>
                            {
                                this.state.passWord ? (<Icon onPress={() => {
                                    this.setState({passWord: ''})
                                }} name='close-circle'/>) : (<View/>)
                            }
                        </Item>
                        <View style={{flex: 1, marginTop: 10, padding: 20}}>
                            <Button full style={baseStyle.buttonSubymit}
                                    onPress={() => this.loginSubymit()}>
                                <Text style={{color: baseStyle.colorWite.color, fontSize: 16}}>立即登录</Text>
                            </Button>
                        </View>
                    </Form>
                    {
                        this.state.loading ? <ActivityIndicator size="large" color="#0000ff"/> : (<View/>)
                    }
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
        login: (data, status) => dispatch(login(data, status)),
        isLogin: (user) => dispatch(isLogin(user)),
    })
)(SignIn)

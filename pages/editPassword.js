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
    Form,
    Item,
    Label,
    Input
} from 'native-base'
import {baseStyle} from "../style/base";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class EditPassWord extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
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
                    <Title style={baseStyle.headerStyle}>修改登录密码</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View>
                        <Form>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#999'}}>当前账户</Label>
                                <Input disabled={true} color={'#fff'} value={'bixuzimu'}/>
                            </Item>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#999'}}>旧的密码</Label>
                                <Input secureTextEntry={true} color={'#fff'}/>
                            </Item>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#999'}}>新的密码</Label>
                                <Input secureTextEntry={true} color={'#fff'}/>
                            </Item>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#999'}}>确认密码</Label>
                                <Input secureTextEntry={true} color={'#fff'}/>
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
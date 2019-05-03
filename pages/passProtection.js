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
import NavigationService from '../config/NavigationService';
export default class PassProtection extends Component{
    constructor(props){
        super(props);
        this.state = {
            questionList:[
                '密保问题',
                 '取消',
                '你最喜欢的明星',
                '你的生日',
                '你母亲的生日',
                '你高中班主任的名称',
                '你的性别',
                '你的宠物是',
                '你的爱好是',
                '你最喜欢的电影是',
                '你最喜欢的书是',
                '你的配偶名字是',
            ],
            safeQuestion:'请选择密保问题'
        }
    }
    componentWillMount(){

    }
    selectQuestion=()=>{
        ActionSheetIOS.showActionSheetWithOptions({
            options:this.state.questionList,
            cancelButtonIndex:1,
            destructiveButtonIndex:0,

        },(buttonIndex)=>{(buttonIndex!=0&&buttonIndex!=1)?this.setState({safeQuestion:this.state.questionList[buttonIndex]}):''});
    };
    render() {
        return (
            <Container style={baseStyle.main}>
                <ScrollView>
                    <View>
                        <Form>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#fff'}}>当前账户</Label>
                                <Input  color={'#fff'} value={'bixuzimu'}/>
                            </Item>
                            <View onPress={()=>this.props.navigation.navigate('EditSafePass')}>
                                <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom,{paddingRight:10}]}>
                                    <Text style={[baseStyle.vipListItemTxleft,{marginLeft:15}]}>修改安全密码:</Text>
                                    <Button iconRight style={{backgroundColor:'transparent'}} onPress={()=>this.selectQuestion()}>
                                        <Text style={{color:'#fff',marginRight:10}}>{this.state.safeQuestion}</Text>
                                        <Icon name='caret-down' size={20} color={'#ddd'}/>
                                    </Button>
                                </View>
                            </View>
                            <Item inlineLabel last style={baseStyle.borderBlue}>
                                <Label style={{color:'#fff'}}>密保答案</Label>
                                <Input secureTextEntry={true} color={'#fff'} placeholder={'请输入密保答案'}/>
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
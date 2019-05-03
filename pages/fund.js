import React,{ Component } from 'react';
import {Text,View,ScrollView,WebView,ImageBackground} from 'react-native';
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
import DatePicker from 'react-native-datepicker';
import NavigationService from '../config/NavigationService';
export default class Fund extends Component{
    constructor(props){
        super(props);
        this.state = {date:"2016-05-15 00:00:00"}
    }
    componentWillMount(){

    }
    render() {
        return (
            <Container style={baseStyle.main}>
                <ScrollView>
                    <DatePicker
                        is24Hour={true}
                        style={{width: 200}}
                        date={this.state.date}
                        mode="datetime"
                        showIcon={false}
                        locale='zh-Hans'
                        placeholder="选择开始时间"
                        format="YYYY-MM-DD HH:mm:ss"
                        minDate="2016-05-01 00:00:00"
                        maxDate="2020-06-01 00:00:00"
                        confirmBtnText="确定"
                        cancelBtnText="取消"
                        customStyles={{
                            dateInput: {
                                borderLeftWidth:0,
                                borderRightWidth:0,
                                borderTopWidth:0,
                                borderBottomColor:baseStyle.borderBlue,
                                marginLeft: 36,
                                color:'#fff'
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </ScrollView>
            </Container>)
    }
}
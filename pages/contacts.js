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
import NavigationService from '../config/NavigationService';
export default class Concacts extends Component{
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
                    </View>
                </ScrollView>
            </Container>)
    }
}
import React,{ Component } from 'react';
import {Text,View} from 'react-native';
export default class User extends Component{
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>用户中心</Text>
            </View>

        )
    }
}
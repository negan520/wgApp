import React,{ Component } from 'react';
import {Button, Text, View} from 'react-native';
export default class Register extends Component{
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>注册</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="back"
                />
            </View>

        )
    }
}
import React,{ Component } from 'react';
import {Button, Text, View} from 'react-native';
export default class Agent extends Component{
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>代理中心</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="back"
                />
            </View>

        )
    }
}
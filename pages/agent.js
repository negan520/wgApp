import React,{ Component } from 'react';
import {Button, Text, View} from 'react-native';
export default class Agent extends Component{
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                    <Text>代理中心</Text>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="back"
                    />
                </View>
            </View>

        )
    }
}
import React,{ Component } from 'react';
import {ActivityIndicator, View} from 'react-native';
class Loading extends Component{
    render() {
        return (
            <View style={{position:'absolute',top:'50%',left:'50%',marginLeft:-18,marginTop:-18}}>
                <ActivityIndicator size="large" color="#e268db"/>
            </View>
        );
    }

}

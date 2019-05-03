/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from "./store/ConfigureStore";
import App from './App';
import {name as appName} from './app.json';
import {Root} from 'native-base';
import Resolution from "./config/Resolution";
import NavigationService from './config/NavigationService';
const store = configureStore();
class RootContain extends Component {
    render() {
        return (
            <Resolution.FixWidthView>
            <Provider store={store}>
                <Root>
                    <App ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                </Root>
            </Provider>
            </Resolution.FixWidthView>
        )
    }
}
AppRegistry.registerComponent(appName, () => RootContain);

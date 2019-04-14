/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from "./store/ConfigureStore";
import App from './App';
import {name as appName} from './app.json';
const store = configureStore();
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
AppRegistry.registerComponent(appName, () => Root);

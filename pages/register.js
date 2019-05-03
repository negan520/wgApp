import React,{ Component } from 'react';
import {Button, Text, View,ScrollView} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {getChildGameList} from "../serve/getData";
export default class Register extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            tabIndex:0,
            tabStyle:{height:1000}
        };
        this.changgeTab = (index) => {
            this.setState({tabIndex: index});
            if (index!=1)
            {
                console.log('333')
                this.setState({tabStyle:{height:50}})
            }
            else {
                console.log('000')
                this.setState({tabStyle:{height:2000}})
            }
        }
    }
    render() {
        return (
            <Container>
                <Header hasTabs />
                <ScrollView>
                    <Tabs onChangeTab={(item)=>this.changgeTab(item.i)}>
                        <Tab heading="Tab1">
                            <View style={{width:300,height:400,backgroundColor:'#333'}}/>
                        </Tab>
                        <Tab heading="Tab2" style={this.state.tabStyle}>
                            <View style={[{width:200,backgroundColor:'blue'}]}/>
                        </Tab>
                        <Tab heading="Tab3">
                            <View style={{width:200,height:100,backgroundColor:'#000'}}/>
                        </Tab>
                    </Tabs>
                </ScrollView>
            </Container>
        );
    }
}
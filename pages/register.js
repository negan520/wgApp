import React, {Component, PropTypes} from 'react'
import {
    View,
    Dimensions,
    ListView,
    TextInput,
    Image,
    Text,
    FlatList,
    RefreshControl,
    TouchableOpacity,
} from 'react-native'

let {width, height} = Dimensions.get('window');


export default class TestListPage2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refreshing: false,
            isLoreMoreing: 'LoreMoreing',
            dataSource: [],

        }
        this.responseData = [];
    }


    componentDidMount() {


    }


    Refresh = ()=> {

        this.setState({
            refreshing: true,
        });
        console.log('dhfkdfh');

        setTimeout(() => {
            this.responseData = [
                {id: 100}, {id: 101}, {id: 102}, {id: 103}, {id: 104}
            ]
            this.setState({
                refreshing: false,
                dataSource: this.responseData
            });
            this.isLoreMore = false;
        }, 2000);
    }

    isLoreMore = false;


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    marginTop: 20,
                    height: 44,
                    width: width,
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                </View>
                <FlatList
                    renderItem={this.renderRow}
                    keyExtractor={(item, index)=>item.key = index}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.LoreMore}
                    data={this.state.dataSource}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.Refresh}
                            title="Loading..."/>
                    }
                />
            </View>
        );
    }


    renderRow = (item) => {
        let rowData = item.item;
        let index = rowData.key;
        return (
            <View style={{height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text>{rowData.id}</Text>
            </View>
        )
    }

    renderSeparator = ()=> {
        return (
            <View style={{height: 1, backgroundColor: 'rgb(200,200,200)',}}/>
        )
    }


    renderHeader = ()=> {
        return (
            <View style={{
                height: 44,
                width: width,
                justifyContent: 'center',
                backgroundColor: 'red',
                alignItems: 'center'
            }} activeOpacity={1}>
                <Text>{'ÎÒÊÇÍ·²¿'}</Text>
            </View>
        )
    }


    renderFooter = ()=> {

        if (this.state.dataSource.length != 0 && this.state.isLoreMoreing == 'LoreMoreing') {
            return (
                <View style={{
                    height: 44,
                    backgroundColor: 'rgb(200,200,200)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>{'ÕýÔÚ¼ÓÔØ....'}</Text>
                </View>
            )
        } else if (this.state.isLoreMoreing == 'LoreMoreEmpty') {
            return (
                <View style={{
                    height: 44,
                    backgroundColor: 'rgb(200,200,200)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>{'ÔÝÎÞ¸ü¶à'}</Text>
                </View>
            )
        } else {
            return null
        }

    }


}

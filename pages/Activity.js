import React,{ Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    WebView,
    ImageBackground,
    TouchableHighlight,
    RefreshControl,
    FlatList,
    Image
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title,
    Content,
} from 'native-base'
import {baseStyle} from "../style/base";
import {getActivity} from "../serve/getData";
import Img from '../component/Img';
import Immutable from 'immutable';
export default class Activity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activiList:[],
            dataList:[],
            indexSet:0,
            loading:false,
            refreshing: false,
            isLoreMoreing: 'LoreMoreing',
        };
    }
    activiType={
        'Other':7,
        'Egames':4,
        'Lottery':3,
        'Card':1
    };
    list(){
        this.setState({loading:true});
        getActivity().then(res=> {//获取活动列表
            if(res.Code == 'NoError')
            {
                this.setState({activiList:Immutable.fromJS(res.Data).toJS(),dataList:Immutable.fromJS(res.Data).toJS()});
                this.setState({loading:false});
                setTimeout(() => {
                    this.setState({
                        refreshing: false,
                    });
                }, 200);
                this.filterActivy(this.state.indexSet)
            }
        });
    };
    Refresh = ()=> {
        this.list();
        this.setState({
            refreshing: true,
        });
    };
    componentWillMount(){
       this.list()
    }
    filterActivy(tanindex)//筛选活动
    {
        if (tanindex==0)
        {
            this.setState({dataList:this.state.activiList})//全部活动
        }
        else {
            let arr=[];
            this.state.activiList.map((station,index)=>{
                if (tanindex===this.activiType[station.PromotionClass])
                {
                    arr.push(station)
                }
            });
            this.setState({dataList:arr})
        }
    }
    changeIndex(index)//活动切换
    {
        this.setState({indexSet:index});
        this.filterActivy(index)
    }
    render() {
        return (
            <Container style={baseStyle.main}>
                <Header style={baseStyle.headerStyle}>
                    <Left>

                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>优惠活动</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={baseStyle.activiNation}>
                    {
                        ['全部','棋牌','真人','彩票','电子','捕鱼','体育','其他'].map((station, index)=>(
                            (this.state.indexSet==index)?<ImageBackground source={require('../images/game_nav_active.png')} style={{flex:1,height:41,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#fff',textAlign:'center'}}>{station}</Text>
                            </ImageBackground>:<TouchableHighlight onPress={() => this.changeIndex(index)} pointerEvents={'auto'} style={{flex:1}} key={index}><Text style={{color:'#fff',textAlign:'center'}}>{station}</Text></TouchableHighlight>
                        ))
                    }
                </View>
                  <View style={{flex:1}}>
                      <FlatList
                          data={this.state.dataList}
                          extraData={this.state}
                          keyExtractor={(item, index) => (index)}
                          horizontal={false}
                          ListEmptyComponent={()=>(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image style={{width:200,height:160,marginTop:20}}  source={require('../images/null_data.png')} /><Text style={{color:'#fff',fontSize:18,marginTop:10}}>优惠更新中~</Text></View>)}
                          renderItem={({item}) => (
                              <View style={{flex:1,padding:10}}>
                                  <View style={baseStyle.activiList}>
                                      <Img source={{uri:'https://image.hnidb.cn/sr/picture/promotion/'+item.Poster}} width={353} height={'auto'}/>
                                      <View style={baseStyle.activiListSet}>
                                          <Text style={{color:'#fff'}}>
                                              {item.Name}
                                          </Text>
                                          <Button style={baseStyle.activiButton} warning><Text style={{color:'#fff'}}>登录</Text></Button>
                                      </View>
                                      <View style={baseStyle.activiListSet}>
                                          <Text style={{color:'#999'}}>
                                              {item.ValidDateInfo}
                                          </Text>
                                          <Button style={[baseStyle.activiButton]} bordered warning><Text style={{color:'#ffb239'}}>查看结果</Text></Button>
                                      </View>
                                  </View>
                              </View>
                          )}
                          refreshControl={
                              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.Refresh} style={{backgroundColor: 'transparent',color:'red'}}/>
                          }
                      />
                  </View>
            </Container>)
    }
}
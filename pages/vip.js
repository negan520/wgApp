import React,{ Component } from 'react';
import {Text,View,ScrollView,WebView,ImageBackground} from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Vip extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activiList:[],
            indexSet:0
        };
    }
    componentWillMount(){
    }
    render() {
        return (
            <Container style={baseStyle.main}>
                <Header style={baseStyle.headerStyle}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='chevron-left' size={26} color={baseStyle.colorWite.color}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={baseStyle.headerStyle}>VIP详情</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                   <View style={baseStyle.vipContain}>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>当前VIP等级</Text><Text style={[{color:"#f90"},baseStyle.marRight10]}>普通会员</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>晋升后VIP等级</Text><Text style={[baseStyle.colorWite,baseStyle.marRight10]}>VIP0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>晋级彩礼</Text><Text style={[baseStyle.greenColor,baseStyle.marRight10]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>好运彩金</Text><Text style={[baseStyle.greenColor,baseStyle.marRight10]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>当前累计存款</Text><Text style={[baseStyle.colorYellow,baseStyle.marRight10]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>晋级还需存款</Text><Text style={[baseStyle.colorDanger,baseStyle.marRight10]}>100</Text>
                       </View>
                   </View>
                   <View style={[baseStyle.vipContain]}>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>
                               生日礼金
                           </Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>金额:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>备注:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>VIP1以上享有</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>
                               话费/流量
                           </Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>备注:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>月存款2000元+可获得</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>
                               下载手机APP
                           </Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}></Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>金额:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>备注:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>下载手机APP可领38元存款优惠</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>
                               月负利转运金
                           </Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>普通会员</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>金额:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>0</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,baseStyle.borderBlue,baseStyle.borderBottom]}>
                           <Text style={baseStyle.vipListItemTxleft}>备注:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>负利获得2%返利，无上限</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>
                               周周签到奖励
                           </Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}></Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>金额:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>普通会员</Text>
                       </View>
                       <View style={[baseStyle.vipListItem]}>
                           <Text style={baseStyle.vipListItemTxleft}>备注:</Text><Text style={[baseStyle.marRight10,baseStyle.colorWite]}>存的越多送的越多，最高26888</Text>
                       </View>
                       <View style={[baseStyle.vipListItem,{justifyContent:'flex-end'},baseStyle.marRight10]}>
                           <Button transparent onPress={() => this.props.navigation.navigate('vipClub')}>
                               <Text style={[baseStyle.colorYellow]}>查看更多VIP特权</Text>
                           </Button>
                       </View>
                   </View>
                </ScrollView>
            </Container>)
    }
}
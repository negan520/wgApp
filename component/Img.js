import React,{ Component } from 'react';
import {Dimensions, Image} from 'react-native';
export default class Img extends Component{
    constructor(props) {
        super(props);
        this.state = {
           width:this.props.width,
           height:this.props.height
        }
    }
    toPoint(percent){//将百分数转成小数
        var str=percent.replace("%","");
        str= str/100;
        return str;
    }
    componentWillMount(){
        let screenWidth = Dimensions.get('window').width;
        let screenHight = Dimensions.get('window').height;
        Image.getSize(this.props.source.uri,(width,height) => {
            if (this.props.height=='auto')//设置宽度高度自适应
            {
                if (typeof this.props.height=='string')
                {
                    this.setState({width:this.props.width,height:(screenWidth*this.toPoint(this.props.width)/width)*height})
                }
                else {
                    this.setState({width:this.props.width,height:(this.props.width/width)*height})
                }
            }
            else if (this.props.width=='auto')//设置高度宽度自适应
            {
                if (typeof this.props.width=='string')
                {
                    this.setState({width:(screenHight*this.toPoint(this.props.height)/height)*width,height:this.props.height})
                }
                else {
                    this.setState({width:(this.props.height/height)*width,height:this.props.height})
                }
            }
        })
    }
    render() {
        return (
            <Image source={this.props.source} style={[{width:this.state.width,height:this.state.height},this.props.style]}/>
        )
    }
}

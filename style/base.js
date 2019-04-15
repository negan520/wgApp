import {StyleSheet} from 'react-native';
export const baseStyle=StyleSheet.create({
   them:{
       backgroundColor:'#000543'//主题颜色
   },
   acyive:(focus)=>{//选中颜色
       if(focus)
       {
           return '#36a6e5'
       }
       return '#fff'
   },
   mainBackground:{
       backgroundColor:'#101d3d'
   },
   headerStyle:{
       backgroundColor:'#000543',
       color:'#fff'
   },
    colorWite:{
       color:'#fff'
    }
});
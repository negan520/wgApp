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
    main:{
        backgroundColor:'#101d3d'
    },
   loginButton:{
       height:22,paddingTop:0,paddingBottom:0
   },
   domaiText:{
       height: 20,
       color:'#fff',
       textAlign:'center',
       backgroundColor:'#2b338a',
       lineHeight:20
   },
   mainBackground:{
       backgroundColor:'#101d3d'
   },
   loginContainer:{
       textAlign:'center',
       backgroundColor:'#101d3d',
       justifyContent:'center'
   },
   headerStyle:{
       backgroundColor:'#000543',
       color:'#fff'
   },
    colorWite:{
       color:'#fff'
    },
    menusItem:{
        borderColor:'#123079'
    },
    menusItemCon:{
        borderColor:'#123079',
        paddingRight:0
    },
    buttonSubymit:{
        backgroundColor: '#a56001', borderRadius: 5
    },
    activiList:{
        borderWidth:1,height:180,borderStyle:'solid',alignItems:'center',borderColor:'#b37a00'
    },
    activiListSet:{
        flex:1,width:'100%',padding:5,flexDirection:'row',justifyContent:'space-between',paddingBottom:0
    },
    activiButton:{
       width:100,
        height:34,
        justifyContent:'center',
        paddingTop: 0,
        paddingBottom: 0
    }
});
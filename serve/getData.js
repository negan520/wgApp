import {post,fectPost} from "../config/fetchData";
export const imageUrl='https://image.hnidb.cn/sr/picture/carouseladvert/';
export const getInfo=()=>post('/d/m/merchant/getinfo', '');//获取商户信息
export const getSwiper=(data)=>post('/d/m/carouseladvert/list','data='+data);//获取轮播图
export const getGameList=(data)=>post('/d/game/class/listp','data='+data);//获取游戏列表
export const getChildGameList=(data)=>post('/d/game/listbyclass','data='+data);//获取游戏列表
export const signIn=(data)=>post('/d/member/login','data='+JSON.stringify(data));//用户登录
export const signOut=(data)=>post('/d/s/logout','data='+null);//退出登录
export const getAnounce=(data)=>post('/d/m/carouseladvert/list','data='+null);//公告
export const getActivity=(data)=>post('/d/m/promotion/promotionlist','data=');//获取优惠活动
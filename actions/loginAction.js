import * as types from '../constants/loginType';
let user = {};
export function login(data,sta) {
    return dispatch => {
        dispatch({type: types.LOGIN_IN_DOING}); // 正在执行登录请求
        if (sta===types.LOGIN_IN_DONE)
        {
            dispatch({type:types.LOGIN_IN_DONE,user:data});
        }
    }
}
export function isLogin(user) {//判断是否登录
    return dispatch=>{
        if(user)
        {
            dispatch({type:types.LOGIN_IN_DONE,user:user})
        }
        else {
            dispatch({type:types.NOT_LOGIN,user:{}})
        }
    }
}
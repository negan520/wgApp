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
export function isLogin(user) {
    return dispatch=>{
        console.log('rrr',user)
        if(user)
        {
            console.log('eee')
            dispatch({type:types.LOGIN_IN_DONE,user:user})
        }
    }
}
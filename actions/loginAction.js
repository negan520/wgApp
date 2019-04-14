import * as types from '../constants/loginType';
import {signIn} from "../serve/getData";
let user = {};
export function login(data) {
    return dispatch => {
        dispatch({type: types.LOGIN_IN_DOING}); // 正在执行登录请求
        signIn({"UserName":"bixuzimu","Password":"shurumima123","VerifyCode":"","Device":"Mobile"}).then(function (res) {
            dispatch({type:types.LOGIN_IN_DONE,user:res.Data});
        })
    }
}
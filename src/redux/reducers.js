/**
 * Created by Administrator on 2018/12/3.
 */


import {combineReducers} from 'redux';

//初始化状态的值
const initXxxState = 0;
function xxx(previousState = initXxxState, action) {
    switch (action.type) {
        default :
            return previousState;
    }
}

const initYyyState = {};
function yyy(previousState = initYyyState, action) {
    switch (action.type) {
        default :
            return previousState;
    }
}

//默认暴露合并后的reducers函数
// {xxx: function xxx() {}, yyy: function yyy() {}}
export default combineReducers({
    xxx,
    yyy
})
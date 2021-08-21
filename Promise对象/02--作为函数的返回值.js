/**
 * @description  函数的返回值
 * @author ZeroTower
 * @date 2021/8/20
 **/

//Promise的状态从pending变为resolved 就会立即触发then方法绑定的回调函数
function timeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,ms,'DONE');
    });
}

timeout(100).then((value)=>{console.log(value)})
// DONE

/**
 * @description  新建立刻执行
 * @author ZeroTower
 * @date 2021/8/20
 **/

let promise=new Promise(function(resolve, reject){
    console.log("Promise");

    resolve();
})

promise.then(function(){
    console.log('resolved.')
})

console.log('Hi');



//输出顺序是

// Promise
// Hi
// resolved

/**
 *   @description  测试then的链式调用
 *   @date 2021/8/28
 *   @author ZeroTower
 *   @website https://www.zerotower.cn
 **/

const p1=new Promise(function(resolve,reject){
    resolve('success');
})

p1.then(()=>{console.log("first",1)},()=>{console.log("first failed")})
    .then(()=>{console.log("second",2)},()=>{console.log("second failed")})
    .then(()=>{console.log("third",3)},()=>{console.log("third failed")})
/**
 *
 first 1
 second 2
 third 3
 */
//如果p1的状态变为rejected,后续的就会调用rejected回调

const p2=new Promise(function(resolve,reject){
    reject("failed")
})

p2.then(()=>{console.log("first",1)},()=>{console.log("first failed")})
    .then(()=>{console.log("second",2)},()=>{console.log("second failed")})
    .then(()=>{console.log("third",3)},()=>{console.log("third failed")})

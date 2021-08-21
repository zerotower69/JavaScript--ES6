/**
 * @description Promise.prototype.the方法
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.then方法返回一个新的Promise实例，不是原来的那一个
 * 2.可以看到,因为返回Promise实例，因此可以使用链式操作
 * 3.后一个then会等待上一个Promise的状态发生变化才会调用
 */

const p=new Promise(function(resolve,reject){
    setTimeout(()=>resolve(2),2000)
})


console.log(p);  //Promise { <pending> }


console.log(p.then()) //Promise { <pending> }



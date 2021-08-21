/**
 * @description Promise.prototype.finally()  不管怎样总会执行一次
 * @author ZeroTower
 * @date 2021/8/20
 **/
const p=new Promise(()=>{});

p.then(()=>{})
    .catch(()=>{})
    .finally(()=>{});

//本质上是then()的特例

//手写 finally

Promise.prototype.finally=function(callback){
    let P=this.constructor;
    return this.then(
        value=>P.resolve(callback()).then(()=>value),
        reason => P.resolve(callback()).then(()=>{throw reason})
    );
};
//也就是说，不管Promise的状态是resolved还是rejected,都要调用一次finally传来的回调函数





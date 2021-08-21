/**
 * @description Promise.race()
 * @author ZeroTower
 * @date 2021/8/20
 **/


/**
 *  1.与all()类似，但是传入的Promise只要有一个状态改变,这个p的状态也会改变，且其回调函数的参数是这个首先改变状态的Promise
 *  的返回值
 */

//举例:

const p1=fetch('/resource-that-may-take-a-while');
const p2=new Promise(function(resolve, reject){
    setTimeout(()=>reject(new Error('request timeout')),5000)
})

const p=Promise.race([p1,p2]);

p.then(console.log)
    .catch(console.error)

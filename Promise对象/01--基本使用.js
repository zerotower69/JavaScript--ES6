/**
 * @description  第一次使用
 * 三个状态   pending--->fulfilled   pending-->rejected
 * @author ZeroTower
 * @date 2021/8/20
 **/
const {log}=console

const promise=new Promise(function(resolve, reject){
    resolve(2);
})

promise.then((res)=>log(res));



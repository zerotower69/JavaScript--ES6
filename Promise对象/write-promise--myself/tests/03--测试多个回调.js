/**
 * @description  多个回调测试
 * @author ZeroTower
 * @date 2021/8/21
 **/

require("../core")
require('../helper')

const p=new ztPromise(function (resolve,reject){
    setTimeout(()=>{
        resolve('success')
    },3000)
})


p.then(()=>console.log(1));
p.then(()=>console.log({name:'David',age:12}));
p.then(()=>console.log(2));


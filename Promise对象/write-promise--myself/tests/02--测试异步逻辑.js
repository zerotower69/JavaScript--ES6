/**
 * @description  在then里面使用异步逻辑
 * @author ZeroTower
 * @date 2021/8/21
 **/

require("../core")
require('../helper')

const p=new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve([1,2,3])
    },3000);
})
p.print();

p.then((value)=>{console.log(value)})

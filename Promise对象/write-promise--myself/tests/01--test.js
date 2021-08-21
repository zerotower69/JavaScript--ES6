/**
 * @description  测试then方法是否好用
 * @author ZeroTower
 * @date 2021/8/21
 **/

require("../core")
require("../helper")

const p=new Promise(function(resolve,reject){
    console.log("exect !!!!")
    resolve({name:'David',age:12});
});

p.print()

p.then((value)=>{
    console.log("value===>",value)
})

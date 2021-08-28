/**
 * @description   测试基本使用
 * @author ZeroTower
 * @date 2021/8/22
 **/

require("../core")
require("../helper")

test('init instance',async ()=>{
    let obj={name:'David',age:12}
    const p=new ztPromise(function(resolve,reject){
        // console.log("exect !!!!")
        resolve(obj);
    });
    const res=await p;
    expect(p.status).toBe('fulfilled');
    expect(res.toString()).toBe(obj.toString())
})



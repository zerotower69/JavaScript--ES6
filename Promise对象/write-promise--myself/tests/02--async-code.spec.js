/**
 * @description  测试异步逻辑
 * @author ZeroTower
 * @date 2021/8/22
 **/
require("../core")
require("../helper")

test('test-async-code',async ()=>{
    let arr=[1,2,3];
    const p=new ztPromise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arr)
        },3000);
    })

    const res=await p;
    expect(res.toString()).toBe(arr.toString())

})


/**
 * @description  测试链式调用
 * @author ZeroTower
 * @date 2021/8/22
 **/

require("../core")
require('../helper')

test("test-chain-code-no-allow return self!!",async ()=>{
    const p=new ztPromise(function(resolve,reject){
        resolve('success')
    })
    const p1=p.then(value=>{
        // console.log(1);
        // console.log('resolve', value)
        return p1
    })
        p1.then(value=>{},reason=>{
        // console.log(reason)
        expect(reason.message).toBe('Chaining cycle detected for promise #<Promise>')
    })
})

test("test-chain-code--by-10-times",async ()=>{
    let p=new ztPromise(function(resolve,reject){
        resolve('success');
    })
    let testTimes=0;
    p=p.then((value)=>{
        // expect(value).toBe('success')
        return new ztPromise(function(resolve){
            resolve('test times: '+testTimes)
        })
    })
    let arr=[];
    while(testTimes<10){
        let p1=p.then((value)=>{
            // console.log(value);
            arr.push(testTimes);
            return new ztPromise(function(resolve,reject){
                resolve('test times: '+testTimes)
            })
        },()=>{})
        p=p1;
        testTimes++;
    }
     setTimeout(()=>{
        console.log(arr);
        p.then(value=>{
            // console.log(value);

            expect(value).toBe('test times: 10');
        },reason=>{console.log(reason)})
    },10000)
})



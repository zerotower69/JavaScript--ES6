/**
 * @description   测试链式调用
 * @author ZeroTower
 * @date 2021/8/21
 **/

require("../core")
require('../helper')

const promise = new ztPromise((resolve, reject) => {
    resolve('success')
})

const p1=promise.then(value=>{
    console.log(1);
    console.log('resolve', value)
    return p1
})


// 运行的时候会走reject
p1.then(value => {
    console.log(2)
    console.log('resolve', value)
}, reason => {
    console.log(3)
    console.log(reason)
})


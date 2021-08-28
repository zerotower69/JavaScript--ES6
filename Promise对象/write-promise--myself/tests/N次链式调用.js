/**
 * @description
 * @author ZeroTower
 * @date 2021/8/22
 **/

require("../core")
require('../helper')
let testTimes=0;
const promise = new Promise((resolve, reject) => {
    resolve(testTimes++)
})

let p=promise.then((value)=>{
    console.log(value);
    return new Promise(function(resolve){
        resolve(testTimes++);
    })
})

while(testTimes<=10){
    p=p.then((value)=>{
        console.log(value);
        return new Promise(function(resolve){
            resolve(testTimes);
        })
}
    )
    testTimes++;
}

//这种情况下，原有的Promise可以打印0 11 12 12 12 12 12 12 12 12 12，但是你的手写版本只可以打印一个11

// let testTimes=0; const promise = new Promise((resolve, reject) => { resolve(testTimes++) }) let p=promise.then((value)=>{ console.log(value); return new Promise(function(resolve){ resolve(testTimes++); }) }) while(testTimes{ console.log(value); return new Promise(function(resolve){ resolve(testTimes); }) } ) testTimes++; }

/**
 * @description Promise.resolve() 方法
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.将现有的对象转为Promise对象,
 * 2.如果传入的对象是具有then()方法的对象，那么转换后立即执行thenable对象的then方法
 * 3.如果传入的实例是Promise实例，什么都不做,直接返回
 * 4.参数是原始值的,或者不具有then()方法的对象再或者根本不是对象,返回一个全新的Promise实例，且状态为resolved
 * 5.参数为空，直接返回一个状态为resolved的Promise对象
 * 6.立即resolve()的对象,在下一次任务循环前执行，因为属于宏任务，执行的时机高于微任务(setTimeout,setInterval等),
 */

//  栗子1:转换现有对象
//
// const o1={
//     name:'zerotower',
//     age:22
// }
//
// const p1=Promise.resolve(o1);
//
// console.log(p1);  //Promise { { name: 'zerotower', age: 22 } }
//
// p1.then((result)=>console.log(result))  //{ name: 'zerotower', age: 22 }
// console.log("-----------------------------------")
//---------------------------------------------------

//栗子2：传入的对象具有then方法
// let o2={
//     name: "zerotower",
//     age:22,
//     then:function(){
//         console.log("My age is: " +this.age);
//     },
//     printName:function(){
//         console.log("My name is:"+this.name)
//     }
// }
//
// const p2=Promise.resolve(o2);  //o2的then方法被立刻执行了
//
// console.log(p2);//Promise { <pending> }
//
// p2.then((result)=>console.log(result))  //啥也没有

//--------------------------

//栗子3： 直接传入promise
// const pp3=new Promise(function (resolve, reject){
//     resolve(22);
// })
//
// console.log(pp3); //Promise { 22 }
//
// const p3=Promise.resolve(pp3);
//
// console.log(p3);  //Promise { 22 }

//---------------------------------

//栗子4：空的参数

// const p4=Promise.resolve();
//
// console.log("p4--->",p4);
//-------------------------

//栗子5：测试执行的时机

//测试setTimeout和promise.then

setTimeout(()=>console.log(1));

new Promise((resolve,reject)=>{
    resolve(2);
}).then((result)=>console.log(result));

// 输出顺序
//2
//1
// 因为Promise属于宏任务，setTimeout属于微任务，在一次tick中，先Promise.then后setTimeout







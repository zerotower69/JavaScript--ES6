/**
 * @description Promise.all()的使用
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.将多个Promise实例包装为新的Promise对象
 * 2.如果参数不是Promise,先封装为Promise
 * 3.Promise.all()方法的参数可以不是数组，但是必须有Iterator接口，且返回的每个成员都是Promise实例
 * 4.p的状态有p1,p2,p3共同决定{
 *     4.1   only p1 p2 p3 status all change to fulfilled the p's status can change to fulfilled, then their return value
 *     will consist of an array to p
 *
 *     4.2  只要任意一个Promise的状态变为rejected, p的状态就变为rejected,此时第一个被reject的实例的返回值就会被传递给p的回调函数
 * }
 */

const getJson=function(url){
    const promise=new Promise(function(resolve, reject){

        const handler=function(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);
            }
            else{
                reject(new Error(this.statusText));
            }
        };

        const client=new XMLHttpRequest();  //XMLHttpRequest也是浏览器提供的宿主对象
        client.open('GET',url);
        client.onreadystatechange=handler;
        client.responseType='json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });

    return promise;
}

//举例
  //1.生成一个Promise对象的数组
  // const promises=[2,3,5,7,11,13].map(function(id){
  //     return getJson('/post/'+id+'.json');
  //   })
  //
  // Promise.all(promises).then(function(posts){})
  //     .catch(function(reason){
  //         console.log(reason)
  //     })

//链式调用再使用all
const p1=new Promise(function(resolve, reject){
    resolve('hello')
})
    .then(result=>result) //返回新的Promise实例
    .catch(e=>e)

const p2=new Promise(function(resolve,reject){
    throw new Error("occur error")
})
    .then(result=>result)
    .catch(e=>e)  //返回新的Promise实例

//实际传递的是第一个Promise的then返回的Promise(pending)和第二个Promise的catch返回的Promise(pending)
Promise.all([p1,p2])
    .then(result=>console.log(result))
    .catch(e=>console.log(e))

/*
[
  'hello',
  Error: occur error
      at D:\ZeroTowerCode\前端\JavaScript\ES6\Promise对象\11--自身方法--all.js:65:11
      at new Promise (<anonymous>)
      at Object.<anonymous> (D:\ZeroTowerCode\前端\JavaScript\ES6\Promise对象\11--自身方法--all.js:64:10)
      at Module._compile (internal/modules/cjs/loader.js:999:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
      at Module.load (internal/modules/cjs/loader.js:863:32)
      at Function.Module._load (internal/modules/cjs/loader.js:708:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
      at internal/main/run_main_module.js:17:47
]
 */


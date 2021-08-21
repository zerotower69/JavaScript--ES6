/**
 * @description  Promise.prototype.catch
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.catch方法是then(null,rejection) 或者then(undefined,rejection)的别名
 * 2.调用的时机,当Promise的状态变为rejected时，或者then中的回调发生错误
 */

//举例

// const p=new Promise(function(resolve,reject){
//     throw new Error('test');
// })
//
// p.catch(function(error){
//     console.log(error)
// })

//等价写法一
// const p=new Promise(function(resolve, reject){
//     try{
//         throw new Error('test')
//     }
//     catch(e){
//         reject(e);
//     }
// })
//
// p.catch(function(err){
//     console.log(err);
// })

//等价写法二

// const p=new Promise(function(resolve,reject){
//     reject(new Error('test'));
// })
//
// p.catch(function(err){
//     console.log(err);
// })

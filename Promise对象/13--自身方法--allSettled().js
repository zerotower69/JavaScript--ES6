/**
 * @description  Promise.allSettled()
 * @author ZeroTower
 * @date 2021/8/20
 **/


/**
 *  1.上述的all必须等待所有的Promise变为resolved ,race则是任意一个Promise的改变，
 *  因此，我们希望所有的传入Promise的状态改变再去改变Promise.allSettled()返回的Promise的状态
 *  2.总之，所有的传入Promise的状态改变了我再变
 *  3.因此,Promise.allSettled()返回的Promise实例状态总是resolved,
 *  4.状态变为fulfilled后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应对应传入的Promise对象
 **/

//举例1
const p1=Promise.resolve(42);
const p2=Promise.reject(-1);

const allSettledPromise=Promise.allSettled([p1,p2]);

//results是一个对象数组,每个成员对应的对象与传入的数组（Promise），一一对应
//成员对象的status  只能是 “fulfilled” 或者 “rejected"
//成功(resolved)-->value   失败(rejected)-->reason
allSettledPromise.then((results)=>{
    console.log(results);
})

/**  返回值
 * [
 { status: 'fulfilled', value: 42 },
 { status: 'rejected', reason: -1 }
 ]
 */



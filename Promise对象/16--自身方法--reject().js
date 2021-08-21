/**
 * @description  Promise.rejected()方法
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.与resolve方法一样，返回一个Promise实例,但是状态是rejected!!
 * 2.回调函数是立刻执行，传递的参数会原封不动地作为reason理由
 */

// 栗子1
const p1=Promise.reject("出错了");
console.log(p1);

p1.then((result)=>console.log(result))
    .catch(err=>console.log("error",err));
//------------------------------------


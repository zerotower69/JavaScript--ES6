/**
 * @description Promise.any() 方法
 * @author ZeroTower
 * @date 2021/8/20
 **/

/**
 * 1.同样接受一组Promise参数然后封装为新的Promise实例返回
 * 2.返回实例的状态由传入的所有Promise实例共同决定，全部变为resolved-->resolved  全部变为rejected --->rejected,也就是等待传入的所有promise实例
 * 改变了，才改变
 */

//栗子1  传入的promise最终全部能全部变为resolved
const promises=["./json/11.json","./json/22.json"]
.map(url=>fetch(url));

const p=Promise.any(promises);

setTimeout(()=>console.log(p),3000); //p 的状态最终是 fulfilled
////////////////////////////////

//栗子2   传入的promise有一个变为rejected
const ex2_promises=["./json/12.json","./json/22.json"]
    .map(url=>fetch(url));

const p2=Promise.any(ex2_promises);
setTimeout(()=>console.log(p2),3000);  //p2的最终状态是 fulfilled

//栗子3  传入的promise最后全部为rejected

const ex3_promises=["./json/12.son","./json/23.j"]
    .map(url=>{
        return new Error("error "+" "+url);
    });
const p3=Promise.any(ex3_promises);

p3.then(results=>console.log("resultsaaa",results))  //即使两个的状态都为rejected，但是p3的状态为resolved!!!
    .catch(err=>console.log(err))



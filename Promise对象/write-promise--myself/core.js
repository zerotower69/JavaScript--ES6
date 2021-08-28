/**
 * @description   自己实现一个Promise
 * @author ZeroTower
 * @date 2021/8/21
 **/

//调用补充的方法

// part1  预定义一些Promise的状态
    const PENDING='pending';
    const FULFILLED='fulfilled';
    const REJECTED='rejected';

    //辅助方法,状态改变触发执行
    function statusChange(p){
        if(p.status===FULFILLED){
            if(p.onFulFilledCallback){
                p.onFulFilledCallback(p.value)
            }
        }
        else if(p.status===REJECTED){
            if(p.onRejectCallback){
                p.onRejectCallback(p.reason);
            }
        }
    }

class ztPromise{

    // 由于Promise实例化后立刻执行传入的方法,所以构造函数的参数是一个执行器,接受两个可选的参数

    constructor(executor){

        //执行并传入resolve和reject方法
        //todo:如何指定可选
        executor(this.resolve,this.reject);
        //定义响应式的status属性
    }

    //the init value of 'status' is 'pending';
    status=PENDING;
    //when status change to fulfilled, the value is must
    value=null;

    //when status change to rejected, the reason is must
    reason=null;

    //store resolved callback function
    //onFulFilledCallback=null;
    //make sure all callbacks can be executed
    onFulFilledCallback=[];

    //store rejected callback function
    //onRejectCallback=null;
    //make sure all callbacks can be executed
    onRejectCallback=[];

    //使用箭头函数保证内部的this依然指向ztPromise这个对象
    //resolve将状态从pending--->fulfilled,并且传递了一个value（根据PromiseA+的规范,此时的value是必选的)
    resolve=(value)=>{
        //只有状态为pending才做resolve的事
        if(this.status===PENDING){
            //change status
            this.status=FULFILLED;
            this.value=value;
            while(this.onFulFilledCallback.length>0){
                const callback=this.onFulFilledCallback.shift();
                callback(value);
            }
        }
    };
    //reject method change status from 'pending' to 'rejected' and reason is required!
    reject=(reason)=>{
        if(this.status===PENDING){
            //change status
            this.status=REJECTED;
            this.reason=reason;
            //execute callbacks
            while(this.onRejectCallback.length>0){
                const callback=this.onRejectCallback.shift();
                callback(reason);
            }
        }
    };
    //原型方法then
    then(onFulfilled,onRejected){
        //根据状态判断执行谁,
        //由于传入的都是可选的参数,先判断参数是否有值在再去执行

        // ++++    改为链式调用    ++++++
        const p2= new ztPromise((resolve, reject)=> {
            if (!onFulfilled && !onRejected) {
                //两个参数都不给
            }
            //你要执行传入的参数至少要判断它事函数再去执行
            else if (onFulfilled && typeof onFulfilled === 'function' && this.status === FULFILLED) {
                //处理返回的结果
                //必须等待rt的实例化结束
                //要深入理解 请查阅有关宏任务微任务的资料
                queueMicrotask(()=>{
                    const rt=onFulfilled(this.value);
                    //交给定义的函数统一解决
                    resolvePromise(p2,rt,resolve,reject);
                })

            } else if (onRejected && typeof onRejected === "function" && this.status === REJECTED) {
                onRejected(this.reason);
            }
            //状态什么时候改变是未知的，回调先存起来
            else if (this.status === PENDING) {
                if (onFulfilled && typeof onFulfilled === 'function') {
                    this.onFulFilledCallback && this.onFulFilledCallback.push(onFulfilled);
                }
                if (onRejected && typeof onRejected === 'function') {
                    this.onRejectCallback && this.onRejectCallback.push(onRejected);
                }
            }
        });
        return p2;
    }
}


function resolvePromise(p,rtP,resolve,reject){
    if(p===rtP){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
        if(rtP instanceof ztPromise){
            rtP.then(resolve,reject);
        }
        else{
            resolve(rtP);
        }
}
global.ztPromise=ztPromise
//导出模块
module.exports=ztPromise;

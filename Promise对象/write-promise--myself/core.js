/**
 * @description   自己实现一个Promise
 * @author ZeroTower
 * @date 2021/8/21
 **/

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
        this.status=PENDING;
    }

    //the init value of 'status' is 'pending';

    //when status change to fulfilled, the value is must
    value=null;

    //when status change to rejected, the reason is must
    reason=null;

    //store resolved callback function
    onFulFilledCallback=null;

    //store rejected callback function
    onRejectCallback=null;

    //使用箭头函数保证内部的this依然指向ztPromise这个对象
    //resolve将状态从pending--->fulfilled,并且传递了一个value（根据PromiseA+的规范,此时的value是必选的)
    resolve=(value)=>{
        //只有状态为pending才做resolve的事
        if(this.status===PENDING){
            //change status
            this.status=FULFILLED;
            this.value=value;
            statusChange(this);
        }
    };
    //reject method change status from 'pending' to 'rejected' and reason is required!
    reject=(reason)=>{
        if(this.status===PENDING){
            //change status
            this.status=REJECTED;
            this.reason=reason;
            //emit something
            statusChange(this);
        }
    };
    //原型方法then
    then(onFulfilled,onRejected){
        //根据状态判断执行谁,
        //由于传入的都是可选的参数,先判断参数是否有值在再去执行
        if(!onFulfilled && !onRejected){
            //两个参数都不给
        }
        //你要执行传入的参数至少要判断它事函数再去执行
        if(onFulfilled && typeof onFulfilled==='function' && this.status===FULFILLED){
            onFulfilled(this.value);
        }
        else if(onRejected && typeof onRejected==="function" && this.status===REJECTED){
            onRejected(this.reason);
        }
        //状态什么时候改变是未知的，回调先存起来
        else if(this.status===PENDING){
            if(onFulfilled && typeof onFulfilled ==='function'){
                this.onFulFilledCallback=onFulfilled;
            }
            if(onRejected && typeof onRejected==='function'){
                this.onRejectCallback=onRejected;
            }
        }
    }
}
global.Promise=ztPromise
//导出模块
module.exports=ztPromise;

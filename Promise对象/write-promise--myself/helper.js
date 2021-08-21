/**
 * @description   补充的方法
 * @author ZeroTower
 * @date 2021/8/21
 **/

(function(global){
    const Promise=global.ztPromise ||global.Promise;

    if(Promise){
        Promise.prototype.print=function(){
            console.log("Promise < "+this.status+" >")
        }
    }
})(global)

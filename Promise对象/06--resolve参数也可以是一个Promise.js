/**
 * @description  Promise作为resolve参数
 * @author ZeroTower
 * @date 2021/8/20
 **/

const p1=new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("failed!")),3000);  //依然能执行哦！！
});

const p2=new Promise(function(resolve,reject) {
    setTimeout(() => resolve(p1), 1000);  //如果把resolve里面的值改为2,then就能正常使用了(打印2）
});

//p1的状态决定了p2的状态，p2本身的状态无效了，.then方法实际是等待p1状态的改变。
p2.then(result=>console.log(result))
    .catch(err=>console.log(err))


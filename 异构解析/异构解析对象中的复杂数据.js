/**
 * @description  复杂的数据
 * @author ZeroTower
 * @date 2021/8/20
 **/

let obj={
    p:[
        'hello',
        {y:'world'}
    ]
}

let {p,p:[x,{y}]}=obj;

console.log(p); //[ 'hello', { y: 'world' } ]
console.log(x); //hello
console.log(y);  //world

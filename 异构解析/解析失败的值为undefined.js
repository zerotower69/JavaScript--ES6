/**
 * @description  异构解析失败undefined
 * @author ZeroTower
 * @date 2021/8/20
 **/

let obj={
    foo:'aa',
    bar:12,
    baz:false
}

const {foo,par}=obj;

console.log(foo);  //aa
console.log(par);  //undefined

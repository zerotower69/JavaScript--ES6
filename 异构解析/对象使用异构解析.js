/**
 * @description  JavaScript对象使用异构解析，但是如果是响应式数据则不可以（Vue)
 * @author ZeroTower
 * @date 2021/8/20
 **/

let obj={
    foo:'aa',
    bar:12,
    baz:false
}

const {foo,bar,baz}=obj;

console.log(foo);  //aa
console.log(bar);  //12
console.log(baz);  //false

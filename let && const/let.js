/**
 * @description let and const 代替var   去除变量提升加入块级作用域
 * @author ZeroTower
 * @date 2021/8/20
 **/

//块级作用域内有效
{
    let a=12;
    console.log(a);
}

console.log(a); //ReferenceError: a is not defined

//循环变量使用let 就不用担心变量提升带来的影响了

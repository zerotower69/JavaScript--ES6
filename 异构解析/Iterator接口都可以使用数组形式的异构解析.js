/**
 * @description  Iterator 接口的数组形式异构解析都生效
 * @author ZeroTower
 * @date 2021/8/20
 **/

function * fibs(){
    let a=0;
    let b=1;
    while(true){
        yield a;  //todo: yield
        [a,b]=[b,a+b];
    }
}
let [first,second,third,fourth,fifth,sixth]=fibs();

console.log(sixth); //5

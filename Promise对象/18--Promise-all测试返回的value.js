/**
 *   @description
 *   @date 2021/8/28
 *   @author ZeroTower
 *   @website https://www.zerotower.cn
 **/
const getJson=function(url){
    const promise=new Promise(function(resolve, reject){

        const handler=function(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);
            }
            else{
                reject(new Error(this.statusText));
            }
        };

        const client=new XMLHttpRequest();  //XMLHttpRequest也是浏览器提供的宿主对象
        client.open('GET',url);
        client.onreadystatechange=handler;
        client.responseType='json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });

    return promise;
}

const promises=['11','22','33'].map((item)=>getJson(`./json/${item}.json`))

Promise.all(promises)
    .then((value)=>{
        console.log(value);   //这个value是所有变为fulfilled的Promise实例的value组成的，是一个数组对象，顺序应该是promise完成的时间
    })

/**
 * @description  Promise封装Ajax
 * @author ZeroTower
 * @date 2021/8/20
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

getJson('./post.json').then(function(json){
    console.log(json);
},function (error){
    console.error('出错了',error);
})

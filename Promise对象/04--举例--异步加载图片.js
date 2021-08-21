/**
 * @description  实际运用，异步加载图片
 * @author ZeroTower
 * @date 2021/8/20
 **/

function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image=new Image(); //浏览器提供的宿主对象

        image.onload=function(){
            resolve(image);
        }

        image.onerror=function (){
            reject(new Error('Could not load image at'+url))
        }

        image.src=url;
    })
}

const promise=loadImageAsync("https://img1.baidu.com/it/u=1017977487,2478999160&fm=26&fmt=auto&gp=0.jpg");

promise.then((value)=>{
    console.log(value);
    //浏览器输出img标签
    // <img src="https://img1.baidu.com/it/u=1017977487,2478999160&fm=26&fmt=auto&gp=0.jpg"/>
})

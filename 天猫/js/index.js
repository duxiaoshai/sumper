/*
* @Author: Administrator
* @Date:   2017-09-19 21:38:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 00:47:37
*/
window.onload=function(){
	let cedaohan = document.getElementsByClassName('cenav')[0];
	let lis = cedaohan.getElementsByTagName('li')

	let item = document.getElementsByClassName('item')
    let banner = document.getElementsByClassName('di1')[0];

    let bnt =banner.getElementsByTagName('a');
    let yuankuang = document.getElementsByClassName('yuandian1')[0];
    let dian = yuankuang.getElementsByTagName('li')
    
    let imgW =parseInt(getComputedStyle(bnt[0],null).width)
    console.log(lis)
    let t;
    t = setInterval(move,1000)
    let now =0;
    let next = 0;
    let flag = true;
    let di = document.getElementsByClassName('di')[0];
di.onmouseover=function(){
		clearInterval(t)
	}
	di.onmouseout=function(){
		t = setInterval(move,1000)
	}

    function move(){
       next++
       if(next == bnt.length){
       	next = 0;

       }
       bnt[next].style.left = imgW+'px'
       animate(bnt[now],{left:-imgW})
       animate(bnt[next],{left:-0},function(){
       	flag = false;
       	now = next
       })

    }

	for(let i = 0; i<lis.length;i++){
		lis[i].onmousemove=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}

	}for(let i=0;i<dian.length;i++){
	dian.onclick=function(){
        dian[i]=now
	}}

	
	

		

	// let bannertu = document.getElementsByClassName('bannertu')[0];
	// let img =bannertu.getElementsByTagName('li')
	// let yuandian = document.getElementsByClassName('yuandian')[0];
	// let lis1 = yuandian.getElementsByTagName('li')
	// for(let i=0; i<lis1.length;i++){
	// 	lis1[i].onclick = function(){
	// 		for(let i=0; i<6;i++){
	// 			img[i].style.display='none'
	// 		}
	// 			img[i].style.display='block'
	// 			num=i
	// 	}
		

	// }
	// let now =0;
	// for(let i=0; i<lis1.length;i++){
 //          lis1[i].onclick = function(){
 //          img[now].style.display='none'
 //          img[i].style.display='block'
 //           now=i
 //          }
          

	// 用var声明时的方法

// for(var i=0;i<lis1.length;i++){
// 	lis1[i].index=i;
// 	lis1[i].onclick=function(){
// 		img[num].style.display='none';
// 		img[this.index].style.display= 'block';
// 		num = this.index	
// 	}
// }

// let now =0;
// for(var i=0;i<lis1.length;i++){
// 	lis1[i].index=i;
// 	lis1[i].onclick=(function(i){
// 		return function(){
// 		img[now].style.display='none';
// 		img[i].style.display= 'block';
// 		now = i
// 		}
// 	})(i)
}
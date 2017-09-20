/*
* @Author: Administrator
* @Date:   2017-09-19 22:06:42
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 01:04:02
*/
window.onload=function(){
	let cedaohang = document.getElementsByClassName('cenav')[0];
	let lis = cedaohang.getElementsByTagName('li')
	let items = document.getElementsByClassName('item');
	for(let i=0; i<lis.length;i++){
		lis[i].onmousemove=function(){
			items[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			items[i].style.display='none';
			num=i;
		}
}
let yuandian = document.getElementsByClassName('yuandian')[0];
let dian = yuandian.getElementsByTagName('li')

let bnt = document.getElementsByClassName('banner')[0];
let imgs = bnt.getElementsByTagName('li')
let luobo = document.getElementsByClassName('lunbo')[0];

console.log(dian)
	for(let i = 0; i<dian.length; i++){
		dian[i].onclick=function(){
			for(let i=0; i<6;i++){
			dian[i].style.background='#17171c'
			// imgs[i].style.display='none'
			animate(imgs[i],{opacity:0})
			

		}
		    num=i;
		    dian[num].style.background='#999'
			// imgs[i].style.display='block'
				animate(imgs[num],{opacity:1})
			
	}
}
let imgW =parseInt( getComputedStyle(imgs[0],null).width)
console.log(imgW)
let now =0;
let next = 0;
let flag = true;

let t;
t = setInterval(move,3000);
function move(){

   
   next++
   if(next==imgs.length){
     next=0
   }
   imgs[next].style.left=imgW+'px'
   animate(imgs[now],{left:-imgW})
   animate(imgs[next],{left:0},function(){
   	flag = true;
   })
   now = next
}
	luobo.onmouseover=function(){
	clearInterval(t);
}
luobo.onmouseout=function(){
	t = setInterval(move,3000);
}
function movel(){
   
   next--
   if(next<0){
     next=imgs.length-1
   }
   imgs[next].style.left=-imgW+'px'
   animate(imgs[now],{left:imgW})
   animate(imgs[next],{left:0},function(){
   	flag = true;
   })
   now = next
}

let zuo =document.getElementsByClassName('zuoleft')[0];
zuo.onclick=function(){
  if(!flag){
  	return;
  }
	movel();
	flag = false;
}
let you =document.getElementsByClassName('youright')[0];
you.onclick=function(){
	if(!flag){
  	return;
  }
	move();
	flag = false;
}
dian.onclick=function(){
	dian[i]=now;
	now=next
}


// let num = 0;
// function move(){
// 	num++;
// 	if(num==imgs.length){
// 		num = 0;
// 	}
// 	for(let i=0; i<imgs.length;i++){
// 		// imgs[i].style.display='none'
// 			animate(imgs[i],{opacity:0})
// 		dian[i].style.background='#17171c'

// 	}
// 	// imgs[num].style.display='block'
// 		animate(imgs[num],{opacity:1})
// 	dian[num].style.background='#999'
// }

// function movel(){
// 	num--;
// 	if(num<0){
// 		num = imgs.length-1;
// 	}
// 	for(let i=0; i<imgs.length;i++){
// 		// imgs[i].style.display='none'
// 			animate(imgs[i],{opacity:0})
// 		dian[i].style.background='#17171c'

// 	}
// 	// imgs[num].style.display='block'
// 		animate(imgs[num],{opacity:1})
// 	dian[num].style.background='#999'
// }
// let zuo =document.getElementsByClassName('zuoleft')[0];
// zuo.onclick=function(){
// 	movel();
// }
// let you =document.getElementsByClassName('youright')[0];
// you.onclick=function(){
// 	move();
// }
// luobo.onmouseover=function(){
// 	clearInterval(t);
// }
// luobo.onmouseout=function(){
// 	t = setInterval(move,1000);
// }



}
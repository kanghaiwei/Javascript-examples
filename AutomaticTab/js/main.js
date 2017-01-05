var arr=[
['左标题一',['右标题1'],['img/1.jpg']],
['左标题二',['右标题2-1','右标题2-2'],['img/2.jpg','img/3.jpg']],
['左标题三',['右标题3-1','右标题3-2','右标题3-3'],['img/4.jpg','img/5.jpg','img/6.jpg']],
['左标题四',['右标题4-1','右标题4-2','右标题4-3','右标题4-4'],['img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg']],
['左标题五',['右标题5-1','右标题5-2','右标题5-3'],['img/10.jpg','img/11.jpg']]
];
var box=document.getElementById('box');
var str='';
// 生成左侧
str='<ul>';
for(var i=0;i<arr.length;i++){
	str+='<li style="line-height:'+400/arr.length+'px;">'+arr[i][0]+'</li>';
}
str+='</ul>'
// 生成右侧,左边有几个标题，右边就有几个div
for(var i=0;i<arr.length;i++){
	//初始设置为显示第一张图片
	str+='<div><img src="'+arr[i][2][0]+'"/><ul>';
	for(var j=0;j<arr[i][1].length;j++){
		str+='<li style="width:'+700/arr[i][1].length+'px;">'+arr[i][1][j]+'</li>';
	}
	str+='</ul></div>'
}
// 将生成的全部内容塞到box里
box.innerHTML=str;
//初始化
var tablefts=box.getElementsByTagName('ul')[0].getElementsByTagName('li');
var divs=box.getElementsByTagName('div');
tablefts[0].className='active';
divs[0].className='show';
divs[0].getElementsByTagName('li')[0].className='active';

for(var i=0;i<arr.length;i++){
	fn(i);
}

function fn(n){
	var img=divs[n].getElementsByTagName('img')[0];
	console.log(n,divs[n]);
	var lis=divs[n].getElementsByTagName('li');
	tablefts[n].onclick=function(){
		for(var i=0;i<divs.length;i++){
				tablefts[i].className='';
				divs[i].className='';
		}
		for(var i=0;i<lis.length;i++){
			lis[i].className='';
		}
		lis[0].className='active';
		tablefts[n].className='active';
		divs[n].className='show';
		l=n;  //注意
		r=0;  //注意
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			this.className='active';
			img.src=arr[n][2][this.index];
			r=this.index;  //注意
		}
	}
}
// arr[n][0] 标题
// arr[n][1][] 文字名称
// arr[n][2][] 图片地址
var timer=null;
var l=0;
var r=0;
autoplay();
box.onmouseover=function(){
	clearInterval(timer);
}
box.onmouseout=function(){
	autoplay();
}
function autoplay(){
	timer=setInterval(function(){
		r++;
		if(r==arr[l][2].length){
			l++;
			if(l==tablefts.length){
				l=0;
			}
			r=0;
		}
		var img=divs[l].getElementsByTagName('img')[0];
		var lis=divs[l].getElementsByTagName('li');
		for(var i=0;i<tablefts.length;i++){
			tablefts[i].className='';
			divs[i].className='';
		}
		tablefts[l].className='active';
		divs[l].className='show';
		for(var i=0;i<lis.length;i++){
			lis[i].className = '';
		}
		lis[r].className='active';
		img.src=arr[l][2][r];

	},1400);
}
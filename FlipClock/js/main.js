/*
思路：
1.获取旧时间，拼成字符串
2.img对应字符串初始化
3.开定时器，获取新时间
4.对比新旧时间的,哪一位不同，哪一位翻页
5.新时间赋值给旧时间
*/
var lis=document.getElementsByTagName('li');
var img2=lis[2].getElementsByTagName('img')[0];
var img5=lis[5].getElementsByTagName('img')[0];
// 旧时间
var oldTime=getTime();
// 初始化时间
for(var i=0;i<lis.length;i++){
	fn(i);
}
// 开启定时器
setInterval(function(){
	//点闪烁
	img2.src = img5.src = 'img/c.jpg';
	setTimeout(function(){
		img2.src = img5.src = 'img/b.jpg';
	},500);
	// 获取新时间
	var newTime=getTime();
	// 对比新旧时间，找出变化的位置，执行翻页函数
	for(var i=0;i<newTime.length;i++){
		if(oldTime.charAt(i)!=newTime.charAt(i)){
			tab( i,newTime.charAt(i) );
		}
	}
	// 记录旧时间
	oldTime = newTime;
},1000);
// 补0
function toDouble(n){
	return n<10?'0'+n:''+n;
}
// 获取时间字符串 12:45:34
function getTime(){
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var str=toDouble(h)+':'+toDouble(m)+':'+toDouble(s);
	return str;
}
// 图片与时间一一对应
function fn(i){
	var img=lis[i].getElementsByTagName('img')[0];
	if(i==2||i==5){
		img.src='img/c.jpg';
	}else{
		img.src='img/'+oldTime.charAt(i)+'.jpg';
	}	
}
// 翻页函数
function tab(i,n){
	var li=lis[i];
	var imgs=li.getElementsByTagName('img');
	imgs[1].src='img/'+n+'.jpg';
	move(li,'top',800,-70,function(){
		imgs[0].src='img/'+n+'.jpg';
		li.style.cssText = '';
	});

}


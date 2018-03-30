//开始播放
playde();
function playde(){
	var aup = ele.byclass('msplay',1);
	aup.src="http://thirdparty.gtimg.com/C100002MOW3w0vbJHf.m4a?fromtag=38";
	aup.play();
}
//-------音乐播放
var songname,msdn = ele.byclass('micname'),aup = ele.byclass('msplay',1),sbar = ele.byclass('schtxt',1),Lsrc=[],num,ipt = ele.byTag('input',1);
//设置url,
function setUrl(src,i){
	msdn[i].onclick = function(event){
		event = event || window.event;
		aup.src = src;
		num = i;
		(event.stopPropagation) ? event.stopPropagation() : event.cancelBubble = true;
		aup.play();
	}
	Lsrc.push(src);
	return Lsrc;
}
//发送搜索数据函数
function getTxt(){
	(sbar.value == '') ? songname = '海阔天空' : songname = sbar.value;
	Lsrc=[];
	getData();
}

//自动切换下一首
aup.onended = function(){
	num++;
	(num === 6) && (num = 0);
	this.src = Lsrc[num];
	aup.play();
}
//监听事件空格搜歌,enter和浏览器有冲突,不知道怎么解决.
var toggle = false;
ele.addEvent(ipt,'keydown',function(et){
		if (et.keyCode ===17){
			getTxt();
		}else if(et.keyCode ===16){
			if(!toggle){
				aup.pause();
				toggle=true;
			}else{
				aup.play();
				toggle=false;
			}
		}
		(et.stopPropagation) ? (et.stopPropagation()) : (et.cancelBubble = true);
	});
//-----功能布局js
//close获取元素
var cse = ele.byclass('closeme',1),mx = ele.byclass('musicbox',1),mbar=ele.byclass('musicbar',1);
cse.onclick = function(event){
	mx.style.display = 'none';
	(event.stopPropagation) ? (event.stopPropagation()) : (event.cancelBubble = true);
}
mbar.onclick = function(event){
	mx.style.display = 'block';
	(event.stopPropagation) ? (event.stopPropagation()) : (event.cancelBubble = true);
}

//音乐框拖动
omv = ele.byclass('movebar',1),swth = false;
omv.onclick = function(event){
	(!swth) ? swth = true : swth = false;
	var omf = mx.offsetWidth,omh = mx.offsetHeight,omvW = Math.floor(omv.offsetWidth/2),omvH = Math.floor(omv.offsetHeight/2),slft =omv.offsetLeft,sltp =omv.offsetTop,wW = window.innerWidth - omf - 24,wH = window.innerHeight - omh;
	var newX = slft + omvW,newY = omvH + sltp;
ele.addEvent(document,'mousemove',function(et){
		event = event || window.event;
		if(swth){
			var xx = et.clientX - newX,yy = et.clientY - newY;
			mv(xx,yy,wW,wH);
		}
	});
}
function mv(xx,yy,wW,wH){ 
	if (xx < 4){
		xx = 4;
	}else if(xx > wW){
		xx = wW;
	}
	if (yy < 10){
		yy = 10;
	}else if(yy > wH){
		yy = wH;
	}
	mx.style.left = xx + 'px';
	mx.style.top = yy + 'px';
}





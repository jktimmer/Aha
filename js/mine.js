var ele = {
	byid:function(ele){
		return document.getElementById(ele);
	},
	byclass:function(ele,num){
		var elall = document.getElementsByClassName(ele);
		if (num == null) return each(elall);

		return each(elall)[num-1];

	},
	byTag:function(ele,num){
		var eleTag = document.getElementsByTagName(ele);
		//eleTag = [...eleTag];
		if (num == null) return each(eleTag);
		return each(eleTag)[num-1];
	},
	fidcls:function(parentid,childclass){
		var fhr = document.getElementById(parentid),cdls = null,fhrclass = fhr.getElementsByClassName(childclass);
		//cdls = [...fhrclass];
		return each(cdls);
	},
	fidcTg:function(parentid,childTag){
		var fhr = document.getElementById(parentid),cdtg = fhr.getElementsByTagName(childTag);
		//cdtg = [...cdtg];
		return each(cdtg);
	},
	addEvent:function(ele,event,fun){
		if (ele.addEventListener){
			ele.addEventListener(event,fun,false);
		}else if(ele.attachEvent){
			ele.attachEvent('on'+event,fun);
		}else{
			ele['on'+ event] =fun;
		}
	},
	rmEvent:function(ele,event,fun){
		if (ele.removeEventListener) return ele.removeEventListener(event,fun,false);
		else if(ele.detachEvent) return ele.detachEvent('on'+event,fun);
		else return ele['on'+ event] =null;
	},
	box:function(ele){
		return each(ele);
	}
		
}
//遍历函数
function each(ele){
	var bx = [];
	for (var i = 0,len = ele.length;i < len;i++){
		bx.push(ele[i]);
	}
	return bx;
}
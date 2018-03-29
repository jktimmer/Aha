

//请求数据函数
function getData(){
	var sData;
	$.ajax({
            url: "http://mobilecdn.kugou.com/api/v3/search/song",
            type:"GET",
            dataType: "jsonp",
            jsonp: "callback",
            data:{
            	format:"jsonp",
            	keyword:songname,
            	pagesize:6,//搜索多少个
            	showtype:1//几页

            },
            cache: false,
            success: function(data) {
               sData = (data.data.info);
               mtnDAta(sData);
            }
            
	});
}
/*http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=877578
// method=baidu.ting.billboard.billList&type=1&size=10&offset=0 
// 参数： type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜 ?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1*/
//处理数据
function mtnDAta(da){
	var i=0,np = document.getElementsByClassName('micname');
	da.forEach(function(item){
		var url = `http://www.kugou.com/yy/index.php?r=play/getdata&hash=${item.hash}`;
		$.ajax({
				url: url,
		        type:"GET",
		        dataType: "jsonp",
		        jsonp: "callback",
		        cache: false,
		        async:true,
		       	success: function(data){
			        i++;
			        np[i-1].innerHTML = `<span>${i}.</span>${data.data.audio_name}`;
					setUrl(data.data.play_url,i-1);
		        }
		});
	});
}

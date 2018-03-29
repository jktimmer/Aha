getDa();
function getDa(){
	var req = new XMLHttpRequest();
	if (req.readyState === 4 && req.status === 200){
		console.log(req.resopnseText);
	}
	req.open('get','./data.json',true);
	req.send(null);
}
var express = require("express");
var app = express();
app.use(express.static("public"));


/*app.get("/getdata",function(req,res){
	res.send("hello");
})*/

app.get("/getdata",function(req,res){
	var data = ["香蕉","苹果","鸭梨"];
	res.send(data);
})
app.listen(80,function(){
	console.log("服务器已经启动......");
})
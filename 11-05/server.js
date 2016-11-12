var express = require("express");
var app = express();
app.use(express.static("public"));    
app.get("/index",function(req,res){
	res.send("hello node;this is my frist web page")
})               
app.get("/getUsername",function(req,res){
	var name = req.query.username;
	var str = "我是" + name;
	res.send("str");
})
app.get("/checkuser",function(req,res){
	var username = req.query.username;
	var password = req.query.password;
	if(username === "abc" && password === "123"){
		res.send("登录成功");
	}else{
		res.send("登录失败");
	};
})
/*app.post("/checkuser",function(req,res){
	res.send("登录成功");
})*/
app.listen(80,function(){
	console.log("服务器已经启动......");
})
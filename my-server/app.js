//app.js
//引入第三方模块
//mysql/express/
const mysql = require("mysql");
const express = require("express");

//引入跨域模块
const cors = require("cors");



//const session=require("express-session")



//创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"yrd"
});


//创建express对象
var server = express(); 

//配置允许列表3000 允许
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true 
}))


//绑定监听端口 3000
server.listen(3000);
server.use(express.static("public"));



//功能：首页轮播图
//接收客户端发送请求 /imglist
server.get("/imglist",(req,res)=>{
  //创建数据发送客户端
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner.jpg"},
  ];
    res.send({code:1,data:rows}) 
})



//功能:新闻列表 
server.get("/newslist",(req,res)=>{
  //参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 3;
  }
  //sql
  var sql = "SELECT yid,title,ytime,img_url,content";
  sql+=" FROM yrd_news LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result,pageCount:3});
  })
})







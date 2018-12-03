const express = require('express')
const app = express();
const db = require('./db');
const mod = require('./Router/index')
const router = require('./Router/index');
!(async ()=>{
  await db;
  app.use(router);
})()
app.listen(4000,err=>{
  if(!err) console.log('服务器开启成功http://localhost:4000')
})
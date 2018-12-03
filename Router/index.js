const express = require('express');
const router = new express.Router();
router.get('/',(req,res) =>{
  res.send('服务器发来的相应')
});
module.exports = router;
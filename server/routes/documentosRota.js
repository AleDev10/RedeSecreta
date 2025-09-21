const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');
const {inicio} = require('../controllers/funcaoDocumentos');


//configuração do multer
const storage = multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null,path.join(__dirname,'..','files'));
  },
  filename:function (req,file,cb) {
    cb(null,Date.now()+'-'+file.originalname)
  }
});

const files = multer({storage:storage});


router.post('/',files.single('meuarquivo'),inicio);

module.exports = router;
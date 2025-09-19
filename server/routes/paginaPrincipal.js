const express = require('express');
const router = express.Router();
const {inicio} = require('../controllers/funcoespaginaprincipal');


router.get('/',inicio);

module.exports = router;
const path = require('path');

const inicio = (req,res) =>{
    res.sendFile(path.join(__dirname,'..','client','index.html'));
}

module.exports = {
  inicio
};

const path = require('path');

const inicio = (req,res) =>{

    if (req.file){ 
        res.redirect(`/arquivos/${req.file.filename}`);
    }else{
        res.send("Erro ao enviar o arquivo");
    }
}

module.exports = {
  inicio
};

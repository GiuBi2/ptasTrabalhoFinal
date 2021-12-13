var express = require('express');
var router = express.Router();
var noticias = require('../models/noticia');

router.get('/', async function (req, res, next) {
  json = await noticias.find();
  //{ 
    //title: 'IFMS', 
    //subtitle: 'Instituto Federal de Mato Grosso do Sul' 
  //};
  res.json(json);
  
  //res.render('/noticias',  {noticias: json});
    //: json.title, subtitle: json.subtitle });
});

router.get('/visualizar', async function (req, res, next) {
  json = await noticias.findById(req.query.id);
//{ 
    //title: 'IFMS/2', 
    //subtitle: 'Instituto Federal de Mato Grosso do Sul' 
  //};
res.json(json);
//res.render('noticias/visualizar', { noticias: json})
  //: json.title, subtitle: json.subtitle });
});

router.get('/contador', async function (req, res, next) {
  //json = await noticias.findById(req.query.id);
quantidade = await noticias.count();

res.json({quantidade:quantidade});
});
module.exports = router;
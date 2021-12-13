const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  subtitulo: { type: String },
   autor: { type: String },
   descrição:{ type: String },
   dataPublicaçao: { type: String },
   conteudo:{ type: String }
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;
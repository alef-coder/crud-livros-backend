const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String },
    anoPublicacao: { type: Number },
    lido: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Livro", livroSchema);

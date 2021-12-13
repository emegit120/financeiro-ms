const mongoose = require("mongoose")

const table = new mongoose.Schema({
    nome_banco: {type:String},
    tipo_conta: {type:String},
    nome_titular: {type:String},
    limite_cartao: {type:Number},
    datacadastro: {type:Date,default:Date.now},
})

module.exports = mongoose.model("financeiro_table",table)
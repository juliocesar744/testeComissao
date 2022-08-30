import express from "express";
import  { filterSellersAndMonth }  from "./helperFunctions/calcComission.js"
import { getMonth } from "./helperFunctions/filterMonth.js"

var app = express();

app.use(express.json());

app.post('/calcula-comissao', function(req, res){
    let comissoes = [];
    let vendas = req.body;
    var result = Object.entries(vendas)
    Object.entries(vendas).map(x => {
        comissoes.push({
            vendedor: x[1].vendedor,
            data: x[1].data,
            mes: getMonth(x[1].data),
            valor: x[1].valor
        })
    })

    let sellersComission = filterSellersAndMonth(comissoes);
    res.end(JSON.stringify(sellersComission));
})

app.listen(5332);
const metas = [
    {mes: 1, qtd : 5},
    {mes : 2, qtd : 3},
    {mes : 3, qtd : 2},
    {mes : 4, qtd : 2},
    {mes : 5, qtd : 5},
    {mes : 6, qtd : 60},
    {mes : 8, qtd : 2},
    {mes : 9, qtd : 4},
    {mes : 10, qtd : 4},
    {mes : 11, qtd : 7},
    {mes : 12, qtd : 2}
];

function calcComission(value) {
    let onePercent = 1.01;
    let treePercent = 1.03;
    let fivePercent = 1.05;

    if(value <= 300) {
        return  value * onePercent
    }

    if(value > 300 && value <=1000){
        return value * treePercent;
    }

    if(value > 1000){
        return value * fivePercent;
    }
}

function filterSellersAndMonth(array) {
    let sellersComissions  = [];
    array.forEach(x => {
        let sellLengthMonth = array.filter(y => y.mes === x.mes && y.vendedor === x.vendedor).length;
        let goalReached = metas.filter(y => y.mes === x.mes && sellLengthMonth >= y.qtd).length > 0;

        const obj = sellersComissions.find(o => o.vendedor === x.vendedor && o.mes === x.mes);

        x.valor = parseFloat(goalReached ? calcComission(x.valor) * 1.03 : calcComission(x.valor)).toFixed(2);

        if (obj) {
            obj.valor = (parseFloat(obj.valor) + parseFloat(x.valor)).toFixed(2);
        } else {
            sellersComissions.push(x);
        }
    });

    return sellersComissions;
}

export { calcComission, filterSellersAndMonth }
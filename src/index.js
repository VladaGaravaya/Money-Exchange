// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H=0,D=0,N=0,Q=0,P=0;
    var exchange={};
    if(currency<=10000 && currency>0){
        H=Math.trunc(currency/50);
        currency=currency%50;
        if(H!==0){ exchange.H=H;}
        Q=Math.trunc(currency/25);
        currency=currency%25;
        if(Q!==0){ exchange.Q=Q;}
        D=Math.trunc(currency/10);
        currency=currency%10;
        if(D!==0){ exchange.D=D;}
        N=Math.trunc(currency/5);
        currency=currency%5;
        if(N!==0){ exchange.N=N;}
        P=currency;
        if(P!==0){ exchange.P=P;}
        return exchange;
    }
    else if(currency<=0) return {};
    else if(currency>10000)  return{error: "You are rich, my friend! We don't have so much coins for exchange"};
}

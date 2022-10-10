// Token Balances in the form of an object array
// The returned value can be used for the "Pie Chart"

export const token_balances = (balances) => {
    let token_bal = [];
    for(const add of balances) {
        for(const tok of add.bal){
            if(tok.quote !== 0){
                const found = token_bal.some(el => el.name === tok.contract_ticker_symbol);
                if(!found){
                    token_bal.push({name : tok.contract_ticker_symbol, value : parseInt(tok.quote)});
                }
                else{
                    let x = token_bal.find(el => el.name === tok.contract_ticker_symbol);
                    x.value += parseInt(tok.quote);
                }
            }
        }   
    }
    return token_bal;
}

// Current Value of the Portfolio
export const portfolio_value = (balances) => {
    let val = 0;
    for(const add of balances) {
        for(const tok of add.bal){
        val += tok.quote;
        }    
    }
    return val.toFixed(2);
}

// The 24 Hr Avg Value of Portfolio
export const portfolio_value24 = (balances) => {
    let val = 0;
    for(const add of balances) {
        for(const tok of add.bal){
            val += tok.quote_24h;
        }    
    }   
    return val.toFixed(2);
}

// Historical Data for the Line Chart !!
export const historical_bal = (balances, days) => {
    let hist_bal = [];
    let i = 0;
    while(i<days){
        let d_bal = 0;
        for(const add of balances){
            for(const tok of add.bal){
                d_bal += tok.holdings[i].high.quote;
            }
        }   
        hist_bal.push({data : d_bal});
        i++;
    }
    return hist_bal;
}
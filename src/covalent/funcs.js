export const token_balances = (balances) => {
    let token_bal = [];
    for(const tok of balances){
        token_bal.push({sym : tok.contract_ticker_symbol, bal : parseInt(tok.balance_24h)/(10**parseInt(tok.contract_decimals))});
    }
    return token_bal;
}

export const portfolio_value = (balances) => {
    let val = 0;
    for(const tok of balances){
        val += parseInt(tok.balance)/(10**parseInt(tok.contract_decimals)) * tok.quote_rate;
    }    
    return val;
}

// The 24 Hr Avg Value of Portfolio
export const portfolio_value24 = (balances) => {
    let val = 0;
    for(const tok of balances){
        val += parseInt(tok.balance_24h)/(10**parseInt(tok.contract_decimals)) * tok.quote_rate_24h;
    }    
    return val;
}

// Historical Data for the Line Chart !!
export const historical_bal = (balances, days) => {
    let hist_bal = [];
    let i = 0;
    while(i<days){
        let d_bal = 0;
        for(const tok of balances){
            d_bal += tok.holdings[i].high.quote;
        }
        hist_bal.push({day : i, val : d_bal});
        i++;
    }
    return hist_bal;
}
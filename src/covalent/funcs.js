export const token_balances = (balances) => {
    let token_bal = []
    for(const tok of balances){
        token_bal.push({sym : tok.contract_ticker_symbol, bal : parseInt(tok.balance_24h)/(10**parseInt(tok.contract_decimals))});
    }
    return token_bal;
}

export const portfolio_value = (balances) => {
    let val = 0
    for(const tok of balances){
        val += parseInt(tok.balance)/(10**parseInt(tok.contract_decimals)) * tok.quote_rate;
    }    
    return val;
}

export const portfolio_value24 = (balances) => {
    let val = 0
    for(const tok of balances){
        val += parseInt(tok.balance_24h)/(10**parseInt(tok.contract_decimals)) * tok.quote_rate_24h;
    }    
    return val;
}
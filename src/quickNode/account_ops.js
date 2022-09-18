import { provider } from "./basic";

export const getBal = async(params) => {
    const result = await provider.send("hmy_getBalance", params);
    return(parseInt(result) / 10**18)
}

export const getTxs = async(params) => {
    const result = await provider.send("hmy_getTransactionsHistory", params);
    return(result)
}
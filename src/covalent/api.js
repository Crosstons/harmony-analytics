import axios from "axios";
import { inputAddresses } from "../components/Waddress";
const APIKEY = 'ckey_f2a7d8e02ddb427ea2764a67733';
const baseURL = 'https://api.covalenthq.com/v1';
const blockchainChainId = '1666600000';

export const getHRCBalances = async() => {
    let bal = [];
    for(const i of inputAddresses){
//    const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${APIKEY}`);
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${i.WalletAddress}/balances_v2/?quote-currency=USD&format=JSON&key=${APIKEY}`);
        let addr = i.WalletAddress;
        bal.push({ addr : addr, bal : res.data.data.items});
    }
    return bal;
}

export const getHistorical = async(days) => {
    let bal = [];
    days = parseInt(days);
    days -= 1;;
    days = String(days);
    for(const i of inputAddresses){
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${i.WalletAddress}/portfolio_v2/?days=${days}&key=${APIKEY}`);
        let addr = i.WalletAddress;
        bal.push({addr : addr, bal : res.data.data.items});
    }
    return bal;
}


export const getHRC20Txs = async(tokenList) => {
    let txs = [];
    for(const i of inputAddresses){
        for(const tok of tokenList){
            if(tok.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
                const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${i.WalletAddress}/transfers_v2/?quote-currency=USD&format=JSON&contract-address=${tok.address}&key=${APIKEY}`);
                for(const i of res.data.data.items){
                    txs.push({hash : i.tx_hash, timestamp : i.block_signed_at});
                }
            }
        }
    }
    return txs;
}

export const getTransactions = async() => {
    let txs = [];
    for(const i of inputAddresses){
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${i.WalletAddress}/transactions_v2/?no-logs=true&page-size=15&key=${APIKEY}`);
        for(const j of res.data.data.items){
            txs.push({hash : j.tx_hash, timestamp : j.block_signed_at});
        }
    }
    return txs;
}
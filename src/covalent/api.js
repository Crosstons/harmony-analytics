import axios from "axios";
const APIKEY = 'ckey_f2a7d8e02ddb427ea2764a67733';
const baseURL = 'https://api.covalenthq.com/v1';
const blockchainChainId = '1666600000';

export const getWalletBalance = async(address) => {
    const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    return res.data.data;
}

export const getTransactions = async(address, token) => {
    const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/transfers_v2/?contract-address=${token}&key=${APIKEY}`);
    return res.data.data;
}
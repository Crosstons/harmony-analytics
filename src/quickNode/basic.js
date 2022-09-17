import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider("https://tame-billowing-river.harmony-mainnet.discover.quiknode.pro/4ff2f90664187f2b4a6a2938bb92df8d2213aebb");

export const blockNo = async(params) => {
    const result = await provider.send("hmy_blockNumber", params);
    console.log(parseInt(result));
}

export const gasPrice = async(params) => {
    const result = await provider.send("hmy_gasPrice", params);
    console.log(parseInt(result));
}
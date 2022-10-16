import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTransactions } from "../covalent/api";

export const TxList = () => {
    const [tx, setTx] = useState([]);

    useEffect(() => {
        (async () => {
            const balTxs = await getTransactions();
            let tx = balTxs.slice(0,6);
            setTx(tx);
        })();
    });

    
    return(
        <>
<div className="mt-2 mb-4 text-2xl text-spicy text-semibold font-barlow">Latest TXs</div>
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Hash
                </th>
            </tr>
        </thead>
        <tbody>
                {
                    tx.map((hash) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <a href={`https://explorer.harmony.one/tx/${hash.hash}`}>
                                {hash.hash.substring(0,30)}
                            </a>
                        </th>
                        </tr>
                    ))
                }
        </tbody>
    </table>
</div>
        </>
    );
}
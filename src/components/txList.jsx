import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTransactions } from "../covalent/api";

export const TxList = () => {
    const [tx, setTx] = useState([]);

    useEffect(() => {
        (async () => {
            const balTxs = await getTransactions();
            let tx = balTxs.slice(0,5);
            setTx(tx);
        })();
    });

    
    return(
        <div className="bg-white rounded-lg shadow lg:w-1/3">
            <ul className="divide-y divide-gray-100">
                {
                    tx.map((hash) => (
                        <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                            <a href={`https://explorer.harmony.one/tx/${hash.hash}`}>
                                {hash.hash}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
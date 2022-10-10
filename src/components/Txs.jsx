import React from "react";
import { getHRC20Txs } from "../covalent/api";
import { tx_data_sorted } from "../covalent/funcs";

export class Txs extends React.Component{
    state = {loading : true, data : []};

    componentDidMount(){
        getHRC20Txs(this.props.data).then((bal) => {
            this.setState({loading : false, data : tx_data_sorted(bal, 7)});
          });
    }
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}
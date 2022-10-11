import React,{PureComponent} from "react";
import { getHRC20Txs } from "../covalent/api";
import { tx_data_sorted } from "../covalent/funcs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export class Txs extends PureComponent{
    state = {loading : true, data : []};

    componentDidMount(){
        getHRC20Txs(this.props.data).then((bal) => {
            this.setState({loading : false, data : tx_data_sorted(bal, 7)});
          });
    }
    render() {
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={this.state.data.reverse()}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={false} />
              <Legend />
              <Line type="monotone" 
              animationBegin={800}
              animationDuration={2000}
              fill="#3a504b"
              strokeWidth={3} dataKey="Txs" stroke="#28B78D" activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      }
}
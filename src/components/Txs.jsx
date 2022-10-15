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
          <>
          <label for="toggle" class="inline-flex relative cursor-pointer">
            <input type="checkbox" value="" id="toggle" class="sr-only peer"/>
            <div class="w-11 h-6 bg-hot peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-spicy"></div>
            <span class="ml-3 text-sm font-medium text-mild">7D</span>
          </label>
          <div className="flex">
            <LineChart
              width={400}
              height={320}
              data={this.state.data.reverse()}
              margin={{
                top: 100,
                right: 0,
                left: 0,
                bottom: 0,
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
            </div>
            <div className="mt-16 text-2xl text-spicy text-semibold font-barlow">Lorem Ipsum</div>
            
          </>
        );
      }
}
import React, { PureComponent } from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
import { getHistorical } from "../covalent/api";
import { historical_bal } from "../covalent/funcs";

export default class Earnings extends PureComponent {
  state = {loading : true, data : []}

  componentDidMount(){
    getHistorical(30).then((bal) => {
      this.setState({data : historical_bal(bal, 30)});
    });
  }

  render() {
  return (
    <div>
        <ResponsiveContainer width="75%" height="50%">
          <AreaChart
            width={500}
            height={400}
            data={this.state.data.reverse()}
            margin={{ top: 5, left: 25, right: 5, bottom: 5 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
     </div>
    );
  }
}

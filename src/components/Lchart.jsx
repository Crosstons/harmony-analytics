import React, { PureComponent } from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
import { getHistorical } from "../covalent/api";
import { historical_bal } from "../covalent/funcs";

export default class Earnings extends PureComponent {
  state = {loading : true, data : []}

  componentDidMount(){
    getHistorical(7).then((bal) => {
      console.log(bal);
      this.setState({data : historical_bal(bal, 7)});
    });
  }

  render() {
  return (
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
              stroke="#28B78D"
              fill="#3a504b"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
    );
  }
}

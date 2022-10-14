import React, { PureComponent } from "react";
import styled from "styled-components";
import { AreaChart, Area, XAxis, Tooltip, YAxis } from "recharts";
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

          <div className="p-0.5">
            <h1>Hello </h1>
          <AreaChart
            width={350}
            height={200}
            data={this.state.data.reverse()}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="value"
              stroke="#28B78D"
              fill="#3a504b"
              strokeWidth={4}
            />
          </AreaChart>
          </div>
    );
  }
}


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
            width={500}
            height={400}
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

// export default Lchart
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
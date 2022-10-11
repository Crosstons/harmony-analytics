import React from 'react';
import Datacard1 from '../components/Datacard1';
import Earnings from '../components/Lchart';
import HoldingsPie from '../components/PieChart';
import { getHRCBalances} from '../covalent/api';
import { non_zero_tokens, portfolio_value, portfolio_value24, token_balances } from '../covalent/funcs';
import Navbar from '../components/Navbar';
import Loader from './Loader';
import { Txs } from '../components/Txs';
import { TxList } from '../components/txList';

class Dashboard extends React.Component {
  state = {loading : true, curr_value : 0, avg_value : 0, holdingsData : [], nonZero_tokens : []};

  componentDidMount(){
    getHRCBalances().then((bal) => {
      this.setState({loading : false, curr_value : portfolio_value(bal), avg_value : portfolio_value24(bal), holdingsData : token_balances(bal), nonZero_tokens : non_zero_tokens(bal)});
    });
  }

  render (){
  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-12 gap-4  w-screen h-screen">
    <div className="box row-start-1 row-span-1 col-start-1 col-span-6"><Navbar /></div>
    <div className="box row-start-2 row-span-3 col-start-1 col-span-1">
      {this.state.loading ? <Loader /> : <Datacard1 title={"Current Value : "} data={this.state.curr_value}/>}
    </div>
    <div className="box row-start-2 row-span-3 col-start-2 col-span-1">
      {this.state.loading ? <Loader /> : <Datacard1 title={"24HR Avg Value : "} data={this.state.avg_value}/>}
    </div>
    <div className="box row-start-2 row-span-3 col-start-3 col-span-2">
      {this.state.loading ? <Loader /> : <Earnings />}
    </div>
    <div className="box row-start-2 row-span-3 col-start-5 col-span-2">
      {this.state.loading ? <Loader /> : <HoldingsPie data={this.state.holdingsData}/>}
    </div>
    <div className="box row-start-5 row-span-4 col-start-1 col-span-3">
      {this.state.loading ? <Loader /> : <Txs data={this.state.nonZero_tokens}/>}
    </div>
    <div className="box row-start-5 row-span-4 col-start-4 col-span-3">
      {this.state.loading ? <Loader /> : <TxList />}
    </div>
</div>
    )
  }
}

export default Dashboard;
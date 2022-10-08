import React from 'react';
import Datacard1 from '../components/Datacard1';
import Lchart from '../components/Lchart';
import { getHRCBalances} from '../covalent/api';
import { portfolio_value, portfolio_value24 } from '../covalent/funcs';
import Navbar from '../components/Navbar';
import Loader from './Loader';

class Dashboard extends React.Component {

  state = {loading : true, curr_value : 0, avg_value : 0};

  componentDidMount(){
    getHRCBalances().then((bal) => {
      this.setState({curr_value : portfolio_value(bal), avg_value : portfolio_value24(bal)});
      this.setState({loading : false});
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
    <div className="box row-start-2 row-span-3 col-start-3 col-span-2"><Lchart /></div>
    <div className="box row-start-2 row-span-3 col-start-5 col-span-2"></div>
    <div className="box row-start-5 row-span-4 col-start-1 col-span-3">6</div>
    <div className="box row-start-5 row-span-4 col-start-4 col-span-3"></div>
</div>
    )
  }
}

export default Dashboard;
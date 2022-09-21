import React from 'react';
import Lchart from '../components/Lchart';

function Dashboard() {
  return (
    <div>
        <div class="grid overflow-hidden lg grid-cols-3 grid-rows-4 gap-2">
	<div class="box row-span-1 col-start-1 col-end-4"><Lchart /></div>
	<div class="box row-start-2 row-span-4 col-start-1 col-end-2">2</div>
	<div class="box col-start-2 col-span-2">3</div>
	<div class="box">4</div>
	<div class="box">5</div>
</div>
    </div>
  )
}

export default Dashboard;
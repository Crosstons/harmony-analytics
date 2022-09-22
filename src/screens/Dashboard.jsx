import React from 'react';
function Dashboard() {
  return (
    <div class="grid overflow-hidden lg grid-cols-4 grid-rows-8 gap-2 w-screen h-screen">
	<div class="box row-start-1 row-end-1 col-start-1 col-end-5">1</div>
	<div class="box row-start-2 row-span-4 col-start-1 col-span-3">2</div>
	<div class="box row-start-2 row-span-2 col-start-4 col-end-5">3</div>
	<div class="box row-start-4 row-span-2 col-end-5">4</div>
	<div class="box row-start-6 row-span-1 col-start-1 col-end-5">5</div>
</div>
  )
}

export default Dashboard;
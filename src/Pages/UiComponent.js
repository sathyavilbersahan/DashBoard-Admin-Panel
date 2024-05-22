import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'


import React from "react";

export const UiComponent = () => {
	const data = [
		{

		  uv: 4000,
		  pv: 2400,
		  amt: 2400,
		},
		{

		  uv: 3000,
		  pv: 1398,
		  amt: 2210,
		},
		{
	
		  uv: 2000,
		  pv: 9800,
		  amt: 2290,
		},
		{

		  uv: 2780,
		  pv: 3908,
		  amt: 2000,
		},
		{
	
		  uv: 1890,
		  pv: 4800,
		  amt: 2181,
		},
		{

		  uv: 2390,
		  pv: 3800,
		  amt: 2500,
		},
		{
	
		  uv: 3490,
		  pv: 4300,
		  amt: 2100,
		},
	  ];
return (
	<main className='main-container'>
	<div className='main-title'>
		<h3 className='Headings'>UI Components DASHBOARD</h3>
	</div>

	<div className='main-cards'>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Products</h3>
				<BsFillArchiveFill className='card_icon'/>
			</div>
			<h1>100000</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Orders</h3>
				<BsFillGrid3X3GapFill className='card_icon'/>
			</div>
			<h1>1896</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Prdoucts Sold</h3>
				<BsPeopleFill className='card_icon'/>
			</div>
			<h1>$3M</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Followers</h3>
				<BsFillBellFill className='card_icon'/>
			</div>
			<h1>45,9%</h1>
		</div>
	</div>

	<div className='charts'>
		<ResponsiveContainer width="100%" height="100%">
		<BarChart
		width={500}
		height={300}
		data={data}
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
			<Tooltip />
			<Legend />
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>

		<ResponsiveContainer width="100%" height="100%">
			<LineChart
			width={500}
			height={300}
			data={data}
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
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>

	</div>
</main>
)
}

export const Elements = () => {
	const data = [
		{

		  uv: 4000,
		  pv: 2400,
		  amt: 2400,
		},
		{

		  uv: 3000,
		  pv: 1398,
		  amt: 2210,
		},
		{
	
		  uv: 2000,
		  pv: 9800,
		  amt: 2290,
		},
		{

		  uv: 2780,
		  pv: 3908,
		  amt: 2000,
		},
		{
	
		  uv: 1890,
		  pv: 4800,
		  amt: 2181,
		},
		{

		  uv: 2390,
		  pv: 3800,
		  amt: 2500,
		},
		{
	
		  uv: 3490,
		  pv: 4300,
		  amt: 2100,
		},
	  ];
return (
	<main className='main-container'>
	<div className='main-title'>
		<h3 className='Headings'>Elements DASHBOARD</h3>
	</div>

	<div className='main-cards'>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Products</h3>
				<BsFillArchiveFill className='card_icon'/>
			</div>
			<h1>100000</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Orders</h3>
				<BsFillGrid3X3GapFill className='card_icon'/>
			</div>
			<h1>1896</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Prdoucts Sold</h3>
				<BsPeopleFill className='card_icon'/>
			</div>
			<h1>$3M</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Followers</h3>
				<BsFillBellFill className='card_icon'/>
			</div>
			<h1>45,9%</h1>
		</div>
	</div>

	<div className='charts'>
		<ResponsiveContainer width="100%" height="100%">
		<BarChart
		width={500}
		height={300}
		data={data}
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
			<Tooltip />
			<Legend />
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>

		<ResponsiveContainer width="100%" height="100%">
			<LineChart
			width={500}
			height={300}
			data={data}
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
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>

	</div>
</main>
)
}
export const Components = () => {
	const data = [
		{

		  uv: 4000,
		  pv: 2400,
		  amt: 2400,
		},
		{

		  uv: 3000,
		  pv: 1398,
		  amt: 2210,
		},
		{
	
		  uv: 2000,
		  pv: 9800,
		  amt: 2290,
		},
		{

		  uv: 2780,
		  pv: 3908,
		  amt: 2000,
		},
		{
	
		  uv: 1890,
		  pv: 4800,
		  amt: 2181,
		},
		{

		  uv: 2390,
		  pv: 3800,
		  amt: 2500,
		},
		{
	
		  uv: 3490,
		  pv: 4300,
		  amt: 2100,
		},
	  ];
return (
	<main className='main-container'>
	<div className='main-title'>
		<h3 className='Headings'>Components DASHBOARD</h3>
	</div>

	<div className='main-cards'>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Products</h3>
				<BsFillArchiveFill className='card_icon'/>
			</div>
			<h1>100000</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Orders</h3>
				<BsFillGrid3X3GapFill className='card_icon'/>
			</div>
			<h1>1896</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Prdoucts Sold</h3>
				<BsPeopleFill className='card_icon'/>
			</div>
			<h1>$3M</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Followers</h3>
				<BsFillBellFill className='card_icon'/>
			</div>
			<h1>45,9%</h1>
		</div>
	</div>

	<div className='charts'>
		<ResponsiveContainer width="100%" height="100%">
		<BarChart
		width={500}
		height={300}
		data={data}
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
			<Tooltip />
			<Legend />
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>

		<ResponsiveContainer width="100%" height="100%">
			<LineChart
			width={500}
			height={300}
			data={data}
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
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>

	</div>
</main>
)
}

export const Tables = () => {
	const data = [
		{

		  uv: 4000,
		  pv: 2400,
		  amt: 2400,
		},
		{

		  uv: 3000,
		  pv: 1398,
		  amt: 2210,
		},
		{
	
		  uv: 2000,
		  pv: 9800,
		  amt: 2290,
		},
		{

		  uv: 2780,
		  pv: 3908,
		  amt: 2000,
		},
		{
	
		  uv: 1890,
		  pv: 4800,
		  amt: 2181,
		},
		{

		  uv: 2390,
		  pv: 3800,
		  amt: 2500,
		},
		{
	
		  uv: 3490,
		  pv: 4300,
		  amt: 2100,
		},
	  ];
return (
	<main className='main-container'>
	<div className='main-title'>
		<h3 className='Headings'>Tables DASHBOARD</h3>
	</div>

	<div className='main-cards'>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Products</h3>
				<BsFillArchiveFill className='card_icon'/>
			</div>
			<h1>100000</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Total Orders</h3>
				<BsFillGrid3X3GapFill className='card_icon'/>
			</div>
			<h1>1896</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Prdoucts Sold</h3>
				<BsPeopleFill className='card_icon'/>
			</div>
			<h1>$3M</h1>
		</div>
		<div className='card'>
			<div className='card-inner'>
				<h3>Followers</h3>
				<BsFillBellFill className='card_icon'/>
			</div>
			<h1>45,9%</h1>
		</div>
	</div>

	<div className='charts'>
		<ResponsiveContainer width="100%" height="100%">
		<BarChart
		width={500}
		height={300}
		data={data}
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
			<Tooltip />
			<Legend />
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>

		<ResponsiveContainer width="100%" height="100%">
			<LineChart
			width={500}
			height={300}
			data={data}
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
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>

	</div>
</main>
)
}

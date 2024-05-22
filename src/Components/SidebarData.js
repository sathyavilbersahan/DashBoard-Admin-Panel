// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "DashBoard",
		path: "/DashBoard",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Analytics",
				path: "/Dashboard/Analytics",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Commerce",
				path: "/Dashboard/Commerce",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Sales",
				path: "/Dashboard/Sales",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Minimal",
				path: "/Dashboard/Minimal",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "CRM",
				path: "/Dashboard/CRM",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title:"pages",
				path:"/Dashboard/Pages",
				icon: <IoIcons.IoIosPaper />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,
		 
			 },	
			 {
				title:"Application",
				path:"/Dashboard/Application",
				icon: <IoIcons.IoIosPaper />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,
		 
			 },	
		],
	},
	{
		title: "UI COMPONENT",
		path: "/UiComponent",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Element",
				path: "/UiComponent/Element",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Component",
				path: "/UiComponent/Component",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Tables",
				path: "/UiComponent/Tables",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: " widgets",
		path: "/Widgets",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
	   iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav :[
           {
			title: "Chart Boxes",
				path: "/Widgets/ChartBoxes",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
		   },
		   {
			title: "Profile Boxes",
				path: "/Widgets/ProfileBoxes",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
		   },
		   {
			title: "Content Boxes",
				path: "/Widgets/PriceBoxes",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
		   },
		   
		]
	},
	{
		title: "Forms",
		path: "/Froms",
		icon: <FaIcons.FaEnvelopeOpenText />,
     	iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Elements",
				path: "/Froms/Element",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Widgets",
				path: "/Froms/Widget",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Charts",
		path: "/Charts",
		icon: <IoIcons.IoMdHelpCircle />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [{
			title: "Charts JS",
				path: "/Charts/ChartJS",
				icon: <IoIcons.IoIosPaper />,
		},
		{
			title: "Apex Charts",
			path: "/Charts/ApexCharts",
			icon: <IoIcons.IoIosPaper />,
		},
		{
			title: "Gauges",
			path: "/Charts/Gauges",
			icon: <IoIcons.IoIosPaper />,
		},
		]
	},
];

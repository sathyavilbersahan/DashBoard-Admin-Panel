import "./App.css";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Analytics,Commerce,Sales,Minimal,CRM,Pages,Application, Dashboard} from "./Pages/Dashboard";
import {UiComponent,Elements,Components,Tables} from "./Pages/UiComponent";
import {Forms,Element,Widget} from "./Pages/Forms";
import {Widgets,ChartBoxes,ProfileBoxes,PriceBoxes} from "./Pages/Widgets"
import  { ApexCharts, ChartJS, Charts, Gauges } from "./Pages/Charts";
function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route
					path="/Dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/Dashboard/Analytics"
					element={<Analytics />}
				/>
				<Route
					path="/Dashboard/Commerce"
					element={<Commerce />}
				/>
				<Route
					path="/Dashboard/Sales"
					element={<Sales />}
				/>
				<Route
					path="/Dashboard/Minimal"
					element={<Minimal />}
				/>
				<Route
					path="/Dashboard/CRM"
					element={<CRM />}
				/>
				<Route
					path="/Dashboard/Pages"
					element={<Pages />}
				/>
				<Route
					path="/Dashboard/Application"
					element={<Application />}
				/>
				<Route
					path="/UiComponent"
					element={<UiComponent />}
				/>
				<Route
					path="/UiComponent/Element"
					element={<Elements />}
				/>
				<Route
					path="/UiComponent/Component"
					element={<Components/>}
				/>
				<Route
					path="/UiComponent/Tables"
					element={<Tables />}
				/>
				<Route
					path="/Widgets"
					element={<Widgets />}
				/>
				<Route
					path="/Widgets/ChartBoxes"
					element={<ChartBoxes />}
				/>
				<Route
					path="/Widgets/ProfileBoxes"
					element={<ProfileBoxes />}
				/>
				<Route
					path="/Widgets/PriceBoxes"
					element={<PriceBoxes />}
				/>
				<Route
					path="/Froms"
					element={<Forms />}
				/>
				<Route
					path="/Froms/Element"
					element={<Element />}
				/>
				<Route
					path="/Froms/Widget"
					element={<Widget />}
				/>
				<Route
					path="/Charts"
					element={<Charts />}
				/>
				<Route
					path="/Charts/ChartJS"
					element={<ChartJS />}
				/>
				<Route
					path="/Charts/ApexCharts"
					element={<ApexCharts />}
				/>
				<Route
					path="/Charts/Gauges"
					element={<Gauges />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

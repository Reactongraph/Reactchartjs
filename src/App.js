import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import Multitype from "./components/Multitype";
import PieChart from "./components/PieChart";
import AreaChart from "./components/AreaChart";
import DoughnutChart from "./components/DoughnutChart";
import PolarAreaChart from "./components/PolarAreaChart";
import RadarChart from "./components/RadarChart";
import ScatarChart from "./components/ScatarChart";
import BubbleChart from "./components/BubbleChart";
function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Chart components */}
        <LineChart />
        <BarChart />
        <Multitype />
        <AreaChart />
        <DoughnutChart />
        <PieChart />
        <PolarAreaChart />
        <RadarChart />
        <ScatarChart />
        <BubbleChart />
      </div>
    </div>
  );
}

export default App;

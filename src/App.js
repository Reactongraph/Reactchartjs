import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Multitype from './components/Multitype';
import PieChart from './components/PieChart';
import PolarChart from './components/PolarChart'
import RadarChart from './components/RadarChart'

function App() {
  return (
    <div className="App">
       
      <div className='chart'>
        {/* Chart components */}
          <LineChart/>
          <BarChart/>
          <Multitype/>
          <PieChart/>
          <PolarChart/>
          <RadarChart/>
      </div>
    </div>
  );
}

export default App;

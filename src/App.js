import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Multitype from './components/Multitype';

function App() {
  return (
    <div className="App">
       
      <div className='chart'>
        {/* Chart components */}
          <LineChart/>
          <BarChart/>
          <Multitype/>
      </div>
    </div>
  );
}

export default App;

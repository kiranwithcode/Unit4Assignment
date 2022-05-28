import './App.css';
import { Cards } from './components/Cards';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Cards data={data} />
    </div>
  );
}

export default App;

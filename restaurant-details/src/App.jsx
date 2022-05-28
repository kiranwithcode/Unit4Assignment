import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from './data/userInfo.json';
import restaurants from './data/restaurants.json'
import offers from './data/offers.json'
import { useState } from 'react';

function App() {
  const [filterBy, setfilterBy] = useState("");
  const [data, setdata] = useState([]);
  const updateFilter = () => {
    // some code will be written here
  }
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers} />
      <section className='near-you'>
        <Filters currentFilteredBy={filterBy} updateFilter={updateFilter} />
        <Restaurants restaurants={data}/>
      </section>
    </div>
  );
}

export default App;

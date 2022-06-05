import './App.css';
import Form from "./components/Form.jsx"
import CreditCard from "./components/CreditCard.jsx"
import { useState } from 'react';

const initialInfo = {
  cardHolder: "",
  cardNumber:"",
  expMonth: "",
  expYear: "",
  cvc: ""
}

function App() {
  const [info, setInfo] = useState(initialInfo)

  const handleChange = ((e)=>setInfo((prev)=>({...prev,[e.target.name]:e.target.value})))
  return (
    <div className="App">
      <CreditCard info={info} />
      <Form info={info} setInfo={setInfo} handleChange={handleChange} />
    </div>
  );
}

export default App;

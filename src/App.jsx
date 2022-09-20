import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card/Card';
import FormInput from './components/Form/FormInput';
import CardContainer from './components/Card/CardContainer';

const dumm = [
  {title: "Masih Coba", price: 15000, date: new Date(2022, 9, 20)},
  {title: "Masih Coba1", price: 115000, date: new Date(2022, 9, 21)},
  {title: "Masih Coba2", price: 215000, date: new Date(2022, 9, 22)},
  {title: "Masih Coba3", price: 315000, date: new Date(2022, 9, 23)}
];

function App() {
  const [count, setCount] = useState('');
  const [datas, setDatas] = useState('');

  const incrementHandler = () => {
    setCount((count) => count + 1);
  }

  const saveHandler = (data) => {
    setDatas((prev) => {
      return [data, ...prev]
    });
  }

  return (
    <div className="container h-100">
      <h4 className="fs-2">Somekind of Apps</h4>
      <FormInput onSave={saveHandler}/>
      <CardContainer items={datas} />
    </div>
  );
}

import 'bootstrap/dist/js/bootstrap.js';

export default App

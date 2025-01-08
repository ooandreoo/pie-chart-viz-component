import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PieChart from './components/PieChart'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const strToArray = (str) => {
    return str.split(" ").filter(i=>i.length>0).map(i=>Number.parseInt(i));
  }

  const updateData =({target:{value}}) => {
    setValue(value);
    setData(strToArray(value));
  }
  console.log("data",data)

  return (
    <>
      <h1>Pie chart using D3 and React v1.0</h1>
      <div className="card">
        <input onChange={updateData}/>
        <PieChart
           data={data}
           width={700}
           height={300}
        />
      </div>
    </>
  )
}

export default App

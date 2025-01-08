import { useState } from 'react'
import PieChart from './components/PieChart'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState("");
  const [quantity, setQuantity] = useState(0);

  const updateData = (e) => {
    console.log(e)
    let newArr = [].concat(data);
    newArr.push({label: tag, value:quantity});
    setData(newArr);
    setTag("");
    setQuantity(0);
  }

  const deleteTag = (i) => {
    console.log("el index",i)
    let newArr = [].concat(data);
    newArr.splice(i,1);
    setData(newArr);
  };

  const items = data.map((e,i) => 
    <>
      <div key={`${i}data`} >{`${e.label} ${e.value}`}</div>
      <button key={`${i}button`} onClick={() => deleteTag(i)}>X</button>
    </>
  );

  console.log(data);
  return (
    <>
      <h1>Pie chart using D3 and React v1.0</h1>
      
      <div className='container'>
        
        <div className="left-side">
          <PieChart
            data={data}
            width={700}
            height={300}
          />
        </div>
        <div className='right-side'>
          <label htmlFor="itag">Tag:</label><br/>
          <input type="text" id="itag" name="itag" value={tag} onChange={e=>setTag(e.target.value)} /><br/>
          <label htmlFor="iquantity">Quantity:</label><br/>
          <input type="text" id="iquantity" name="iquantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
          <button onClick={updateData}>Add</button>
          <>
            {items}
          </>
        </div>
      </div>
    </>
  )
}

export default App

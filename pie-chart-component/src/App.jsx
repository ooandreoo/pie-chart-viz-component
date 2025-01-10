import { useState } from 'react'
import PieChart from './components/PieChart'
import Table from './components/Table';
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

  return (
    <>
      <h1>Pie chart using D3 and React v1.0</h1>
      
      <div className='container'>
        
        <div className="left-side">
          <PieChart
            data={data}
            width={400}
            height={300}
          />
        </div>
        <div className='right-side'>
          <label htmlFor="itag">Tag:</label><br/>
          <input type="text" id="itag" name="itag" value={tag} onChange={e=>setTag(e.target.value)} /><br/>
          <label htmlFor="iquantity">Quantity:</label><br/>
          <input type="text" id="iquantity" name="iquantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
          <button onClick={updateData}>Add</button>
          <Table
            headers={['label','value','actions']}
            data={data}
            deleteItem={(item) => deleteTag(item)}
          />
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import PieChart from './components/PieChart'
import Table from './components/Table';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [tag, setTag] = useState('');
  const [quantity, setQuantity] = useState(0);

  const updateData = () => {
    let newArr = [].concat(data);
    if(quantity<=0)
      setError('Please insert a valid quantity, aka. greater than zero');
    else if(tag.length===0)
      setError('Please insert a valid label, not empty one');
    else {
      if(error.length>0)
        setError('');
      newArr.push({label: tag, value:quantity});
      setData(newArr);
      setTag('');
      setQuantity(0);
    }
  }

  const deleteTag = (i) => {
    let newArr = [].concat(data);
    newArr.splice(i,1);
    setData(newArr);
  };

  return (
    <>
      <h1>Pie chart using D3 and React v1.0</h1>
      <h2>Not responsive at all</h2>
      
      <div className='container'>
        
        <div className='left-side'>
          <PieChart
            data={data}
            width={500}
            height={500}
          />
        </div>
        <div className='right-side'>
          <div className='input-zone'>
            <label htmlFor='itag'>Label:</label><br/>
            <input type='text' id='itag' name='itag' value={tag} onChange={e=>setTag(e.target.value)} /><br/>
            <label htmlFor='iquantity'>Value:</label><br/>
            <input type='number' id='iquantity' name='iquantity' value={quantity} onChange={e=>setQuantity(e.target.value)} /><br/>
            <button onClick={updateData}>Add</button> <br/>
          </div>
          <p id='error-message' className='error-style'>{error}</p>
          <Table
            headers={['label','value']}
            data={data}
            deleteItem ={(item) => deleteTag(item)}
            noEmpty
          />
        </div>
      </div>
    </>
  )
}

export default App

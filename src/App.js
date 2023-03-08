import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://zealous-erin-cod.cyclic.app'

function App() {
  const [number,setNumber] = useState(0)
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get(baseUrl+'/recipes').then((res)=>{
      console.log(res.data.data)
    })
  },[])

  useEffect(()=>{
    if(number%2==0){
      axios.get(baseUrl+'/recipes/category').then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
      })
    }
    if(number%2!=0){
      axios.get(baseUrl+'/recipes').then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
      })
    }
  },[number])

  return (
    <div className="App">
      <header className="App-header">
          Learn React
          <br />
          {number%2==0 && data.map((item,index)=>(
            <li key={item.id}>{item.id} - {item.name}</li>
          ))}
          {number%2!=0 && data.map((item,index)=>(
            <li key={index+1}>{index+1} - {item.title}</li>
          ))}
          <br />
          {number}
          <br />
          <button onClick={()=>setNumber(number+1)}>add number</button>
          <br />
          <button onClick={()=>setNumber(number-1)}>kurangi number</button>
      </header>
    </div>
  );
}

export default App;

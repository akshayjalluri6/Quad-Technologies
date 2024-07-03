import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const {cryptoData, setCryptoData} = useState({})

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/")
    console.log(response.data)
  }

  return(
    <div>
      <h1>HODLINFO</h1>

      <button onClick={fetchData}>Get Data</button>
    </div>
  )
}

export default App

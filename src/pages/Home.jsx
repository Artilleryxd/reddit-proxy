import React, { useEffect } from 'react'
import DataFetcher from '../components/DataFetcher'
import axios from 'axios'

function Home() {

  useEffect(()=>{
  async function fetchHome(){
    const response = await axios.get("http://localhost:3000/home")
    console.log(response.data)
  }
  fetchHome()
} , [])

  return (
    <div>
        {/* <DataFetcher/> */}
    </div>
  )
}

export default Home

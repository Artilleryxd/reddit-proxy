import React , {useEffect, useState} from 'react'
import axios from 'axios'

export default function DataFetcher() {

  const [subreddits, setSubreddits] = useState([]);
  const [error,setError] = useState(null);
    
    useEffect(()=>{
        async function fetchData(){
          try{
            const response = await axios.get("http://localhost:3000/subscriptions")
            setSubreddits(response.data)
          }catch(e){
            console.log("object")
            setError("Error Fetching Data" + e)
          }
        }
        fetchData();
    }, [])

    console.log(subreddits)

  return (
    <div>
      {error && 
      <div>
        <h1>Error Fetching Data</h1>  
      </div>}
      {subreddits && 
      <div>
        {subreddits.map((subreddit, index)=>{
          return(<h1 key={index}>{subreddit.data.display_name}</h1>)
        })}  
      </div>}
    </div>
  )
}

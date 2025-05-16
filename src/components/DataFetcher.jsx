import React , {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './Card';

export default function DataFetcher() {

  const [subreddits, setSubreddits] = useState([]);
  const [error,setError] = useState(null);
    
    useEffect(()=>{
        async function fetchData(){
          try{
            const response = await axios.get("http://localhost:3000/subscriptions")
            setSubreddits(response.data)
          }catch(e){
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
      <div className='flex justify-center items-center h-screen w-screen flex-wrap p-4'>
        {subreddits.map((subreddit, index)=>{
          return(<Card title={subreddit.data.display_name} description={subreddit.data.public_description} key={index}/>)
        })}  
      </div>}
    </div>
  )
}

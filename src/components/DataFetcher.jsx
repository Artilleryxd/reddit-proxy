import React , {useEffect} from 'react'
import axios from 'axios'

export default function DataFetcher() {

    const accessToken = (import.meta.env.VITE_REDDIT_ACCESS_TOKEN)
    
    useEffect(()=>{

        async function fetchData(){
            try {
            const response = await axios.get("https://oauth.reddit.com/subreddits/mine/subscriber", {
                headers: {
                    Authorization : `Bearer ${accessToken}`,
                    "User-Agent": "Reddit Proxy Client 1.0 by Artilleryxd"
                }
            })
            console.log(response.data)
            } catch (error) {
                console.log("error fetching data" , error)
            }
        }
        fetchData();

    }, [])

  return (
    <div>
      
    </div>
  )
}

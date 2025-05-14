import axios from 'axios'
import React, { useEffect , useState } from 'react'

export default function App() {

  const [children, setChilderen] = useState([])

  useEffect(()=>{
    async function getSubredditData(){
      const response = await (axios.get("https://oauth.reddit.com/r/mkindia/new.json?limit=5"))
      const data = response.data.data.children
      console.log(data)
      setChilderen(data)
    }
    getSubredditData()
  }, [])


  return (
    <div className=''>
      {children.map((post)=>{
        const {id , title , preview , selftext, author , created_utc} = post.data
        const createdAt = new Date(created_utc*1000)
        const formattedTime = createdAt.toLocaleString();
        const imageUrl = preview?.images?.[0]?.source?.url.replace(/&amp;/g, "&");
        

        return(
          <div key={id}>
            <h1>{author}</h1>
            <h2 className='font-bold'>{title}</h2>
            <p className='text-sm'>{author}</p>
            <p className="text-xs">{formattedTime}</p>
            <p>{selftext}</p>
            {imageUrl && <img src={imageUrl} key={id}/>}
          </div>
        )
      })}
    </div>
  )
}

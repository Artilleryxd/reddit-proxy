import { useEffect, useState } from "react";
export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(()=>{
        localStorage.theme === "dark" || (!("theme" in localStorage ) && window.matchMedia('(prefers-color-scheme:dark)').matches)
    });

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.theme = 'dark'
        }
        else{
            document.documentElement.classList.add("light");
            localStorage.theme = 'light'
        }
    } , [darkMode])

  return (
    <div>
        <button onClick={()=>{setDarkMode(prev => !prev)}}>
            {darkMode ? '🌙 Dark' : '☀️ Light'}    
        </button>
    </div>
  )
}

import express from "express";
import axios from "axios";
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const accessToken = process.env.REDDIT_ACCESS_TOKEN


app.get("/subscriptions" , async (req,res)=>{
    axios.get("https://oauth.reddit.com/subreddits/mine/subscriber", {
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
})


app.listen(3000, ()=>{console.log("server is running on 3000")})
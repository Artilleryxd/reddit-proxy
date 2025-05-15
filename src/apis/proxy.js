import express from "express";
import axios from "axios";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())

app.get("/home" , (req,res)=>{
    res.json({
        "msg" : "hello"
    })
})


app.listen(3000, ()=>{console.log("server is running on 3000")})
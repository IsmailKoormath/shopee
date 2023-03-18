import mongoose, { connect, set } from "mongoose";
import express from "express"
import ip from 'ip'
import "dotenv/config"
// const app =express()


class App {
   public port : string | number 
   public app: express.Application

   constructor(){
    this.port = process.env.PORT || 4000
    this.app = express()

    this.mongodbconnection()
   }

   private async mongodbconnection(){
    set('strictQuery',false)
    try {
        await connect('mongodb://127.0.0.1:27017/shopee')
        console.log("mongodb connected");
        
    } catch (error) {
        console.log(error);  
    }
   }

   public listen(){
    this.app.listen(this.port,()=>{
        console.log(`App listening on the port ${ip.address()}:${this.port}`);
        
    })
   }
}

export default App;










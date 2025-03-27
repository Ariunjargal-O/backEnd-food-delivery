import express from "express";
import mongoose from "mongoose";




const users = [{
  name:"buuz",
  price:2000,
  id:1
},
{
  name:"huushur",
  price:2000,
  id:2
}
]

const app: Application = express();
const port = 3000;
app.use(express.json())



app.get("/users", (_req:Request, res:Response) => {
  res.json({users.name});
});

app.geet("/", )

app.listen(port, async () => {
  const connectDb = async() => {
try{
  await mongoose.connect("");
console.log("Database connection sucsess")
}catch(error){
  console.log(error)
}
  }
  return console.log(`Express is listening at http://localhost:${port}`);
});

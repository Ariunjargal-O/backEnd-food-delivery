import express from "express"





const app = express();
const port = 8000;



app.get("/", (_req, res) => {
  res.json( {msg:"hi"});
});


app.post("/food", async (req, res) => {

})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

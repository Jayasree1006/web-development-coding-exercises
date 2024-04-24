const  express =require('express');
const app= express();
app.get('/tacos',(req, res) => {
    res.send("GET /tacos response")})
app.post('/tacos',(req, res) => {
    res.send("POST /tacos response")})
app.post('/tacos',(req, res) => {
    console.log(req.body)
    res.send("ok , here are  your$(qty)tacos")})
app.listen(3000,()=>{
console.log("listening on port 3000")
})
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// POST route for /route-handler
// app.get("/route-handler", (req, res) => {
  // Handling headers, body, query parameters (Example: req.body, req.query, req.headers)
   // Placeholder for machine learning model processing or other functionality

//   res.json({
//     name: "harsh",
//     age: 21
//   });
// });
app.post('/conversations',(req,res)=>{
    const message=req.body.message;
    console.log(message);
    console.log(req.body);
    res.json({
        msg:"hi there! i am harsh adafd"
    });

})
// GET route for root URL
app.get('/', (req, res) => {
  res.send('<b>Hello Worldjakdj !</b>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

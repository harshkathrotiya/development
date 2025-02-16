const express = require('express');
const app = express();

function calculateSum(n) {
    let sum = 0; 
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
app.use(express.json());
app.get('/', (req, res) => {
    const n =(req.query.n);
    if (isNaN(n)) { 
        return res.status(400).send("Invalid input. Please provide a valid number.");
    }
    const ans = calculateSum(n);
    res.send(ans.toString());
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

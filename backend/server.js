const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

function nextPrime(n) {
  let prime = n + 1;
  while (!isPrime(prime)) {
    prime++;
  }
  return prime;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) { 
    if (num % i === 0) return false;
  }
  return num > 1;
}


app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid input, numbers required' });
  }

  const sum = num1 + num2;
  const greaterNum = Math.max(num1, num2);
  const nextPrimeNum = nextPrime(greaterNum);
  const result = sum + nextPrimeNum;

  res.json({ result });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

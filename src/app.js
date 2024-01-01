const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number


//Write POST endpoint to get the differance of two number


//Write POST endpoint to get the multiplication of two number


//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
      res.status(400).json({ status: 'error', message: 'Invalid data types' });
      return;
  }
  const result = num1 + num2;
  if (isOverflow(result) || isUnderflow(result)) {
      res.status(400).json({ status: 'error', message: isOverflow(result) ? 'Overflow' : 'Underflow' });
      return;
  }
  res.json({ result });
});

// POST endpoint for subtraction
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
      res.status(400).json({ status: 'error', message: 'Invalid data types' });
      return;
  }
  const result = num1 - num2;
  if (isOverflow(result) || isUnderflow(result)) {
      res.status(400).json({ status: 'error', message: isOverflow(result) ? 'Overflow' : 'Underflow' });
      return;
  }
  res.json({ result });
});

// POST endpoint for multiplication
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
      res.status(400).json({ status: 'error', message: 'Invalid data types' });
      return;
  }
  const result = num1 * num2;
  if (isOverflow(result) || isUnderflow(result)) {
      res.status(400).json({ status: 'error', message: isOverflow(result) ? 'Overflow' : 'Underflow' });
      return;
  }
  res.json({ result });
});

// POST endpoint for division
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
      res.status(400).json({ status: 'error', message: 'Invalid data types' });
      return;
  }
  if (num2 === 0) {
      res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
      return;
  }
  const result = num1 / num2;
  if (isOverflow(result) || isUnderflow(result)) {
      res.status(400).json({ status: 'error', message: isOverflow(result) ? 'Overflow' : 'Underflow' });
      return;
  }
  res.json({ result });
});

// Helper function to check if a number is within the defined range
const isValidNumber = (num) => {
  return typeof num === 'number' && !isNaN(num);
};

// Helper functions to check overflow and underflow
const isOverflow = (result) => {
  return result > 1000000;
};

const isUnderflow = (result) => {
  return result < -1000000;
};

      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;

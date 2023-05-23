const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

app = express();

// app.use('/', (req, res, next) => {
//   console.log("ready");
//   next();
// });

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post">' +
      '<input type="text" name="productName" placeholder="Enter product name" required><br>' +
      '<input type="text" name="productSize" placeholder="Enter product size" required><br>' +
      '<button type="submit">Add Product</button></form>');
  });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/product', (req, res, next) => {
  console.log(req.body.productName);
  console.log(req.body.productSize);
  res.redirect('/');
  next();
});


app.listen(8000);
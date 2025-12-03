const express = require('express'); 
const app = express();
const mysql = require('mysql');
require('dotenv').config();               
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,         // safer to use environment variables
  password: process.env.DB_PASSWORD
});
conn.connect((err) => {           // can move this into app.get and send
  if (err) throw err;
  console.log(("Connected!"));
});

app.get('/', function(req, res){
//   res.send("Hello world!");
/*const sql = 'SELECT * FROM students';
conn.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  res.send(result);
});*/
const sql1 = 'SELECT * FROM students WHERE lastname = ?';
const lastname = "Mouse"; // or get from form input
conn.query(sql1, [lastname], function (err, result) {
  if (err) throw err;
  console.log(result);
  res.send(result);
});
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/newform', function(req, res){
   res.sendFile(__dirname + "/newform.html");
});
app.get('/forgotform', function(req, res){
   res.sendFile(__dirname + "/forgotform.html");
});
/*app.post('/submit', function(req, res){
  const sql = 'SELECT * FROM students WHERE lastname = ?';
  console.log("Form contents: " + req.body.lastname);
  conn.query(sql, [req.body.lastname], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
              res.send(result);

   }  }  );
});*/
app.post('/insert', function(req, res){
   const sql = "INSERT INTO Users (username, password, email) VALUES (?, ?, ?)";
  conn.query(sql, [req.body.username, req.body.password, req.body.email],  
   function (err, result) {
      if (err) throw err;
      res.send("Insert successful");
     });
});

app.post('/forgot', function(req, res){
   const sql = 'SELECT * FROM Users WHERE email = ?';
   conn.query(sql, [req.body.email], 
    function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});
    


app.listen(8080);
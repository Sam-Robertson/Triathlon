var mysql = require('mysql');

var con = mysql.createConnection({
  host: "162.241.224.35",
  user: "sjvmwrmy_triathl",
  password: "GoCowboys2020!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
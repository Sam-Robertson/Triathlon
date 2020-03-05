var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '162.241.224.35',
    database : 'sjvmwrmy_BatterySelector',
    user     : 'sjvmwrmy_triathl',
    password : 'GoCowboys2020!',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM battery WHERE truck_manufacturer = "Caterpillar"', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();
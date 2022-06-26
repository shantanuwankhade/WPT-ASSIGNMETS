//Second Assignment


const express = require("express");
const app = express();

const mysql = require('mysql2');

let dbparams = {
    host: 'localhost',
    user: 'Shantanu',
    password: 'cdac',
    database: 'India',
    port: '3306'
}

const con = mysql.createConnection(dbparams);

app.use(express.static("sf"));  




app.get("/pinc", (req, resp) => {
    let pinc = req.query.pin;
    console.log("pin obtained is : " + pinc);
    let output = { row: {}, status: false };

    con.query('select city from  data  where pincode=? ', [pinc],
    (err, rows1) => {
        if (err) {
            console.log("error has occured let us see");
        } else {
            if (rows1.length > 0) {

            }
        }
        resp.send(output);
    });
});

app.listen(300, function () {
    console.log("server listening at port 900...");
});
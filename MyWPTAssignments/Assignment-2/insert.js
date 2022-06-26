//Second Assignment



const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'Shantanu',
    password: 'cdac',
    database: 'India',
    port: '3306'
}

const con = mysql.createConnection(dbparams);
let itemno = 3;
let itemname = 'Acer';
let price = 0;
let category = 'Laptop';

con.query('insert into item (itemno, itemname, price, category) values (?, ?, ?, ?)',[itemno, itemname, price, category],
(err, res)=>{
    if(err){ 
	
        console.log(err);
    } 
	else {
		
        console.log('Done');
        console.log(res.affectedRows);
        // console.log(res[0].username);
    }
});
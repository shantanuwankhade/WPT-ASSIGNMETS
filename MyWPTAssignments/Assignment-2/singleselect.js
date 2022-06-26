//Second Assignment


const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'Shantanu',
    password: 'cdac',
    database: 'node_db',
    port: '3306'
}
const con = mysql.createConnection(dbparams);

let itemno = 1;

con.query('select * from item where itemno = ?',[itemno],

(err, res)=>{
    if(err){
		
        console.log(err);
    } else {
        console.log('Done');
		
        // console.log(res.affectedRows);
        for (let i = 0; i < res.length; i++){
			
            console.log(res[i].itemno);
            console.log(res[i].itemname);
            console.log(res[i].price);
            console.log(res[i].category);
        }
        
    }
});
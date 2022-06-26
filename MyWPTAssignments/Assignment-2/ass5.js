//Second Assignment


const express=require("express");
const app = express();

const mysql = require('mysql2');
const url="";
let dbparams = {
    host: 'localhost',
    user: 'Shantanu',
    password: 'cdac',
    database: 'India',
    port: '3306'
}
const con=mysql.createConnection(dbparams);





    app.use(express.static("sf")) ;

    app.get("/account",(req,resp)=>{
        let acno=req.query.acno;
        console.log("acno from box"+acno);
        let output={status :false ,balance:{}}
		
		

        con.query('select balance from  accountdetails  where acnno=?', [acno], 
        (err, rows) => {

            if(err){
                console.log("error has occured : "+err)
            }
            else if(rows.length>0){
                output.status=true
                output.balance=rows[0];
            }

            resp.send(output);

        });
		
		
		

     
      

    });
    app.listen(900, function () {
        console.log("server listening at port 900...");
    });
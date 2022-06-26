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

let resid = 1;


con.query('select * from resources where resid = ?',[resid],
(err, res)=>{
	
    if(err){
        console.log(err);
		
    } else {
        console.log('Done');
		
        
        for (let i = 0; i < res.length; i++){
            console.log(res[i].resid);
            console.log(res[i].resname);
			
            console.log(res[i].resstatus);
        }
        
    }
});


/////
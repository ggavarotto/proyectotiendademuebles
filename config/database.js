const mysql = require('mysql2');

const databaseConnection=mysql.createConnection({
    //host:'localhost',
    //user:'root',
    //database:'tiendaMueble'
    host:'bewua2cyxxv1nlywwfm3-mysql.services.clever-cloud.com',
    user:'uqnjt2japzkdghqv',
    database:'bewua2cyxxv1nlywwfm3',
    password: 'IpDhQEPE6t433Fyb5Wci'
    
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor conectado a MySQL")
    }
});


module.exports= databaseConnection;
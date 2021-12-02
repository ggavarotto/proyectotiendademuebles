const express= require('express');
const app=express();
const routes= require('./routes/tiendaRoutes');
const path= require('path');
const databaseConnection= require('../config/database');
const port= process.env.PORT || 3000;

databaseConnection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

//rutas
//app.use("/tienda",routes);
app.use("",routes);

app.listen(port,()=>{
    console.log("Server corriendo en puerto "+ port)
});
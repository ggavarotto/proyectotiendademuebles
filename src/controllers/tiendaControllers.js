const databaseConnection = require('../../config/database');

const renderHome = (req, res) => {

    /*hablandole a la DB , pidiendo la informacion que guardo*/
    databaseConnection.query('SELECT * FROM categorias', (error, data) => {
        if (error) {
            console.log(error)
        } else {

            /*mande esa informacion al archivo index para mostrarlo en el sitio*/
            /*res.render('../views/pages/index.ejs')*/
            res.render('pages/index', {data} )
        }


    });

}

const getAllProducts = (req, res) => {
    //res.render('pages/productos')

    databaseConnection.query('SELECT * FROM productos', (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.render('pages/productos', {data} )
        }


    });
};

const getForm= (req,res)=>{
    res.render('pages/formulario');
}

const addnewProduct =(req,res)=>{
    const{producto,categoria,descripcion,precio}= req.body;

        databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,precio],(error,data)=>{
            if(error){
                console.log(error)
            }else{
             //   res.send("Recibido!")
             //res.redirect('/tienda/productos')
             res.redirect('/productos')
            }
        });

    

    // console.log(producto);
    //console.log(req.body);
    //res.send("Recibido");

};

//module.exports= renderHome;

module.exports = {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
};
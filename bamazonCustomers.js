var inquirer = require("inquirer");
var mysql = require("mysql");


console.clear();


var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "root",
	database: "bamazon"
});

connection.connect(function (err) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId);
    // afterConnection();
    queryProducts();
    
});

/* function afterConnection() {
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;
		console.log(res);
		connection.end();
	});
}
*/

function queryProducts() 
{
    console.log ("ID | Producto | Cantidad | Precio ");
    connection.query("SELECT * FROM products", function (err, res) 
    {
        // console.log(res.length);
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].quantity + " | " + res[i].price);
		}

        console.log("-----------------------------------");
    //    connection.end();
        
        inquirer.prompt([
            {
                name: "item",
                type: "number",
                message: "Qué producto quieres?"
            },
            {
                name: "cantidad",
                type: "number",
                message: "Qué cantidad?"
            }

            
        ]).then(function (answer) 
        {
        // console.log(answer.cantidad);

        productos(answer.item,answer.cantidad);
    
    
        });


    
});

}

function productos(respuesta,cantidad) {
    connection.query("SELECT * FROM products WHERE id=?", [respuesta], function (err, res2) {
    
        //connection.query("SELECT * FROM products", function (err, res2) {
      cantidad= parseInt(cantidad);
        //console.log("Cantidad: " + cantidad);
            if (res2.length == 1){
            //console.log("Producto si existe " + res2[0].product_name );
            stock=parseInt(res2[0].quantity);
            precio=res2[0].price;
            total=precio*cantidad;
            if (cantidad < stock){
                
nuevostock = stock-cantidad;
                connection.query(
					"UPDATE products SET ? WHERE ?",
					[
						{
							quantity: nuevostock
						},
						{
							id: respuesta
						}
					],
					function (error) {
						if (error) throw err;
                        console.clear();
                        console.log("Listo ! Seleccionaste " + cantidad + "  de "  + res2[0].product_name + " y fueron " + total + " pesos"  );
						queryProducts();
					}
				);


            } else {
                console.clear();
                console.log("No hay cantidad suficiente sólo hay: " + stock )
                
                queryProducts();
            }


                } else {
                    console.clear();
            console.log("Producto No existe")
            queryProducts();
                }
            
    });

};   

    


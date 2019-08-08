var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "9955527578jo",
    database: "bamazon_db",
});

connection.connect(function(err) {
    if (err) throw err;
    displayItems();
  });

  function displayItems() {
      connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (var i=0; i < res.length; i++){
            console.log(res[i].item_id+"|" + res[i].product_name +"|" + res[i].price);
        }
      })
    }
    inquirer
      .prompt([
          {
        name: "product_id",
        type: "input",
        message: "Please enter ID of the product they would like to buy?",
          },
          {
        name: "amount",
        type: "input",
        message: "how many units of the product they would like to buy?",
          }])
          .then(function(answer){
              var query = "SELECT stock_quantity FROM products WHERE?"
              connection.query(query, { item_id : answer.product_id }, function(err, res) {
                if (err) throw err;
                console.log(res);
                var total = parseInt(res[0].stock_quantity) - parseInt(answer.amount);
                console.log(total);
                 if(res.stock_quantity < answer.amount){
                     console.log("not enough inventory!");
                 } else{
                     connection.query("UPDATE products SET ? WHERE ?",
                     [
                       {
                        stock_quantity : total
                       },
                        {
                            item_id : answer.product_id
                        }
                     ]
                     , function(err, data){
                        if (err) throw err;
                        var query = "SELECT price FROM products WHERE?"
                        connection.query(query, {  }),
                       console.log("Your amount total is ")
                     })
                 }

              })
            //   need to get product from database, 
            // check if qty is the same or greather than the user wants to buy
            // if enough stock, subtract from inventory
            // if not enough stock, give message saying not enough
          })

        
      
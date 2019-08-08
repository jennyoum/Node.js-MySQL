CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    department_name VARCHAR(100),
    price DECIMAL,
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
)

INSERT INTO products values (null,"bananas", "groceries", 0.99, 10);
INSERT INTO products values (null, "laptop", "technology", 1999, 5);
INSERT INTO products values (null, "coffee", "groceries", 5.99, 8);
INSERT INTO products values (null, "broom", "household", 29.99, 7);
INSERT INTO products values (null, "water bottle", "household", 1.99, 6);
INSERT INTO products values (null, "lipstick", "beauty", 29.99, 8);
INSERT INTO products values (null, "cream", "beauty", 49.99, 4);
INSERT INTO products values (null, "notebook", "stationary", 1.99, 12);
INSERT INTO products values (null, "pen", "stationary", 1.99, 12);
INSERT INTO products values (null, "charger", "technology", 19.99, 20);


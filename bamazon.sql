DROP DATABASE IF EXISTS dbamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, price, quantity)
VALUES ("Libro Azul", 122.50, 100);

INSERT INTO products (product_name, price, quantity)
VALUES ("Televisor 32", 3542.50, 50);

INSERT INTO products (product_name, price, quantity)
VALUES ("Cafetera", 600.00, 150);

INSERT INTO products (product_name, price, quantity)
VALUES ("Ipad", 1600.00, 3);

INSERT INTO products (product_name, price, quantity)
VALUES ("Smartphone", 1400.00, 10);

INSERT INTO products (product_name, price, quantity)
VALUES ("Camara de Video", 1000.00, 15);

INSERT INTO products (product_name, price, quantity)
VALUES ("Balón de Soccer", 600.00, 150);

INSERT INTO products (product_name, price, quantity)
VALUES ("Raqueta de Tennis", 6000.00, 20);

INSERT INTO products (product_name, price, quantity)
VALUES ("Audifonos Airpods", 3500.00, 4);

INSERT INTO products (product_name, price, quantity)
VALUES ("Laptop", 1900.00, 7);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

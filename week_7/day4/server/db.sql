CREATE DATABASE productlist;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
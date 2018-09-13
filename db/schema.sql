CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(25) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
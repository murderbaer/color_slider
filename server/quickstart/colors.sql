-- Active: 1658506773859@@127.0.0.1@3306@colors
CREATE USER 'colors'@'localhost' IDENTIFIED BY 'colors';

CREATE DATABASE colors;
GRANT ALL PRIVILEGES ON colors.* TO 'colors'@'localhost' WITH GRANT OPTION;


USE colors;

CREATE TABLE
    colors (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        red INTEGER NOT NULL,
        green INTEGER NOT NULL,
        blue INTEGER NOT NULL
    );
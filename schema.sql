CREATE DATABASE employeeListManager_db; 

use employeeListManager_db

CREATE TABLE employees(
 id INTEGER auto_increment NOT NULL,
 fist_name varchar(40) NOT NULL,
 last_name VARCHAR(40) NOT NULL,
 title varchar(50) not null,
 department varchar(50) not null,
 salary integer not null, 
 manager varchar(40) not null, 
 
 primary key (id)
);


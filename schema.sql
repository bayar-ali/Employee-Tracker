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

CREATE TABLE department(
 id INTEGER auto_increment NOT NULL,
 job varchar(60) NOT NULL,
  salary integer not null, 
  
  PRIMARY KEY (id)
); 

INSERT INTO department(job, salary)
values ("Enginner", 12000 ), ("HR", "75000"), ("salesman", 90000), ("bardender", 45000), ("desginer", 80000);





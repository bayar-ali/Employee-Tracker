use employeeListManager_db;

INSERT INTO employees(fist_name, last_name, title, department, salary, manager)
VALUES ("carlos", "victor", "designer", "designing", 67000, "Smith johnson"),("james", "conor", "bartender", "food service", 40000, "john_harry"),
("scott", "nick", "salesperson", "sales", 80000, "smith johnson"), ("james", "john", "bartender", "food service", 40000, "john_harry"), 
("lydia", "conor", "salesperson", "sales", 90000, "john_harry"), ("baily", "johnson", "desginer", "desiginig", 50000, "smith johnson"), 
("don", "micheal", "salesperson", "sales", 90000, "smith johnson"), ("don", "micheal", "salesperson", "sales", 90000, "smith johnson"),
("ron", "luss", "front desk", "HR", 70000, "william scott"), ("charlie", "zing", "organizing", "HR", 90000, "william scott"),
("abby", "ling", "planing and creativeness", "HR", 100000, "william scott"), ("yousef", "zakaria", "Engineer", "HR", 120000, "william scott");

SELECT * FROM employees; 

select title FROM employees
WHERE title is not null 
group by title; 

SELECT fist_name, last_name FROM employees; 

SELECT fist_name, last_name, department FROM employees
ORDER BY department; 

SELECT fist_name, last_name, manager FROM employees
ORDER BY manager; 



delete FROM employees WHERE fist_name = "undefined";

SELECT id, fist_name, last_name FROM employees
WHERE id is not null; 
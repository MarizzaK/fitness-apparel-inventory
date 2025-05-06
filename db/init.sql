CREATE DATABASE IF NOT EXISTS fitness_inventory;

USE fitness_inventory;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  category VARCHAR(50)
);

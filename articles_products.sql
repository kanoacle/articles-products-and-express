-- creating articles table
CREATE TABLE IF NOT EXISTS articles (
id SERIAL PRIMARY KEY,
title VARCHAR(90) DEFAULT NULL,
author VARCHAR(90) DEFAULT 'Anonymous',
content TEXT NOT NULL
);
-- creating products table
CREATE TABLE IF NOT EXISTS products (
id SERIAL PRIMARY KEY,
name VARCHAR(90) NOT NULL,
price INTEGER NOT NULL,
inventory INTEGER NOT NULL DEFAULT '0'
);
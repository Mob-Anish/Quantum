-- Create the database
CREATE DATABASE quantum;

-- Create the table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    photo VARCHAR(255),
    tagline VARCHAR(255),
    tags VARCHAR(255) []
);

-- Insert the data into the table users
INSERT INTO users (name, username, email, tagline, tags)
VAlUES ('Anish Manandhar', 'Shoya', 'shoyo6334@gmail.com', 'Developer', '{"Javascript", "NodeJs", "ReactJs"}');

SELECT * FROM users;
-- Create the database
CREATE DATABASE quantum;

-- Create the table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    tagline VARCHAR(255),
    tags VARCHAR(255) [],
    role INT NOT NULL
);

-- Insert the data into the table users
INSERT INTO users (name, username, email, tagline, tags)
VAlUES ('Anish Manandhar', 'Shoya', 'shoyo6334@gmail.com', 'Developer', '{"Javascript", "NodeJs", "ReactJs"}');

-- Update the column
ALTER TABLE users
ADD COLUMN role INT NOT NULL;

ALTER TABLE users
ALTER COLUMN role
SET DEFAULT 0;

SELECT * FROM users;
-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create mathematics table (ONE TO ONE RELATION)
-- THIS FILE IS NOT GOING TO BE RUN
-- JUST EXAMPLE QUERIES
CREATE TABLE mathematics (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  fun varchar(30) NOT NULL
);

-- Insert some mathematical function (C in CRUD - Create)
INSERT INTO mathematics
  (first_name, type, fun)
VALUES
  ('multiplication', 'algebra', 'just fine'),
  ('matrix','linear geometry','super fun!'),
  ('differential equation','function analysis','hardcore fun'),
  ('integral','function analysis','addictive'),
  ('limits','function analysis','sometimes boring');

-- Read some mathematical fucntion (R in CRUD - Read)
SELECT * FROM  mathematics;
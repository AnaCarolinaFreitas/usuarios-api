CREATE DATABASE usuarios;
\c usuarios

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuario(id) ON DELETE CASCADE,
    image VARCHAR(200) NOT NULL,
    description VARCHAR(250) NOT NULL,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- tag_user VARCHAR(200) NOT NULL REFERENCES usuario(name)
)

INSERT INTO usuario (name, email) VALUES
('Ana Carolina Freitas', 'anacarolinagarciafreitas@gmail.com'),
('Laura Violla', 'laura@gmail.com'),
('Evelyn Oliveira', 'evelyn@gmail.com');


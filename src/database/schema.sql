CREATE DATABASE usuarios;

\c usuarios;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    add_person VARCHAR(255),
    localization VARCHAR(255)
);

INSERT INTO users (name, email, age) VALUES 
('Laura Violla', 'laura.violla@gmail.com', 17),
('Evelyn Oliveira', 'evelyn.oliveira@gmail.com', 17),
('Ana Carolina Freitas', 'anacarolina.freitas@gmail.com', 16);

INSERT INTO posts (user_id, image, description, add_person, localization) VALUES
(1, 'https://i.pinimg.com/474x/0a/2a/7a/0a2a7aa64f0a176709d8187ba787c6dd.jpg', 'tulipas', '@tulips', 'Valinhos-SP'),
(2, 'https://i.pinimg.com/736x/6b/1b/e1/6b1be180067c769e6d55152bcea39add.jpg', 'Favorite author!', '@collenhover', 'Valinhos-SP'),
(3, 'https://i.pinimg.com/736x/01/01/e8/0101e8f2f9932df9a678bcaa1875ca63.jpg', 'STEAM books <3', '@alihazelwood', 'Library');




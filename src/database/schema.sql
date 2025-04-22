CREATE DATABASE usuarios;

\c usuarios;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER NOT NULL,
    image TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    add_person VARCHAR(255),
    localization VARCHAR(255)
);

INSERT INTO users (name, email, age, image) VALUES 
('Laura Violla', 'laura.violla@gmail.com', 17, 'https://avatars.githubusercontent.com/u/158209993?v=4'),
('Evelyn Oliveira', 'evelyn.oliveira@gmail.com', 17, 'https://avatars.githubusercontent.com/u/145203060?v=4'),
('Ana Carolina Freitas', 'anacarolina.freitas@gmail.com', 16, 'https://avatars.githubusercontent.com/u/158210617?v=4');

INSERT INTO posts (user_id, description, add_person, localization) VALUES
(1, 'tulipas', '@tulips', 'Valinhos-SP'),
(2,'Favorite author!', '@collenhover', 'Valinhos-SP'),
(3, 'STEAM books <3', '@alihazelwood', 'Library');




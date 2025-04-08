CREATE DATABASE usuarios;
\c usuarios

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuario(id) ON DELETE CASCADE,
    image TEXT NOT NULL,
    description VARCHAR(250) NOT NULL,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- tag_user VARCHAR(200) NOT NULL REFERENCES usuario(name)
);

INSERT INTO users (name, email) VALUES
('Ana Carolina Freitas', 'anacarolinagarciafreitas@gmail.com'),
('Laura Violla', 'laura@gmail.com'),
('Evelyn Oliveira', 'evelyn@gmail.com');

INSERT INTO posts (usuario_id, image, description) VALUES
(1, 'https://images.squarespace-cdn.com/content/v1/51efa630e4b0d3a23d01fb83/1740572084885-B5PXVYXS3WEVB6GZEYDV/FINAL-SITH-ONESHEET-JAN6UPDATE.jpg?format=1500w', 'AMAZING MOVIE!'),
(2, 'https://i.pinimg.com/474x/0a/2a/7a/0a2a7aa64f0a176709d8187ba787c6dd.jpg', '💐'),
(3, 'https://i.pinimg.com/736x/6b/1b/e1/6b1be180067c769e6d55152bcea39add.jpg', 'Favorite author!'),
(1, 'https://i.pinimg.com/736x/01/01/e8/0101e8f2f9932df9a678bcaa1875ca63.jpg', '🧪🔬🩷'),
(2, 'https://i.pinimg.com/736x/05/a5/c4/05a5c475965c98f740fcfe15954f5335.jpg', 'SHE.ISNT.YOU.');


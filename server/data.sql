INSERT INTO `el_marchi`.`users` (`firstName`, `lastName`, `email`, `password`, `role`, `adress`, `createdAt`, `updatedAt`) VALUES
     ('John', 'Doe', 'john.doe@example.com', 'password123', 'admin', '123 Main St, Springfield', NOW(), NOW()),
     ('Jane', 'Smith', 'jane.smith@example.com', 'password123', 'user', '456 Elm St, Springfield', NOW(), NOW()),
     ('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 'user', '789 Maple Ave, Springfield', NOW(), NOW()),
     ('Bob', 'Brown', 'bob.brown@example.com', 'password123', 'user', '321 Oak St, Springfield', NOW(), NOW());
INSERT INTO `el_marchi`.`products` (`name`, `description`, `price`, `stock`, `categorie`, `userid`, `createdAt`, `updatedAt`) VALUES
    ('4K Ultra HD TV', 'A stunning 4K Ultra HD TV with vibrant colors and crisp details.', 799.99, 50, 'Electronics', 1, NOW(), NOW()),
     ('Wireless Earbuds', 'Compact and comfortable wireless earbuds with noise-canceling features.', 129.99, 100, 'Accessories', 2, NOW(), NOW()),
     ('Gaming Laptop', 'High-performance gaming laptop with the latest graphics card and processor.', 1499.99, 30, 'Computers', 1, NOW(), NOW()),
    ('Smartphone', 'A sleek smartphone with an advanced camera system and fast performance.', 699.99, 75, 'Mobile Phones', 2, NOW(), NOW()),
    ('Bluetooth Speaker', 'Portable Bluetooth speaker with high-quality sound and long battery life.', 89.99, 150, 'Audio', 3, NOW(), NOW()),
     ('Smartwatch', 'A stylish smartwatch with health tracking and notification features.', 199.99, 60, 'Wearables', 3, NOW(), NOW()),
     ('Electric Toothbrush', 'Electric toothbrush with multiple brushing modes and a built-in timer.', 49.99, 200, 'Health & Personal Care', 4, NOW(), NOW()),
     ('Digital Camera', 'High-resolution digital camera with interchangeable lenses and advanced features.', 499.99, 40, 'Photography', 4, NOW(), NOW());
INSERT INTO `el_marchi`.`images` (`imageurl`, `productid`, `createdAt`, `updatedAt`) VALUES
    ('https://i.pinimg.com/236x/bf/46/83/bf4683927abe7fcff5943d36eadc38b1.jpg', 1, NOW(), NOW()),
     ('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 2, NOW(), NOW()),
     ('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 3, NOW(), NOW()),
     ('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 4, NOW(), NOW()),
     ('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 5, NOW(), NOW()),
    ('https://i.pinimg.com/236x/54/5a/6c/545a6c8826535dca2d81c84d0d47d07c.jpg', 6, NOW(), NOW()),
     ('https://i.pinimg.com/236x/2f/0d/05/2f0d050a3b4aa2c8fbadd453423c3da9.jpg', 7, NOW(), NOW()),
    ('https://i.pinimg.com/236x/91/15/5f/91155fd0eacabb90941b03893966ba09.jpg', 8, NOW(), NOW());

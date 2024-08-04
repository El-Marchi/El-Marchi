-- Insert dummy data into `users` table
INSERT INTO `el_marchi`.`users` (`firstName`, `lastName`, `email`, `password`, `role`, `adress`, `createdAt`, `updatedAt`, `status`) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', 'admin', '123 Main St, Springfield', NOW(), NOW(), 'active'),
('Jane', 'Smith', 'jane.smith@example.com', 'password123', 'buyer', '456 Elm St, Springfield', NOW(), NOW(), 'inactive'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 'buyer', '789 Maple Ave, Springfield', NOW(), NOW(), 'active'),
('Bob', 'Brown', 'bob.brown@example.com', 'password123', 'buyer', '321 Oak St, Springfield', NOW(), NOW(), 'inactive'),
('Emma', 'Wilson', 'emma.wilson@example.com', 'password123', 'buyer', '654 Pine Rd, Springfield', NOW(), NOW(), 'active'),
('Michael', 'Taylor', 'michael.taylor@example.com', 'password123', 'buyer', '987 Cedar Ln, Springfield', NOW(), NOW(), 'inactive'),
('Olivia', 'Anderson', 'olivia.anderson@example.com', 'password123', 'buyer', '147 Birch Dr, Springfield', NOW(), NOW(), 'active'),
('William', 'Thomas', 'william.thomas@example.com', 'password123', 'buyer', '258 Walnut Ave, Springfield', NOW(), NOW(), 'inactive'),
('Sophia', 'Jackson', 'sophia.jackson@example.com', 'password123', 'buyer', '369 Cherry St, Springfield', NOW(), NOW(), 'active'),
('James', 'White', 'james.white@example.com', 'password123', 'buyer', '741 Ash Rd, Springfield', NOW(), NOW(), 'inactive'),
('Emily', 'Harris', 'emily.harris@example.com', 'password123', 'buyer', '852 Spruce Ln, Springfield', NOW(), NOW(), 'active'),
('Daniel', 'Martin', 'daniel.martin@example.com', 'password123', 'buyer', '963 Fir Ave, Springfield', NOW(), NOW(), 'inactive'),
('Ava', 'Thompson', 'ava.thompson@example.com', 'password123', 'buyer', '159 Sycamore St, Springfield', NOW(), NOW(), 'active'),
('David', 'Garcia', 'david.garcia@example.com', 'password123', 'buyer', '753 Poplar Rd, Springfield', NOW(), NOW(), 'inactive'),
('Sofia', 'Martinez', 'sofia.martinez@example.com', 'password123', 'buyer', '951 Willow Dr, Springfield', NOW(), NOW(), 'active');

-- Insert dummy data into `products` table
INSERT INTO `el_marchi`.`users` (`firstName`, `lastName`, `email`, `password`, `role`, `adress`, `createdAt`, `updatedAt`) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', 'admin', '123 Main St, Springfield', NOW(), NOW()),
('Jane', 'Smith', 'jane.smith@example.com', 'password123', 'user', '456 Elm St, Springfield', NOW(), NOW()),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 'user', '789 Maple Ave, Springfield', NOW(), NOW()),
('Bob', 'Brown', 'bob.brown@example.com', 'password123', 'user', '321 Oak St, Springfield', NOW(), NOW()),
('Emma', 'Wilson', 'emma.wilson@example.com', 'password123', 'user', '654 Pine Rd, Springfield', NOW(), NOW()),
('Michael', 'Taylor', 'michael.taylor@example.com', 'password123', 'user', '987 Cedar Ln, Springfield', NOW(), NOW()),
('Olivia', 'Anderson', 'olivia.anderson@example.com', 'password123', 'user', '147 Birch Dr, Springfield', NOW(), NOW()),
('William', 'Thomas', 'william.thomas@example.com', 'password123', 'user', '258 Walnut Ave, Springfield', NOW(), NOW()),
('Sophia', 'Jackson', 'sophia.jackson@example.com', 'password123', 'user', '369 Cherry St, Springfield', NOW(), NOW()),
('James', 'White', 'james.white@example.com', 'password123', 'user', '741 Ash Rd, Springfield', NOW(), NOW()),
('Emily', 'Harris', 'emily.harris@example.com', 'password123', 'user', '852 Spruce Ln, Springfield', NOW(), NOW()),
('Daniel', 'Martin', 'daniel.martin@example.com', 'password123', 'user', '963 Fir Ave, Springfield', NOW(), NOW()),
('Ava', 'Thompson', 'ava.thompson@example.com', 'password123', 'user', '159 Sycamore St, Springfield', NOW(), NOW()),
('David', 'Garcia', 'david.garcia@example.com', 'password123', 'user', '753 Poplar Rd, Springfield', NOW(), NOW()),
('Sofia', 'Martinez', 'sofia.martinez@example.com', 'password123', 'user', '951 Willow Dr, Springfield', NOW(), NOW());

-- Insert dummy data into `products` table
INSERT INTO `el_marchi`.`products` (`name`, `description`, `price`, `stock`, `categorie`, `userid`, `createdAt`, `updatedAt`) VALUES
('4K Ultra HD TV', 'A stunning 4K Ultra HD TV with vibrant colors and crisp details.', 799.99, 50, 'Electronics', 1, NOW(), NOW()),
('Wireless Earbuds', 'Compact and comfortable wireless earbuds with noise-canceling features.', 129.99, 100, 'Accessories', 2, NOW(), NOW()),
('Gaming Laptop', 'High-performance gaming laptop with the latest graphics card and processor.', 1499.99, 30, 'Computers', 1, NOW(), NOW()),
('Smartphone', 'A sleek smartphone with an advanced camera system and fast performance.', 699.99, 75, 'Mobile Phones', 2, NOW(), NOW()),
('Bluetooth Speaker', 'Portable Bluetooth speaker with high-quality sound and long battery life.', 89.99, 150, 'Audio', 3, NOW(), NOW()),
('Smartwatch', 'A stylish smartwatch with health tracking and notification features.', 199.99, 60, 'Wearables', 3, NOW(), NOW()),
('Electric Toothbrush', 'Electric toothbrush with multiple brushing modes and a built-in timer.', 49.99, 200, 'Health & Personal Care', 4, NOW(), NOW()),
('Digital Camera', 'High-resolution digital camera with interchangeable lenses and advanced features.', 499.99, 40, 'Photography', 4, NOW(), NOW()),
('Coffee Maker', 'Programmable coffee maker with multiple brew strengths and thermal carafe.', 79.99, 80, 'Kitchen Appliances', 5, NOW(), NOW()),
('Fitness Tracker', 'Waterproof fitness tracker with heart rate monitoring and sleep tracking.', 59.99, 120, 'Wearables', 6, NOW(), NOW()),
('Robot Vacuum', 'Smart robot vacuum with mapping technology and app control.', 299.99, 45, 'Home Appliances', 7, NOW(), NOW()),
('Wireless Mouse', 'Ergonomic wireless mouse with customizable buttons and long battery life.', 39.99, 200, 'Computer Accessories', 8, NOW(), NOW()),
('Air Purifier', 'HEPA air purifier for large rooms with air quality sensor.', 179.99, 60, 'Home Appliances', 9, NOW(), NOW()),
('External SSD', 'Fast and portable external SSD with 1TB storage capacity.', 149.99, 100, 'Computer Accessories', 10, NOW(), NOW()),
('Smart Thermostat', 'Wi-Fi enabled smart thermostat with energy-saving features.', 129.99, 75, 'Smart Home', 11, NOW(), NOW()),
('Wireless Keyboard', 'Slim wireless keyboard with backlit keys and multi-device support.', 69.99, 150, 'Computer Accessories', 12, NOW(), NOW()),
('Blender', 'High-powered blender for smoothies, soups, and more.', 89.99, 90, 'Kitchen Appliances', 13, NOW(), NOW()),
('Portable Charger', '20000mAh portable charger with fast charging capabilities.', 49.99, 200, 'Mobile Accessories', 14, NOW(), NOW()),
('Smart Light Bulbs', 'Color-changing smart light bulbs compatible with voice assistants.', 34.99, 300, 'Smart Home', 15, NOW(), NOW()),
('Noise-Canceling Headphones', 'Over-ear noise-canceling headphones with premium sound quality.', 249.99, 50, 'Audio', 1, NOW(), NOW());

-- Insert dummy data into `images` table
INSERT INTO `el_marchi`.`images` (`imageurl`, `productid`, `createdAt`, `updatedAt`) VALUES
('https://i.pinimg.com/236x/bf/46/83/bf4683927abe7fcff5943d36eadc38b1.jpg', 1, NOW(), NOW()),
('https://picsum.photos/200/300?random=1', 1, NOW(), NOW()),
('https://picsum.photos/200/300?random=2', 1, NOW(), NOW()),
('https://picsum.photos/200/300?random=3', 1, NOW(), NOW()),
('https://picsum.photos/200/300?random=4', 1, NOW(), NOW()),

('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 2, NOW(), NOW()),
('https://picsum.photos/200/300?random=5', 2, NOW(), NOW()),
('https://picsum.photos/200/300?random=6', 2, NOW(), NOW()),
('https://picsum.photos/200/300?random=7', 2, NOW(), NOW()),
('https://picsum.photos/200/300?random=8', 2, NOW(), NOW()),

('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 3, NOW(), NOW()),
('https://picsum.photos/200/300?random=9', 3, NOW(), NOW()),
('https://picsum.photos/200/300?random=10', 3, NOW(), NOW()),
('https://picsum.photos/200/300?random=11', 3, NOW(), NOW()),
('https://picsum.photos/200/300?random=12', 3, NOW(), NOW()),

('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 4, NOW(), NOW()),
('https://picsum.photos/200/300?random=13', 4, NOW(), NOW()),
('https://picsum.photos/200/300?random=14', 4, NOW(), NOW()),
('https://picsum.photos/200/300?random=15', 4, NOW(), NOW()),
('https://picsum.photos/200/300?random=16', 4, NOW(), NOW()),

('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 5, NOW(), NOW()),
('https://picsum.photos/200/300?random=17', 5, NOW(), NOW()),
('https://picsum.photos/200/300?random=18', 5, NOW(), NOW()),
('https://picsum.photos/200/300?random=19', 5, NOW(), NOW()),
('https://picsum.photos/200/300?random=20', 5, NOW(), NOW()),

('https://i.pinimg.com/236x/bf/46/83/bf4683927abe7fcff5943d36eadc38b1.jpg', 6, NOW(), NOW()),
('https://picsum.photos/200/300?random=21', 6, NOW(), NOW()),
('https://picsum.photos/200/300?random=22', 6, NOW(), NOW()),
('https://picsum.photos/200/300?random=23', 6, NOW(), NOW()),
('https://picsum.photos/200/300?random=24', 6, NOW(), NOW()),

('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 7, NOW(), NOW()),
('https://picsum.photos/200/300?random=25', 7, NOW(), NOW()),
('https://picsum.photos/200/300?random=26', 7, NOW(), NOW()),
('https://picsum.photos/200/300?random=27', 7, NOW(), NOW()),
('https://picsum.photos/200/300?random=28', 7, NOW(), NOW()),

('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 8, NOW(), NOW()),
('https://picsum.photos/200/300?random=29', 8, NOW(), NOW()),
('https://picsum.photos/200/300?random=30', 8, NOW(), NOW()),
('https://picsum.photos/200/300?random=31', 8, NOW(), NOW()),
('https://picsum.photos/200/300?random=32', 8, NOW(), NOW()),

('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 9, NOW(), NOW()),
('https://picsum.photos/200/300?random=33', 9, NOW(), NOW()),
('https://picsum.photos/200/300?random=34', 9, NOW(), NOW()),
('https://picsum.photos/200/300?random=35', 9, NOW(), NOW()),
('https://picsum.photos/200/300?random=36', 9, NOW(), NOW()),

('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 10, NOW(), NOW()),
('https://picsum.photos/200/300?random=37', 10, NOW(), NOW()),
('https://picsum.photos/200/300?random=38', 10, NOW(), NOW()),
('https://picsum.photos/200/300?random=39', 10, NOW(), NOW()),
('https://picsum.photos/200/300?random=40', 10, NOW(), NOW()),

('https://i.pinimg.com/236x/bf/46/83/bf4683927abe7fcff5943d36eadc38b1.jpg', 11, NOW(), NOW()),
('https://picsum.photos/200/300?random=41', 11, NOW(), NOW()),
('https://picsum.photos/200/300?random=42', 11, NOW(), NOW()),
('https://picsum.photos/200/300?random=43', 11, NOW(), NOW()),
('https://picsum.photos/200/300?random=44', 11, NOW(), NOW()),

('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 12, NOW(), NOW()),
('https://picsum.photos/200/300?random=45', 12, NOW(), NOW()),
('https://picsum.photos/200/300?random=46', 12, NOW(), NOW()),
('https://picsum.photos/200/300?random=47', 12, NOW(), NOW()),
('https://picsum.photos/200/300?random=48', 12, NOW(), NOW()),

('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 13, NOW(), NOW()),
('https://picsum.photos/200/300?random=49', 13, NOW(), NOW()),
('https://picsum.photos/200/300?random=50', 13, NOW(), NOW()),
('https://picsum.photos/200/300?random=51', 13, NOW(), NOW()),
('https://picsum.photos/200/300?random=52', 13, NOW(), NOW()),

('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 14, NOW(), NOW()),
('https://picsum.photos/200/300?random=53', 14, NOW(), NOW()),
('https://picsum.photos/200/300?random=54', 14, NOW(), NOW()),
('https://picsum.photos/200/300?random=55', 14, NOW(), NOW()),
('https://picsum.photos/200/300?random=56', 14, NOW(), NOW()),

('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 15, NOW(), NOW()),
('https://picsum.photos/200/300?random=57', 15, NOW(), NOW()),
('https://picsum.photos/200/300?random=58', 15, NOW(), NOW()),
('https://picsum.photos/200/300?random=59', 15, NOW(), NOW()),
('https://picsum.photos/200/300?random=60', 15, NOW(), NOW()),

('https://i.pinimg.com/236x/bf/46/83/bf4683927abe7fcff5943d36eadc38b1.jpg', 16, NOW(), NOW()),
('https://picsum.photos/200/300?random=61', 16, NOW(), NOW()),
('https://picsum.photos/200/300?random=62', 16, NOW(), NOW()),
('https://picsum.photos/200/300?random=63', 16, NOW(), NOW()),
('https://picsum.photos/200/300?random=64', 16, NOW(), NOW()),

('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 17, NOW(), NOW()),
('https://picsum.photos/200/300?random=65', 17, NOW(), NOW()),
('https://picsum.photos/200/300?random=66', 17, NOW(), NOW()),
('https://picsum.photos/200/300?random=67', 17, NOW(), NOW()),
('https://picsum.photos/200/300?random=68', 17, NOW(), NOW()),

('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 18, NOW(), NOW()),
('https://picsum.photos/200/300?random=69', 18, NOW(), NOW()),
('https://picsum.photos/200/300?random=70', 18, NOW(), NOW()),
('https://picsum.photos/200/300?random=71', 18, NOW(), NOW()),
('https://picsum.photos/200/300?random=72', 18, NOW(), NOW()),

('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 19, NOW(), NOW()),
('https://picsum.photos/200/300?random=73', 19, NOW(), NOW()),
('https://picsum.photos/200/300?random=74', 19, NOW(), NOW()),
('https://picsum.photos/200/300?random=75', 19, NOW(), NOW()),
('https://picsum.photos/200/300?random=76', 19, NOW(), NOW()),

('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 20, NOW(), NOW()),
('https://picsum.photos/200/300?random=77', 20, NOW(), NOW()),
('https://picsum.photos/200/300?random=78', 20, NOW(), NOW()),
('https://picsum.photos/200/300?random=79', 20, NOW(), NOW()),
('https://picsum.photos/200/300?random=80', 20, NOW(), NOW());

-- Insert dummy data into `carts` table
INSERT INTO `el_marchi`.`carts` (`productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(1, 1, NOW(), NOW()), (2, 2, NOW(), NOW()), (3, 3, NOW(), NOW()),
(4, 4, NOW(), NOW()), (5, 5, NOW(), NOW()), (6, 6, NOW(), NOW()),
(7, 7, NOW(), NOW()), (8, 8, NOW(), NOW()), (9, 9, NOW(), NOW()),
(10, 10, NOW(), NOW()), (11, 11, NOW(), NOW()), (12, 12, NOW(), NOW()),
(13, 13, NOW(), NOW()), (14, 14, NOW(), NOW()), (15, 15, NOW(), NOW()),
(16, 1, NOW(), NOW()), (17, 2, NOW(), NOW()), (18, 3, NOW(), NOW()),
(19, 4, NOW(), NOW()), (20, 5, NOW(), NOW());

-- Insert dummy data into `ratings` table
INSERT INTO `el_marchi`.`ratings` (`rating`, `productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(5, 1, 1, NOW(), NOW()), (4, 2, 2, NOW(), NOW()), (3, 3, 3, NOW(), NOW()),
(5, 4, 4, NOW(), NOW()), (4, 5, 5, NOW(), NOW()), (5, 6, 6, NOW(), NOW()),
(3, 7, 7, NOW(), NOW()), (4, 8, 8, NOW(), NOW()), (5, 9, 9, NOW(), NOW()),
(4, 10, 10, NOW(), NOW()), (3, 11, 11, NOW(), NOW()), (5, 12, 12, NOW(), NOW()),
(4, 13, 13, NOW(), NOW()), (5, 14, 14, NOW(), NOW()), (3, 15, 15, NOW(), NOW()),
(4, 16, 1, NOW(), NOW()), (5, 17, 2, NOW(), NOW()), (3, 18, 3, NOW(), NOW()),
(4, 19, 4, NOW(), NOW()), (5, 20, 5, NOW(), NOW());

-- Insert dummy data into `wishlists` table
INSERT INTO `el_marchi`.`wishlists` (`productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(1, 1, NOW(), NOW()), (2, 2, NOW(), NOW()), (3, 3, NOW(), NOW()),
(4, 4, NOW(), NOW()), (5, 5, NOW(), NOW()), (6, 6, NOW(), NOW()),
(7, 7, NOW(), NOW()), (8, 8, NOW(), NOW()), (9, 9, NOW(), NOW()),
(10, 10, NOW(), NOW()), (11, 11, NOW(), NOW()), (12, 12, NOW(), NOW()),
(13, 13, NOW(), NOW()), (14, 14, NOW(), NOW()), (15, 15, NOW(), NOW()),
(16, 1, NOW(), NOW()), (17, 2, NOW(), NOW()), (18, 3, NOW(), NOW()),
(19, 4, NOW(), NOW()), (20, 5, NOW(), NOW());
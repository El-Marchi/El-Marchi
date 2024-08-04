-- Insert dummy data into `users` table
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
('https://i.pinimg.com/474x/f8/e5/7d/f8e57da0d7212bcd9964e9f9d6c176f1.jpg', 2, NOW(), NOW()),
('https://i.pinimg.com/236x/b4/42/1d/b4421d62f0c1c2bf77cfee32e4ea2d76.jpg', 3, NOW(), NOW()),
('https://i.pinimg.com/474x/8a/ca/b5/8acab5f315461ddb9e0393dae2865cca.jpg', 4, NOW(), NOW()),
('https://i.pinimg.com/236x/4b/2d/03/4b2d03491b9441132ce4139c773643e0.jpg', 5, NOW(), NOW()),
('https://i.pinimg.com/236x/54/5a/6c/545a6c8826535dca2d81c84d0d47d07c.jpg', 6, NOW(), NOW()),
('https://i.pinimg.com/236x/2f/0d/05/2f0d050a3b4aa2c8fbadd453423c3da9.jpg', 7, NOW(), NOW()),
('https://i.pinimg.com/236x/91/15/5f/91155fd0eacabb90941b03893966ba09.jpg', 8, NOW(), NOW()),
('https://img.freepik.com/premium-photo/sleek-modern-coffee-maker-brewing-rich-aro-00346-00_883586-67272.jpg', 9, NOW(), NOW()),
('https://img.freepik.com/premium-photo/fitness-tracker-displaying-realtime-data-hear-00113-02_1148322-8282.jpg', 10, NOW(), NOW()),
('https://www.robolodge.com/wp-content/uploads/2024/05/robot-vacum-cleaner1.jpg', 11, NOW(), NOW()),
('https://cdn-img.oraimo.com/fit-in/600x600/NG/album/of-m11n/of-m11n-1.jpg', 12, NOW(), NOW()),
('https://img.freepik.com/premium-photo/smart-things-modern-concept-design-high-technology-air-purifier-living-quarters_933786-3953.jpg', 13, NOW(), NOW()),
('https://m.media-amazon.com/images/I/81NOW0sfx2L._CR2,0,1276,720_SR684,386_.jpg', 14, NOW(), NOW()),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnS30NdlCy1u3jwFxixKxmUqoOhAXxrERncg&s.jpg', 15, NOW(), NOW()),
('https://miro.medium.com/v2/resize:fit:1400/0*t0RzsqO4F_X2zq06.jpg', 16, NOW(), NOW()),
('https://png.pngtree.com/background/20231101/original/pngtree-electric-blender-innovation-a-modern-kitchen-appliance-on-a-blue-background-picture-image_5832879.jpg', 17, NOW(), NOW()),
('https://c1.neweggimages.com/productimage/nb640/A4RES2305050825TX38.jpg', 18, NOW(), NOW()),
('https://www.rollingstone.com/wp-content/uploads/2021/04/Philips-Hue.jpg', 19, NOW(), NOW()),
('https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0876.jpg', 20, NOW(), NOW());

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
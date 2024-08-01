-- Insert dummy data into `users` table
INSERT INTO `el_marchi`.`users` (`firstName`, `lastName`, `email`, `password`, `role`, `adress`, `createdAt`, `updatedAt`) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', 'admin', '123 Main St', NOW(), NOW()),
('Jane', 'Smith', 'jane.smith@example.com', 'password123', 'user', '456 Elm St', NOW(), NOW());

-- Insert dummy data into `products` table
INSERT INTO `el_marchi`.`products` (`name`, `description`, `price`, `stock`, `categorie`, `userid`, `createdAt`, `updatedAt`) VALUES
('Product 1', 'Description for product 1', 10.000, 100, 'Category 1', 1, NOW(), NOW()),
('Product 2', 'Description for product 2', 20.000, 200, 'Category 2', 2, NOW(), NOW());

-- Insert dummy data into `carts` table
INSERT INTO `el_marchi`.`carts` (`productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(1, 1, NOW(), NOW()),
(2, 2, NOW(), NOW());

-- Insert dummy data into `images` table
INSERT INTO `el_marchi`.`images` (`imageurl`, `productid`, `createdAt`, `updatedAt`) VALUES
('http://example.com/image1.jpg', 1, NOW(), NOW()),
('http://example.com/image2.jpg', 2, NOW(), NOW());

-- Insert dummy data into `ratings` table
INSERT INTO `el_marchi`.`ratings` (`rating`, `productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(5, 1, 1, NOW(), NOW()),
(4, 2, 2, NOW(), NOW());

-- Insert dummy data into `wishlists` table
INSERT INTO `el_marchi`.`wishlists` (`productid`, `userid`, `createdAt`, `updatedAt`) VALUES
(1, 1, NOW(), NOW()),
(2, 2, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(2, 1, NOW(), NOW());
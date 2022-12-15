CREATE TABLE `managenodejs`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(10) NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;


INSERT INTO `managenodejs`.`user` (`id`, `first_name`, `last_name`, `email`, `phone`, `comments`, `status`) VALUES (NULL, 'Daniel', 'Aguilera', 'dan.aguilera97@gmail.com', '1234567890', 'Hey this is a test', 'active');

INSERT INTO `managenodejs`.`user` 
(`id`, `first_name`,  `last_name`,    `email`,                 `phone`,         `comments`, `status`) VALUES
(NULL, 'John',      'Doe',        'JohnDoe@email.com',        '012345678910', '',          'active'),
(NULL, 'Julius',   'Caeser',  'Jules@email.com',  '012345678910', '',          'active'),
(NULL, 'David',      'Smith', 'davidsmith@email.com', '012345678910', '',          'active'),
(NULL, 'Chris',      'Garcia',        'chrisgarcia@email.com',        '012345678910', '',          'active');

/* REMINDER: The database is called managenodejs.user and to access it, input the following syntax "select *from managenodejs.user" */

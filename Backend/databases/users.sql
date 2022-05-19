CREATE TABLE IF NOT EXISTS `users` (
  `username` VARCHAR(255) NOT NULL,
  `id` bigint(20) AUTO_INCREMENT,
  `token` text NOT NULL,
  `password` text NOT NULL,
  `created` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
)

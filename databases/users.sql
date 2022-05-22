CREATE TABLE IF NOT EXISTS `users` (
  `username` text NOT NULL,
  `id` bigint(20) AUTO_INCREMENT,
  `token` text NOT NULL,
  `password` text NOT NULL,
  `created` bigint(20) NOT NULL,
  UNIQUE KEY `username` (`username`),
  PRIMARY KEY (`id`)
)
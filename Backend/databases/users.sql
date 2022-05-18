CREATE TABLE IF NOT EXISTS `users` (
  `username` text NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `token` text NOT NULL,
  PRIMARY KEY (`id`)
)
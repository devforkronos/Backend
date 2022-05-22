CREATE TABLE IF NOT EXISTS `apis` (
  `key` varchar(255) NOT NULL,
  `owner` text NOT NULL,
  `created` bigint(20) NOT NULL,
  `id` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
)
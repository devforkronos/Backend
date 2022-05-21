CREATE TABLE IF NOT EXISTS `keys` (
  `key` text NOT NULL,
  `created` bigint(20) NOT NULL,
  `script` text NOT NULL,
  `id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `scripts` (
  `id` varchar(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `owner` TEXT NOT NULL,
  `private` tinyint(1) NOT NULL,
  `obfuscate` tinyint(1) NOT NULL,
  `name` TEXT DEFAULT NULL,
  `description` TEXT NULL,
  `uses` int(11) NOT NULL DEFAULT 0,
  `obfuscated_content` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`)
)
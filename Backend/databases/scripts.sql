CREATE TABLE IF NOT EXISTS `scripts` (
  `id` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `owner` text NOT NULL,
  `private` tinyint(1) NOT NULL,
  `obfuscate` tinyint(1) NOT NULL,
  `name` text DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `obfuscated_content` longtext NOT NULL DEFAULT 'content',
  PRIMARY KEY (`id`)
)
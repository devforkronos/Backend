CREATE TABLE `scripts` (
  `id` varchar(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `owner` text NOT NULL,
  `private` tinyint(1) NOT NULL,
  `obfuscate` tinyint(1) NOT NULL,
  `name` text DEFAULT NULL,
  `obfuscated_content` LONGTEXT NOT NULL DEFAULT 'content',
  `uses` int(11) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL
  PRIMARY KEY (`id`)
)
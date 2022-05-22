CREATE TABLE `webhooks` (
  `id` varchar(255) NOT NULL,
  `url` varchar(125) NOT NULL,
  `owner` text NOT NULL,
  `description` text NOT NULL,
  `log_uses` tinyint(4) NOT NULL DEFAULT 0,
  `created` bigint(20) NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
)
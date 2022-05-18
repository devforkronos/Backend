CREATE TABLE IF NOT EXISTS `apis` (
  `key` varchar(255) NOT NULL,
  `owner` text NOT NULL,
  `created` bigint(20) NOT NULL,
  `id` varchar(255) NOT NULL,
  `description` text NOT NULL DEFAULT 'This API has no description.',
  `name` text NOT NULL
)
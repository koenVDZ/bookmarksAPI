DROP TABLE IF EXISTS `gm_bookmarks`;








CREATE TABLE `gm_bookmarks` ( `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT , 
 `category` VARCHAR(32) NOT NULL , 
 `generalIcon` VARCHAR(32) NOT NULL , 
 `generalURL` VARCHAR(255) NOT NULL , 
 `bookmarkState` TINYINT NULL DEFAULT NULL , 
 `bookmark` VARCHAR(64) NOT NULL , 
 `bookmarkURL` VARCHAR(255) NOT NULL , 
 `author` VARCHAR(32) NOT NULL ,
 `bookmarkColor` VARCHAR(32) NOT NULL ,
 `bookmarkPicture` VARCHAR(128) , 
 `bookmarkServer` TINYINT NULL DEFAULT NULL , 
 `serverData` JSON , 
 `extraData` JSON , 
 `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 `updated_at` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 PRIMARY KEY (`id`), 
 INDEX `idx_author`(`author`) USING BTREE,
 INDEX `idx_bookmark`(`bookmark`) USING BTREE
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

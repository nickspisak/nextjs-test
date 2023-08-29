-- CreateTable
CREATE TABLE `chapters` (
    `number` INTEGER NOT NULL,
    `title` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pages` (
    `id` INTEGER NOT NULL,
    `page` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stories` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `description` VARCHAR(555) NOT NULL,
    `genres` VARCHAR(45) NOT NULL,
    `cover` VARCHAR(45) NULL,

    UNIQUE INDEX `title_UNIQUE`(`title`),
    UNIQUE INDEX `desc_UNIQUE`(`description`),
    UNIQUE INDEX `cover_UNIQUE`(`cover`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

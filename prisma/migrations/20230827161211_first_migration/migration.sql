-- AlterTable
ALTER TABLE `chapters` ADD COLUMN `first` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `last` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `summary` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `stories` ADD COLUMN `mature` BOOLEAN NOT NULL DEFAULT false;

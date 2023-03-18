/*
  Warnings:

  - The primary key for the `chapters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `number` on the `chapters` table. All the data in the column will be lost.
  - The primary key for the `pages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `pages` table. All the data in the column will be lost.
  - You are about to drop the column `page` on the `pages` table. All the data in the column will be lost.
  - Added the required column `chapter_id` to the `chapters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `page_id` to the `pages` table without a default value. This is not possible if the table is not empty.
  - Made the column `cover` on table `stories` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `chapters` DROP PRIMARY KEY,
    DROP COLUMN `number`,
    ADD COLUMN `chapter_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `chapter_number` INTEGER NULL,
    ADD COLUMN `id` INTEGER NULL,
    MODIFY `title` VARCHAR(45) NULL,
    ADD PRIMARY KEY (`chapter_id`);

-- AlterTable
ALTER TABLE `pages` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `page`,
    ADD COLUMN `chapter_id` INTEGER NULL,
    ADD COLUMN `page_id` INTEGER NOT NULL,
    ADD COLUMN `page_number` INTEGER NULL,
    ADD COLUMN `page_url` VARCHAR(455) NULL,
    ADD PRIMARY KEY (`page_id`);

-- AlterTable
ALTER TABLE `stories` ADD COLUMN `url` VARCHAR(45) NULL,
    MODIFY `cover` VARCHAR(45) NOT NULL;

-- CreateIndex
CREATE INDEX `id` ON `chapters`(`id`);

-- CreateIndex
CREATE INDEX `chapter_id` ON `pages`(`chapter_id`);

-- AddForeignKey
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_ibfk_1` FOREIGN KEY (`id`) REFERENCES `stories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`chapter_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

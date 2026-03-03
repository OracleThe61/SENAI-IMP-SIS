-- CreateTable
CREATE TABLE `Prancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `volume` DECIMAL(10, 2) NOT NULL,
    `quantidadeEstoque` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data_cadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

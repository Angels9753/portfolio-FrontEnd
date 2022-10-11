-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PorfolioDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PorfolioDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PorfolioDB` DEFAULT CHARACTER SET utf8 ;
USE `PorfolioDB` ;

-- -----------------------------------------------------
-- Table `PorfolioDB`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`usuario` (
  `usr_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `subtitulo` VARCHAR(50) NOT NULL,
  `urlfoto` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(700) NULL,
  PRIMARY KEY (`usr_id`),
  UNIQUE INDEX `usr_id_UNIQUE` (`usr_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`skill_tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`skill_tipo` (
  `tipo_id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`tipo_id`),
  UNIQUE INDEX `tipo_id_UNIQUE` (`tipo_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`skill` (
  `skill_id` INT NOT NULL AUTO_INCREMENT,
  `habilidad` VARCHAR(20) NOT NULL,
  `color` VARCHAR(20) NOT NULL,
  `skill_tipo_tipo_id` INT NOT NULL,
  PRIMARY KEY (`skill_id`, `skill_tipo_tipo_id`),
  UNIQUE INDEX `skill_id_UNIQUE` (`skill_id` ASC) VISIBLE,
  INDEX `fk_skill_skill_tipo_idx` (`skill_tipo_tipo_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_skill_tipo`
    FOREIGN KEY (`skill_tipo_tipo_id`)
    REFERENCES `PorfolioDB`.`skill_tipo` (`tipo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`institucion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`institucion` (
  `institucion_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `urllogo` VARCHAR(100) NULL,
  `icono` VARCHAR(50) NULL,
  `website` VARCHAR(100) NULL,
  PRIMARY KEY (`institucion_id`),
  UNIQUE INDEX `institucion_id_UNIQUE` (`institucion_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`habilidad` (
  `usuario_usr_id` INT NOT NULL,
  `skill_skill_id` INT NOT NULL,
  `skill_skill_tipo_tipo_id` INT NOT NULL,
  `porcentaje` INT(3) ZEROFILL NOT NULL,
  PRIMARY KEY (`usuario_usr_id`, `skill_skill_id`, `skill_skill_tipo_tipo_id`),
  INDEX `fk_usuario_has_skill_skill1_idx` (`skill_skill_id` ASC, `skill_skill_tipo_tipo_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_skill_usuario1_idx` (`usuario_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_skill_usuario1`
    FOREIGN KEY (`usuario_usr_id`)
    REFERENCES `PorfolioDB`.`usuario` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_skill_skill1`
    FOREIGN KEY (`skill_skill_id` , `skill_skill_tipo_tipo_id`)
    REFERENCES `PorfolioDB`.`skill` (`skill_id` , `skill_tipo_tipo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`estudio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`estudio` (
  `usuario_usr_id` INT NOT NULL,
  `institucion_institucion_id` INT NOT NULL,
  `titulo` VARCHAR(40) NULL,
  `desdehasta` VARCHAR(9) NULL,
  PRIMARY KEY (`usuario_usr_id`, `institucion_institucion_id`),
  INDEX `fk_usuario_has_institucion_institucion1_idx` (`institucion_institucion_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_institucion_usuario1_idx` (`usuario_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_institucion_usuario1`
    FOREIGN KEY (`usuario_usr_id`)
    REFERENCES `PorfolioDB`.`usuario` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_institucion_institucion1`
    FOREIGN KEY (`institucion_institucion_id`)
    REFERENCES `PorfolioDB`.`institucion` (`institucion_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`experiencia` (
  `usuario_usr_id` INT NOT NULL,
  `institucion_institucion_id` INT NOT NULL,
  `cargo` VARCHAR(40) NULL,
  `descripcion` VARCHAR(90) NULL,
  `desdehasta` VARCHAR(9) NULL,
  PRIMARY KEY (`usuario_usr_id`, `institucion_institucion_id`),
  INDEX `fk_usuario_has_institucion_institucion2_idx` (`institucion_institucion_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_institucion_usuario2_idx` (`usuario_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_institucion_usuario2`
    FOREIGN KEY (`usuario_usr_id`)
    REFERENCES `PorfolioDB`.`usuario` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_institucion_institucion2`
    FOREIGN KEY (`institucion_institucion_id`)
    REFERENCES `PorfolioDB`.`institucion` (`institucion_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PorfolioDB`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PorfolioDB`.`proyecto` (
  `usuario_usr_id` INT NOT NULL,
  `institucion_institucion_id` INT NOT NULL,
  `subtitulo` VARCHAR(70) NULL,
  `descripcion` VARCHAR(90) NULL,
  PRIMARY KEY (`usuario_usr_id`, `institucion_institucion_id`),
  INDEX `fk_usuario_has_institucion_institucion3_idx` (`institucion_institucion_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_institucion_usuario3_idx` (`usuario_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_institucion_usuario3`
    FOREIGN KEY (`usuario_usr_id`)
    REFERENCES `PorfolioDB`.`usuario` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_institucion_institucion3`
    FOREIGN KEY (`institucion_institucion_id`)
    REFERENCES `PorfolioDB`.`institucion` (`institucion_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

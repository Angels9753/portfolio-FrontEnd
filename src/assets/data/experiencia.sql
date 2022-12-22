-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-12-2022 a las 14:12:43
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pfolio_acs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id` int(11) NOT NULL,
  `cargo_ex` varchar(255) DEFAULT NULL,
  `descripcion_ex` varchar(255) DEFAULT NULL,
  `desde_hasta_ex` varchar(255) DEFAULT NULL,
  `icono_ex` varchar(255) DEFAULT NULL,
  `institucion_ex` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `cargo_ex`, `descripcion_ex`, `desde_hasta_ex`, `icono_ex`, `institucion_ex`) VALUES
(1, 'Sub Jefe de Laboratorio de I&D', 'Desarrollo de nuevos colores para la industria textil.', ' 1981-1984', 'fa-solid fa-gear', 'Tintorería Industrial Corbella SRL'),
(2, 'Técnico de Laboratorio de Inductancias', 'Diseño de componentes para la industria electrónica.', '1984-1988', 'fa-solid fa-radio', 'Componentes Electrónicos Sapienza SRL'),
(3, 'Análisis y Desarrollo Free-Lance', 'Desarrollo de sistemas informáticos para el sector de la salud y educación.', '1985-1988', 'fa-solid fa-computer', 'Sapienza Sistemas Informáticos'),
(4, 'Analista Trainee', 'Proyecto de investigacion de radio enlaces a nivel nacional en la empresa DatoCom SRL.', '1990-1990', 'fa-solid fa-tower-cell', 'Universidad de Morón'),
(5, 'Analista de Sistemas Free Lance', 'Desarrollo de sistemas para el sector de la salud y logística.', '1990-1992', 'fa-solid fa-computer', 'A&R SRL Consultora Informática de Empresas'),
(6, 'Director Centro de Cómputos', 'Diseño y gerenciamiento de la gestión educativa de 15.000 alumnos y 1.000 docentes.', '1992-1999', 'fa-solid fa-computer', 'Universidad Nacional de la Matanza'),
(7, 'Pro-Secretario de Informática y Comunicaciones', 'Gerenciamiento de todo el sector informático, tanto administrativo como educativo.', '1999-2000', 'fa fa-briefcase', 'Universidad Nacional de la Matanza'),
(8, 'Análisis y Desarrollo Free-Lance', 'Desarrollo de sistemas para el sector comercial minorista y logística.', '2001-2010', 'fa-solid fa-computer', 'Sapienza Sistemas Informáticos'),
(9, 'Gerente de Sistemas', 'Gerenciamiento de todo el sector informático, tanto administrativo como educativo.', '1989-2014', 'fa-solid fa-computer', 'Institucion Salesiana de Ramos Mejía'),
(10, 'Gerente de Recursos Humanos', 'Gerenciamiento de la oficina de Personal con una planta de 300 empleados.', '2014-2021', 'fa fa-briefcase', 'Institucion Salesiana de Ramos Mejía');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

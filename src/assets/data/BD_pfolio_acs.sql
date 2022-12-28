-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2022 a las 20:53:29
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
-- Estructura de tabla para la tabla `estudio`
--

CREATE TABLE `estudio` (
  `id` int(11) NOT NULL,
  `desde_hasta_es` varchar(255) DEFAULT NULL,
  `institucion_es` varchar(255) DEFAULT NULL,
  `titulo_es` varchar(255) DEFAULT NULL,
  `url_logo_es` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudio`
--

INSERT INTO `estudio` (`id`, `desde_hasta_es`, `institucion_es`, `titulo_es`, `url_logo_es`) VALUES
(1, '1969-1974', 'Instituto Don Bosco de Ramos Mejía', 'Bachiller-Comercial', '../../../assets/img/logo-donbosco.jpg'),
(2, '1975-1980', 'Facultad de Cs.Exactas - UBA', 'Licenciado en Química', '../../../assets/img/Logo-fcenuba.png'),
(3, '1985-1988', 'Instituto Superior Ntra. Sra. de las Nieves', 'Profesor de Física y Química', '../../../assets/img/logo-ntraSraNieves.png'),
(4, '1990-1995', 'Facultad de Informática - Univ. de Morón', 'Licenciado en Sistemas de Computación', '../../../assets/img/logo-universidad-de-moron.jpg');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` bigint(20) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `descripcion` varchar(660) DEFAULT NULL,
  `img` varchar(150) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `subtitulo` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `apellido`, `descripcion`, `img`, `nombre`, `subtitulo`) VALUES
(1, 'Sapienza', 'He desarrollado una amplia trayectoria en el campo de las TIC. Comencé mi carrera con trabajos Free Lance en varias instituciones relacionadas con la salud. Paralelamente llevé adelante mi tarea como docente secundario, terciario e universitario. Con el tiempo pude dirigir proyectos desde sus etapas primigenias, generando las bases sobre las cuales actualmente varias instituciones educativas basan sus sistemas de administración académica. Con el tiempo volví al desarrollo Free Lance y a la consultoría informática para numerosos comercios de la zona Oeste del AMBA. Actualmente estoy retirado de la actividad y actualizándome en las nuevas tecnologías.', '../../../assets/img/foto4x4.png', 'Angel Cay', 'Desarrolador full Stack Jr.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` int(11) NOT NULL,
  `descripcion_pr` varchar(255) DEFAULT NULL,
  `institucion_pr` varchar(255) DEFAULT NULL,
  `subtitulo_pr` varchar(255) DEFAULT NULL,
  `url_logo_pr` varchar(255) DEFAULT NULL,
  `web_pr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `descripcion_pr`, `institucion_pr`, `subtitulo_pr`, `url_logo_pr`, `web_pr`) VALUES
(1, 'Networking y Software de control de Stock de materiales odontológicos y Liquidación de Obras Sociales.', 'Asociaciones Odontológicas', 'Zona Oeste y Partido de San Martín', '../../../assets/img/logo-AOO.jpg', 'https://aooeste.com.ar/'),
(2, 'Networking y Software Contable, Administración Escolar y Liquidación de sueldos.', 'Institucion Salesiana', 'Obra Escolar Don Bosco de Ramos Mejía', '../../../assets/img/logo-donbosco.jpg', 'https://www.donboscoramos.edu.ar/'),
(3, 'Software de seguimiento psicopedagógico para alumnos de la institución.', 'Institución de La Salle', 'Argentina-Paraguay', '../../../assets/img/logo-Lasalle.jpg', 'http://lasalle.edu.ar/'),
(4, 'Software on line de gestión académica, inscripción a cursadas y exámenes.', 'Universidad Nacional de la Matanza', 'Secretaría de Informática y Comunicaciones', '../../../assets/img/logo-unlam.jpg', 'https://www.unlam.edu.ar/'),
(5, 'Primera página web de Cátedra de toda la Universidad. Para dar asistencia on line a los alumnos cursantes de la Materia Base de Datos.', 'Universidad de Morón', 'Facultad de Ingeniería Informática - Cátedra de Bases de Datos', '../../../assets/img/logo-universidad-de-moron.jpg', 'https://bdatos.wordpress.com/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol_nombre`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skill_blanda`
--

CREATE TABLE `skill_blanda` (
  `id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `porcentaje` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `skill_blanda`
--

INSERT INTO `skill_blanda` (`id`, `color`, `nombre`, `porcentaje`) VALUES
(1, 'bg-success', 'Liderazgo', '95'),
(2, 'bg-custom', 'Motivación', '90'),
(3, 'bg-dark', 'Trabajo en Equipo', '90'),
(4, 'bg-danger', 'Gestión de tiempo', '80'),
(5, 'text-dark bg-warning', 'Paciencia', '100');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skill_dura`
--

CREATE TABLE `skill_dura` (
  `id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `porcentaje` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `skill_dura`
--

INSERT INTO `skill_dura` (`id`, `color`, `nombre`, `porcentaje`) VALUES
(1, 'bg-danger', 'HTML', '35'),
(2, 'bg-custom', 'CSS', '30'),
(3, 'text-dark bg-warning', 'JS', '25'),
(4, 'bg-dark', 'Networking', '80'),
(5, 'bg-secondary', 'SQL', '90'),
(6, 'bg-succes', 'VB.Net', '80');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skill_idioma`
--

CREATE TABLE `skill_idioma` (
  `id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `porcentaje` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `skill_idioma`
--

INSERT INTO `skill_idioma` (`id`, `color`, `nombre`, `porcentaje`) VALUES
(1, 'bg-success', 'Italiano', '40'),
(2, 'bg-custom', 'Francés', '30'),
(3, 'bg-danger', 'Inglés', '60');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `nombre`, `nombre_usuario`, `password`) VALUES
(1, 'user@user.com', 'user', 'user', '$2a$10$bi9FVp3gnPP9iLq.tLQnYOlogiJp.Di99R9rNHEiPptORbiaaaR/6'),
(2, 'admin@admin.com', 'admin', 'admin', '$2a$10$0Bd1bUy7S8pTmUHQMFkZI.vcZnI/qJFdNdq.LtM2faTTSx980DWp6'),
(3, 'angel@admin.com', 'angel', 'angel', '$2a$10$96pzYm7f3.itBpUMbH9qNegi2mZJ7fsDVPzerPNEB9aEJ1Ho6Zbty');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `usuario_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudio`
--
ALTER TABLE `estudio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skill_blanda`
--
ALTER TABLE `skill_blanda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skill_dura`
--
ALTER TABLE `skill_dura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skill_idioma`
--
ALTER TABLE `skill_idioma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_puhr3k3l7bj71hb7hk7ktpxn0` (`nombre_usuario`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`usuario_id`,`rol_id`),
  ADD KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudio`
--
ALTER TABLE `estudio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `skill_blanda`
--
ALTER TABLE `skill_blanda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `skill_dura`
--
ALTER TABLE `skill_dura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `skill_idioma`
--
ALTER TABLE `skill_idioma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `FK610kvhkwcqk2pxeewur4l7bd1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `FKbyfgloj439r9wr9smrms9u33r` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

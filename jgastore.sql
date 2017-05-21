-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.15-log - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para jgastore
CREATE DATABASE IF NOT EXISTS `jgastore` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `jgastore`;

-- Volcando estructura para tabla jgastore.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.categoria: ~3 rows (aproximadamente)
DELETE FROM `categoria`;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` (`idCategoria`, `nombre`) VALUES
	(1, 'Celulares'),
	(2, 'Videojuegos'),
	(3, 'Deportes');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `email` varchar(64) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `fotoPerfil` varchar(50) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `genero` char(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.cliente: ~3 rows (aproximadamente)
DELETE FROM `cliente`;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`email`, `nombre`, `apellido`, `username`, `password`, `fotoPerfil`, `fechaNacimiento`, `genero`, `telefono`, `ciudad`) VALUES
	('alejandrombc@gmail.com', 'Alejandro', 'Barone', 'alejandrombc', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, NULL, 'M', NULL, 'Caracas'),
	('gregcastro@gmail.com', 'Gregorio Castro', NULL, 'gregcastro', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, NULL, NULL, NULL, NULL),
	('jesusciberia@gmail.com', 'Jesus', NULL, 'jesusgrafica', '92aae27de4a8f2da851ac347e790c45c209cb24670cf65196aa4000742045212', NULL, NULL, 'M', NULL, 'Caracas');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.comentarios
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cuerpo` text NOT NULL,
  `user_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla jgastore.comentarios: ~4 rows (aproximadamente)
DELETE FROM `comentarios`;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` (`id`, `cuerpo`, `user_id`) VALUES
	(2, 'MAMALO', 'alejandrombc@gmail.com'),
	(7, 'JESUS CONO ', 'alejandrombc@gmail.com'),
	(8, 'JAJAJA', 'alejandrombc@gmail.com'),
	(9, 'MAMALO JESUS', 'gregcastro@gmail.com');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.envio
CREATE TABLE IF NOT EXISTS `envio` (
  `idEnvio` int(11) NOT NULL AUTO_INCREMENT,
  `direccion1` varchar(50) NOT NULL,
  `direccion2` varchar(50) DEFAULT NULL,
  `estado` varchar(50) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `idCliente` varchar(64) NOT NULL,
  PRIMARY KEY (`idEnvio`),
  KEY `idCliente3` (`idCliente`),
  CONSTRAINT `idCliente3` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.envio: ~0 rows (aproximadamente)
DELETE FROM `envio`;
/*!40000 ALTER TABLE `envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `envio` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.enviopedidoproducto
CREATE TABLE IF NOT EXISTS `enviopedidoproducto` (
  `idEnvio` int(11) NOT NULL,
  `idPedidoProducto` int(11) NOT NULL,
  PRIMARY KEY (`idEnvio`,`idPedidoProducto`),
  KEY `idPedidoProducto` (`idPedidoProducto`),
  CONSTRAINT `idEnvio` FOREIGN KEY (`idEnvio`) REFERENCES `envio` (`idEnvio`),
  CONSTRAINT `idPedidoProducto` FOREIGN KEY (`idPedidoProducto`) REFERENCES `pedidoproducto` (`idPedidoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.enviopedidoproducto: ~0 rows (aproximadamente)
DELETE FROM `enviopedidoproducto`;
/*!40000 ALTER TABLE `enviopedidoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `enviopedidoproducto` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.metodopago
CREATE TABLE IF NOT EXISTS `metodopago` (
  `idMetodoPago` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`idMetodoPago`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.metodopago: ~0 rows (aproximadamente)
DELETE FROM `metodopago`;
/*!40000 ALTER TABLE `metodopago` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodopago` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.metodopagocliente
CREATE TABLE IF NOT EXISTS `metodopagocliente` (
  `idMetodoPagoCliente` int(11) NOT NULL AUTO_INCREMENT,
  `numeroTarjetaCredito` int(16) DEFAULT NULL,
  `idMetodoPago` int(11) NOT NULL,
  `idCliente` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`idMetodoPagoCliente`),
  KEY `idCliente2` (`idCliente`),
  KEY `idMetodoPago` (`idMetodoPago`),
  CONSTRAINT `idCliente2` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`email`),
  CONSTRAINT `idMetodoPago` FOREIGN KEY (`idMetodoPago`) REFERENCES `metodopago` (`idMetodoPago`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.metodopagocliente: ~0 rows (aproximadamente)
DELETE FROM `metodopagocliente`;
/*!40000 ALTER TABLE `metodopagocliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodopagocliente` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.pedido
CREATE TABLE IF NOT EXISTS `pedido` (
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `fechaPedido` date NOT NULL,
  `idCliente` varchar(64) NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `idCliente` (`idCliente`),
  CONSTRAINT `idCliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.pedido: ~0 rows (aproximadamente)
DELETE FROM `pedido`;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.pedidoproducto
CREATE TABLE IF NOT EXISTS `pedidoproducto` (
  `idPedidoProducto` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL DEFAULT '1',
  `precio` double NOT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idPedido` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPedidoProducto`),
  KEY `idProducto` (`idProducto`),
  KEY `idPedido` (`idPedido`),
  CONSTRAINT `idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`),
  CONSTRAINT `idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.pedidoproducto: ~0 rows (aproximadamente)
DELETE FROM `pedidoproducto`;
/*!40000 ALTER TABLE `pedidoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidoproducto` ENABLE KEYS */;

-- Volcando estructura para tabla jgastore.producto
CREATE TABLE IF NOT EXISTS `producto` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `cantVendida` int(11) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `idCategoria` (`idCategoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla jgastore.producto: ~8 rows (aproximadamente)
DELETE FROM `producto`;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` (`idProducto`, `nombre`, `descripcion`, `foto`, `precio`, `cantVendida`, `idCategoria`) VALUES
	(1, 'Samsung Note', 'Cuidado, explota a veces', 'http://www.optimaitalia.com/blog/wp-content/uploads/2016/08/Samsung-Galaxy-Note-7-4-320x150.jpg', 550, 2, 1),
	(2, 'LG G Vista', 'Pantalla de 5.5 pulgadas, HD 1080p', 'https://imei24.com/img/lg/15_03_07_gvp_LG-G-Vista-Sizzle_5000158_640x360.jpg', 120, 1, 1),
	(3, 'Huawei Mate 220', 'Celular con pantalla de 6 pulgadas, HD 1080p', 'http://puebloygobierno.com/wp-content/uploads/2016/10/huawei-1.jpg', 300, 6, 1),
	(4, 'Blu Jesus', 'Un celular fino barato', 'https://http2.mlstatic.com/celular-blu-energy-x-plus-55-bat-4000-mha-libre-garantia-D_NQ_NP_728901-MLA20446438979_102015-F.jpg', 150, 21, 1),
	(5, 'Nioh - PS4', 'Juego de samurais', 'https://media.playstation.com/is/image/SCEA/nioh-listing-thumb-01-ps4-us-08dec15?$Icon$', 60, 1, 2),
	(7, 'Camisa del BVB', 'La camisa del mejor equipo', 'http://images.footballfanatics.com/FFImage/thumb.aspx?i=/productImages/_2412000/ff_2412083_full.jpg&w=340', 100, 18, 3),
	(8, 'Camisa del FC Barcelona', 'Camisa nula', 'http://www.fcbarcelonastoreasia.com/files/images/products/17400/17399_fc-barcelona-home-authentic-jersey-2016-17_08.png', 80, 0, 3),
	(9, 'Nier:Automata - PS4', 'Un juego de accion bastante divertido que permite matar maquinas de diferentes factores humanitarios. La trama es la pelea de las maquinas', 'https://static.giantbomb.com/uploads/original/11/119879/2896726-1721110665-Nier..jpg', 60, 0, 2);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

-- Volcando estructura para vista jgastore.view_alfabetico_asc
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `view_alfabetico_asc` (
	`idProducto` INT(11) NOT NULL,
	`nombre` VARCHAR(50) NULL COLLATE 'latin1_swedish_ci',
	`descripcion` VARCHAR(200) NULL COLLATE 'latin1_swedish_ci',
	`foto` VARCHAR(500) NULL COLLATE 'latin1_swedish_ci',
	`precio` DOUBLE NULL,
	`cantVendida` INT(11) NULL,
	`idCategoria` INT(11) NULL
) ENGINE=MyISAM;

-- Volcando estructura para vista jgastore.view_alfabetico_desc
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `view_alfabetico_desc` (
	`idProducto` INT(11) NOT NULL,
	`nombre` VARCHAR(50) NULL COLLATE 'latin1_swedish_ci',
	`descripcion` VARCHAR(200) NULL COLLATE 'latin1_swedish_ci',
	`foto` VARCHAR(500) NULL COLLATE 'latin1_swedish_ci',
	`precio` DOUBLE NULL,
	`cantVendida` INT(11) NULL,
	`idCategoria` INT(11) NULL
) ENGINE=MyISAM;

-- Volcando estructura para vista jgastore.view_alfabetico_asc
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `view_alfabetico_asc`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_alfabetico_asc` AS select `producto`.`idProducto` AS `idProducto`,`producto`.`nombre` AS `nombre`,`producto`.`descripcion` AS `descripcion`,`producto`.`foto` AS `foto`,`producto`.`precio` AS `precio`,`producto`.`cantVendida` AS `cantVendida`,`producto`.`idCategoria` AS `idCategoria` from `producto` order by `producto`.`nombre`;

-- Volcando estructura para vista jgastore.view_alfabetico_desc
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `view_alfabetico_desc`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_alfabetico_desc` AS select `producto`.`idProducto` AS `idProducto`,`producto`.`nombre` AS `nombre`,`producto`.`descripcion` AS `descripcion`,`producto`.`foto` AS `foto`,`producto`.`precio` AS `precio`,`producto`.`cantVendida` AS `cantVendida`,`producto`.`idCategoria` AS `idCategoria` from `producto` order by `producto`.`nombre` desc;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

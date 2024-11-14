# Gestionar eventos

Crear un sistema de microservicios para la gestión de reservas de eventos y
asistencia de usuarios, que se comuniquen entre sí mediante HTTP.

```sql
CREATE DATABASE `gestionar_eventos` ;

-- gestionar_eventos.eventos definition

CREATE TABLE `eventos` (
  `id_evento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `hora-fecha` datetime NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `capacidad` int NOT NULL,
  PRIMARY KEY (`id_evento`)
) 
-- gestionar_eventos.usuarios definition

CREATE TABLE `usuarios` (
  `dni` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  PRIMARY KEY (`dni`)
)
-- gestionar_eventos.categoria definition

CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) 
-- gestionar_eventos.lista_asistentes definition

CREATE TABLE `lista_asistentes` (
  `id_lista_asistente` int NOT NULL,
  `id_evento` int NOT NULL,
  `id_usuario` varchar(10) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_lista_asistente`),
  KEY `lista_asistentes_eventos_FK` (`id_evento`),
  KEY `lista_asistentes_usuarios_FK` (`id_usuario`),
  KEY `lista_asistentes_categoria_FK` (`id_categoria`),
  CONSTRAINT `lista_asistentes_categoria_FK` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `lista_asistentes_eventos_FK` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id_evento`),
  CONSTRAINT `lista_asistentes_usuarios_FK` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`dni`)
) 
```
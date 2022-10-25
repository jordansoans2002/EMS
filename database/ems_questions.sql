-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `exam_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `question` varchar(45) DEFAULT NULL,
  `option1` varchar(45) DEFAULT NULL,
  `option2` varchar(45) DEFAULT NULL,
  `option3` varchar(45) DEFAULT NULL,
  `option4` varchar(45) DEFAULT NULL,
  `solution` varchar(4) DEFAULT NULL,
  `marks` int DEFAULT '1',
  PRIMARY KEY (`question_id`),
  KEY `role_id_idx` (`exam_id`),
  CONSTRAINT `role_id` FOREIGN KEY (`exam_id`) REFERENCES `job_roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,0,'why','a','b','c','','a',1),(1,1,'what','a','b','c','d','b',1),(2,2,'who','a','b','c','d','c',1),(2,3,'where','a','b','c','d','d',1),(3,4,'how','a','b','c','d','abcd',1),(4,5,'why','a','b','c','','a',1),(4,6,'what','a','b','c','d','b',1),(5,7,'who','a','b','c','d','c',1),(5,8,'where','a','b','c','d','d',1),(6,9,'how','a','b','c','d','abcd',1),(7,10,'why','a','b','c','','a',1),(7,11,'what','a','b','c','d','b',1),(8,12,'who','a','b','c','d','c',1),(8,13,'where','a','b','c','d','d',1),(9,14,'how','a','b','c','d','abcd',1),(10,15,'why','a','b','c','','a',1),(10,16,'what','a','b','c','d','b',1),(11,17,'who','a','b','c','d','c',1),(11,18,'where','a','b','c','d','d',1),(12,19,'how','a','b','c','d','abcd',1),(13,20,'why','a','b','c','','a',1),(13,21,'what','a','b','c','d','b',1),(14,22,'who','a','b','c','d','c',1),(14,23,'where','a','b','c','d','d',1),(14,24,'how','a','b','c','d','abcd',1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-26  4:48:38

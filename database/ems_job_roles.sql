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
-- Table structure for table `job_roles`
--

DROP TABLE IF EXISTS `job_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) DEFAULT NULL,
  `description` text,
  `qualifications` varchar(45) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `no_qs` int DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `pay_scale` varchar(20) DEFAULT '0,0',
  PRIMARY KEY (`role_id`),
  KEY `company_id_idx` (`company_id`),
  CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_roles`
--

LOCK TABLES `job_roles` WRITE;
/*!40000 ALTER TABLE `job_roles` DISABLE KEYS */;
INSERT INTO `job_roles` VALUES (1,'Job Role 1','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','BE',3600,5,1,'10000,20000'),(2,'Job Role 2','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','Work Experience',1800,5,1,'10000,20000'),(3,'Job Role 3','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME',5400,5,1,'10000,20000'),(4,'Job Role 4','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','BE',900,5,1,'10000,20000'),(5,'Job Role 5','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','Work Experience',1800,5,1,'10000,20000'),(6,'Job Role 6','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME,Work Experience',1800,5,1,'10000,20000'),(7,'Job Role 1','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','BE',900,5,2,'10000,20000'),(8,'Job Role 2','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME',1800,5,2,'10000,20000'),(9,'Job Role 3','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','Work Experience',3600,5,2,'10000,20000'),(10,'Job Role 4','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME,Work Experience',5400,5,2,'10000,20000'),(11,'Job Role 1','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','BE',900,5,3,'10000,20000'),(12,'Job Role 2','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME',1800,5,3,'10000,20000'),(13,'Job Role 3','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','Work Experience',3600,5,3,'10000,20000'),(14,'Job Role 4','Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.','ME,Work Experience',5400,5,3,'10000,20000');
/*!40000 ALTER TABLE `job_roles` ENABLE KEYS */;
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

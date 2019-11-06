/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : yougou

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-10-18 10:10:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `register`
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `sid` tinyint(10) unsigned NOT NULL AUTO_INCREMENT,
  `tell` varchar(15) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `regdate` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('7', '15012566133', 'e4af001202394bea766da25ca5a83adc8dfb1fe1', '2019-10-17 17:54:36');

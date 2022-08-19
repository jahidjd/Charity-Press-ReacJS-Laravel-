-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2022 at 11:42 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chartity_press`
--

-- --------------------------------------------------------

--
-- Table structure for table `awarness_areas`
--

CREATE TABLE `awarness_areas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_one` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_two` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quotation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `awarness_areas`
--

INSERT INTO `awarness_areas` (`id`, `title`, `description`, `photo_one`, `photo_two`, `quotation`, `created_at`, `updated_at`) VALUES
(1, 'Welcome to CharityPress please rise your hand', 'The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”', 'awarnessOne 20220730123430.jpg', 'awarness 20220730123430.jpg', 'If you don\'t understand how fast and easy it is to so long for your favorite charity on FundPress, please try it. How it works page, Contact us.', '2022-07-30 06:34:30', '2022-07-30 06:52:46');

-- --------------------------------------------------------

--
-- Table structure for table `causes`
--

CREATE TABLE `causes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `causes_category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount_need` bigint(20) NOT NULL,
  `total_funded` bigint(20) DEFAULT NULL,
  `finished_date` date NOT NULL,
  `photo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `posted_by` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `posted_by_photo` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `causes`
--

INSERT INTO `causes` (`id`, `causes_category_id`, `title`, `total_amount_need`, `total_funded`, `finished_date`, `photo`, `posted_by`, `posted_by_photo`, `created_at`, `updated_at`) VALUES
(2, 1, 'Splash Drone 3 a Fully Waterproof Drone that floats', 50000, NULL, '2022-08-05', 'causes 20220729052501.jpg', 'Jahid Hasan', 'Jahid Hasan20220729052501.jpg', '2022-07-29 11:25:01', '2022-07-29 11:56:36'),
(4, 5, 'The Read Read: Braille Literacy Tool for the Blind', 50000, NULL, '2022-08-16', 'causes 20220801061623.jpg', 'Jahid Hasan', 'Jahid Hasan20220801061623.jpg', '2022-08-01 00:16:23', '2022-08-01 00:16:23'),
(5, 6, 'BuildOne: $99 3D Printer w/ WiFi and Auto Bed Leveling!', 50000, NULL, '2022-08-09', 'causes 20220801061712.jpg', 'Naim', 'Naim20220801061712.jpg', '2022-08-01 00:17:12', '2022-08-01 00:17:12'),
(6, 5, 'DACBerry PRO – Professional Soundcard for Raspberry Pi', 50000, NULL, '2022-08-10', 'causes 20220801061804.jpg', 'Hasan', 'Hasan20220801061804.jpg', '2022-08-01 00:18:04', '2022-08-01 00:18:04'),
(7, 1, 'BIKI: First Bionic Wireless Under water Fish Drone', 50000, NULL, '2022-08-09', 'causes 20220801061855.jpg', 'Naim', 'Naim20220801061855.jpg', '2022-08-01 00:18:55', '2022-08-01 00:18:55'),
(8, 5, 'Brilliant After All, A New Album by Rebecca: Help poor people', 50000, NULL, '2022-08-09', 'causes 20220801061930.jpg', 'Jahid Hasan', 'Jahid Hasan20220801061930.jpg', '2022-08-01 00:19:30', '2022-08-01 00:19:30');

-- --------------------------------------------------------

--
-- Table structure for table `causes_categories`
--

CREATE TABLE `causes_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` char(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` char(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `causes_categories`
--

INSERT INTO `causes_categories` (`id`, `name`, `title`, `icon`, `photo`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Food', 'Healty Food For Poor People', 'icon-groceries', 'causesCategory 20220729013156.jpg', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.', '2022-07-29 07:32:31', '2022-07-29 08:32:01'),
(4, 'Watar', 'Pure Water For Poor People', 'icon-water', 'causesCategory 20220731124139.jpg', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.', '2022-07-31 06:41:39', '2022-07-31 06:41:39'),
(5, 'Health', 'Medical Facilities for People', 'icon-heartbeat', 'causesCategory 20220731124241.jpg', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.', '2022-07-31 06:42:41', '2022-07-31 06:42:41'),
(6, 'Education', 'Pure Education For Every Children', 'icon-open-book', 'causesCategory 20220731124331.jpg', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.', '2022-07-31 06:43:31', '2022-07-31 06:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `charity_address` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` bigint(20) NOT NULL,
  `project_category` bigint(20) UNSIGNED DEFAULT NULL,
  `date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`id`, `name`, `address`, `charity_address`, `amount`, `project_category`, `date`, `created_at`, `updated_at`) VALUES
(1, 'Jahid', 'Mohammadpur', 'Bangladesh', 15000, 4, '2022-08-18 00:00:00', NULL, NULL),
(4, 'Jahid Hasan', 'Mohammadpur, Dhaka', 'bangladesh', 65000, 6, '8/19/2022, 12:07:02 PM', '2022-08-19 00:07:02', '2022-08-19 00:07:02'),
(5, 'Jahid Hasan', 'Mohammadpur, Dhaka', 'bangladesh', 65000, 6, '8/19/2022, 12:08:31 PM', '2022-08-19 00:08:32', '2022-08-19 00:08:32');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_two` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_mission` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_vission` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facilities` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `photo`, `photo_two`, `short_description`, `event_mission`, `event_vission`, `facilities`, `description`, `date`, `created_at`, `updated_at`) VALUES
(1, 'Raspberry velbet', 'Events_cover_20220815084828.jpg', 'Events_big_20220815084828.jpg', 'In a time of overwhelming emotions, sadness, and pain, obligations.', '663 million people drink dirty water. Learn how it access to clean water can improve health, boost local econom mies. Lorem ipsum dolor sit amet. consectetur adipisicing elit.', '663 million people drink dirty water. Learn how it access to clean water can improve health, boost local econom mies. Lorem ipsum dolor sit amet. consectetur adipisicing elit.', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local econom mies. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ete dolore magna aliqua.\r\n\r\nAssisting senior consultants in projects\r\nShare best practices and knowledge.\r\nAssisting senior consultants in projects\r\nCollaborate with technology, informations security, and business partners\r\nFind and address performance issues', '663 million people drink dirty water. Learn how access to clean water can improve health, boost local econom mies. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ete dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '2022-08-20', '2022-08-15 02:48:28', '2022-08-17 04:54:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_tables`
--

CREATE TABLE `general_tables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_mission_text` char(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_mission_photo_one` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_mission_photo_two` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_mission_photo_three` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_mission_stratigy` char(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school` int(11) NOT NULL,
  `hospital` int(11) NOT NULL,
  `volunteers` int(11) NOT NULL,
  `home_big_text` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footer_text` char(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_tables`
--

INSERT INTO `general_tables` (`id`, `logo`, `home_mission_text`, `home_mission_photo_one`, `home_mission_photo_two`, `home_mission_photo_three`, `home_mission_stratigy`, `school`, `hospital`, `volunteers`, `home_big_text`, `footer_text`, `created_at`, `updated_at`) VALUES
(1, 'logo20220729121759.png', 'We register and regulate charities in England and Wales, to ensure that the public can support charities with confidence. As registrar, we are responsible for maintaining an accurate.', 'home_mission_photo_one20220729122054.jpg', 'home_mission_photo_two20220729122102.jpg', 'home_mission_photo_three20220729122130.jpg', 'Protecting charities from abuse or mismanagement\r\nEnabling trustees to run their charities effectively\r\nEncouraging greater transparency and accountability', 100, 150, 500, 'The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”', 'CharityPress online and raise money for charity and causes you’re passionate about. CharityPress is an innovative, cost-effective online.', '2022-07-29 10:57:05', '2022-07-31 05:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_07_28_104748_create_general_tables_table', 1),
(6, '2022_07_28_115129_create_causes_categories_table', 1),
(8, '2022_07_28_115150_create_causes_table', 2),
(9, '2022_07_29_082537_create_awarness_areas_table', 3),
(10, '2022_07_29_083605_create_volunteers_table', 4),
(12, '2022_07_29_084359_create_events_table', 5),
(13, '2022_08_17_135202_create_donations_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jahid Hasan', 'jahid@gmail.com', NULL, '$2y$10$Zy2ZYGWVv4h8cnfVjDNUsOKXpJSh2A50kOWQ.3MMlrAUSgpHMEIwa', NULL, '2022-07-28 13:26:09', '2022-07-28 13:26:09');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch` enum('bangladesh','Worldwide') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'bangladesh',
  `cv` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`id`, `name`, `email`, `branch`, `cv`, `message`, `created_at`, `updated_at`) VALUES
(1, 'jahid', 'jahid@gmail.com', 'bangladesh', 'jahid20220801051517.pdf', 'test message', '2022-07-31 23:15:17', '2022-07-31 23:15:17'),
(2, 'naim', 'naim@gmail.com', 'bangladesh', 'naim20220801091524.pdf', 'test', '2022-08-01 03:15:24', '2022-08-01 03:15:24'),
(3, 'test', 'test@gmail.com', 'bangladesh', 'test20220815092001.pdf', 'test message', '2022-08-15 03:20:01', '2022-08-15 03:20:01'),
(4, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernner', '2022-08-15 03:25:43', '2022-08-15 03:25:43'),
(5, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernner', '2022-08-15 03:27:50', '2022-08-15 03:27:50'),
(6, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernneraa', '2022-08-15 03:29:21', '2022-08-15 03:29:21'),
(7, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernneraa', '2022-08-15 03:30:08', '2022-08-15 03:30:08'),
(8, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernneraa', '2022-08-15 03:42:34', '2022-08-15 03:42:34'),
(9, 'Hasan', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'ernneraa', '2022-08-15 03:44:19', '2022-08-15 03:44:19'),
(10, 'test', 'jahidjd18@gmail.com', 'Worldwide', NULL, 'asdf', '2022-08-15 04:08:52', '2022-08-15 04:08:52'),
(11, 'test', 'jahidjd18@gmail.com', 'Worldwide', NULL, 'asdf', '2022-08-15 04:09:06', '2022-08-15 04:09:06'),
(12, 'test', 'jahidjd18@gmail.com', 'Worldwide', NULL, 'asdf', '2022-08-15 04:12:41', '2022-08-15 04:12:41'),
(13, 'test', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'sadf', '2022-08-15 04:26:28', '2022-08-15 04:26:28'),
(14, 'test', 'jahidjd18@gmail.com', 'bangladesh', NULL, 'sadf', '2022-08-15 04:27:48', '2022-08-15 04:27:48'),
(15, 'test', 'jahidjd18@gmail.com', 'Worldwide', NULL, 'safsaf', '2022-08-15 04:28:33', '2022-08-15 04:28:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `awarness_areas`
--
ALTER TABLE `awarness_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `causes`
--
ALTER TABLE `causes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `causes_causes_category_id_foreign` (`causes_category_id`);

--
-- Indexes for table `causes_categories`
--
ALTER TABLE `causes_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `donations_project_category_foreign` (`project_category`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `general_tables`
--
ALTER TABLE `general_tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `awarness_areas`
--
ALTER TABLE `awarness_areas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `causes`
--
ALTER TABLE `causes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `causes_categories`
--
ALTER TABLE `causes_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_tables`
--
ALTER TABLE `general_tables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `causes`
--
ALTER TABLE `causes`
  ADD CONSTRAINT `causes_causes_category_id_foreign` FOREIGN KEY (`causes_category_id`) REFERENCES `causes_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `donations`
--
ALTER TABLE `donations`
  ADD CONSTRAINT `donations_project_category_foreign` FOREIGN KEY (`project_category`) REFERENCES `causes_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

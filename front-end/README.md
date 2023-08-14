<h1 align="center">
  TokopediaPlay 
</h1>

<p align="center">
  Tokopedia Play Clone is a video streaming platform inspired by Tokopedia's design. This project replicates key features of Tokopedia Play, including videos, products, comments, and more. Watch cool videos, discover the latest products, and enjoy fun interactions with Tokopedia Play Clone. All the features you love from Tokopedia Play, now comes in a more exciting and fun entertainment version. Let's start exploring a new world of entertainment!

</p>

## Table of Contents

- Tokopedia Play
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Bonus Features](#bonus-features)
  - [Technical Stack](#technical-stack)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API](#api)
    - [Video API](#video-api)
    - [Product API](#product-api)
    - [Comment API](#comment-api)
    - [Submit Comment API](#submit-comment-api)
  - [Database Schema](#database-schema)

## Introduction

The project is designed to replicate the main features of Tokopedia Play, featuring videos, products, comments, and more.

## Features

### Frontend

1. **Home Page:** This page displays all video data in TokopediaPlay and there is a feature to search for videos based on certain categories.
2. **Video Detail Page:** when you select or tap one of the video photos on the home page it will be directed to this page where you can see the video directly and there is a list of products along with video comments
3. **Comment Submission:** where users can express their thoughts and opinions by submitting comments, complete with name and comment content in the from provided.
4. **Real-time Comments:** where when a comment has been sent, the comment will immediately appear directly in the comment field without the need to refresh
5. **User Profile:** the user profile to the left of the comment text that has been sent
6. **Search Functionality:** Easily find content by tapping the search button at the top right corner of the home page and will be redirected to the search page to search for videos.

### Backend

1. **Video API:** access all video data obtained from the database.
2. **Product API:** where product data is obtained for video purposes.
3. **Comment API:** to send a comment and get a comment.

## Bonus Features

1. **User Profile Picture and Username:** Enhance user experience by displaying user profile picture and username in the comments list.
2. **Real-time Comment Updates:** Enhance interactivity with real-time comment updates, which are engaging and dynamic.
3. **Search Functionality:** Enhances content discovery through powerful search functionality that is easy to use and convenient.

### Frontend

- ![](https://img.shields.io/badge/Code-React.js-informational?style=flat&logo=react&color=61DAFB)
- ![](https://img.shields.io/badge/Library-React%20Router-informational?style=flat&logo=react-router&color=CA4245)
- ![](https://img.shields.io/badge/Language-HTML5-informational?style=flat&logo=html5&color=E34F26)
- ![](https://img.shields.io/badge/Language-CSS3-informational?style=flat&logo=css3&color=1572B6)
- ![](https://img.shields.io/badge/Tool-Vite-informational?style=flat&logo=vite&color=646CFF)

### Backend

- ![](https://img.shields.io/badge/Runtime-Node.js-informational?style=flat&logo=node.js&color=339933)
- ![](https://img.shields.io/badge/Framework-Express.js-informational?style=flat&logo=express&color=000000)
- ![](https://img.shields.io/badge/Database-MongoDB-informational?style=flat&logo=mongodb&color=47A248)
- ![](https://img.shields.io/badge/Tool-Nodemon-informational?style=flat&logo=nodemon&color=76D04B)
- ![](https://img.shields.io/badge/Library-Mongoose-informational?style=flat&logo=mongoose&color=880000)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database (local or MongoDB Atlas).

### Installation

1. Clone this repository to your local machine.
2. Navigate to the frontend folder and run `npm install`.
3. Navigate to the backend folder and run `npm install`.

### Running the Application

1. Start the frontend application:

   - Navigate to the frontend folder.
   - Run `npm run dev`.

2. Start the backend server:
   - Navigate to the backend folder.
   - Run `npm run start` for automatic server restart during development.

## API

The backend provides the following API endpoints:

### Video API

- `/api/videos`: Fetch a list of videos with thumbnails.
- `/api/video/:videoID`: Fetch details of a specific video.

### Product API

- `/api/:videoID/products`: Fetch a list of products.

### Comment API

- `/api/:videoID/comments`: Fetch comments for videos.

### Submit Comment API

- `/api/:videoID`: Submit a new comment.
- Payload Example:
  ```json
  {
    "username": "Username 1",
    "comment": "video nya berkualitas !!!!"
  }
  ```

## Database Schema

The MongoDB database used for this project has collections for videos, products, and comments.

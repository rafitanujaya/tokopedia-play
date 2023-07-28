# TOKOPEDIA.PLAY (MID TERM) Documentation

## Introduction

This repository contains backend MID TERM Project of the course "Generasi Gigih 3.0 -Fullstack Engineering

## Database Schema

### Video

This collection contains data about videos. The schema is as follows:

```
{
     "videoID": "string",
     "urlImage": "string",
     "thumbnail": "string",
     "title": "string",
     "category": "String"
 }
```

### Product

This collection contains data about Products. The schema is as follows:

```
{
     "videoID": "string",
     "linkProduct": "string",
     "title": "string",
     "price": "string"
 }
```

### Comment

This collection contains data about Comments. The schema is as follows:

```
{
     "videoID": "string",
     "username": "string",
     "comment": "string",
     "timestamp": Date,
 }
```

## API Structure

As shown in the image above, the API structure is as follows:

- `User` is the user who will consume the API

- `Backend` is the backend server that will serve the API (Node JS and Express JS)

- `Database` is the database that will store the data (MongoDB)

inside the `Backend` there are 5 layers:

`Routes:`
The routes layer is responsible for handling requests from users and sending responses back to users. At this layer, endpoint routes are defined, and each HTTP request will be directed to the appropriate controllers.

`Models:`
The models layer is responsible for handling data from the MongoDB database. In this layer, schema definition and database-related operations are performed. Models will interact with the database to store, retrieve, update, and delete data.

`Services:`
The services layer acts as an intermediary between the controllers and the models layer. Its function is to forward requests from controllers to the appropriate models and manage any additional business logic required before data is sent to or received from the database.

`Controllers:`
The controllers layer is responsible for handling requests from the routes layer. Here, they take the data from the request, process it through services, and then generate the appropriate response to be sent back to the user through the routes layer.

`Utils:`
The utilities layer contains auxiliary functions that can be used in various parts of the application. These include functions used to set up connections to the MongoDB database, such as functions to initialize connections, close connections, or perform connection management.

## List APIs

- `GET` http://localhost:3000/api/videos
- `GET` http://localhost:3000/api/video/:videoID
- `GET` http://localhost:3000/api/video?category=fashion
- `GET` http://localhost:3000/api/:videoID/comments
- `GET` http://localhost:3000/api/:videoID/products
- `POST` http://localhost:3000/api/:videoID/addcomment

### GET api/videos

This API will return a list of videos.

- URL Params:
  - None
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "videoID": "string",
      "urlImage": "string",
      "thumbnail": "string",
      "title": "string",
      "category": "String"
    },
    {
      "videoID": "string",
      "urlImage": "string",
      "thumbnail": "string",
      "title": "string",
      "category": "String"
    }
  ]
  ```

  ### GET api/video/:videoID

This API will return a video with the specified id.

- URL Params:
  - required: `videoID=[string]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  {
    "videoID": "string",
    "urlImage": "string",
    "thumbnail": "string",
    "title": "string",
    "category": "String"
  }
  ```

- Error Response

  - Code: 404
  - Content:

  ```json
  {
    "message": "Tidak ada Video"
  }
  ```

  ### GET api/videos?categories=

This API will return a video with the specified id.

- URL Params:
  - None
- Data Params:
  - None
- querry Params:
  - required: `categories=[string]`
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  {
    "videoID": "string",
    "urlImage": "string",
    "thumbnail": "string",
    "title": "string",
    "category": "String"
  }
  ```

  ### GET api/:videoID/comments

This API will return a list of comments that are related to the video with the specified id.

- URL Params:
  - required: `videoID=[string]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "videoID": "string",
      "username": "string",
      "comment": "string",
      "timestamp": "Date"
    },
    {
      "videoID": "string",
      "username": "string",
      "comment": "string",
      "timestamp": "Date"
    }
  ]
  ```

  ### GET api/:videoID/products

This API will return a list of product that are related to the video with the specified id.

- URL Params:
  - required: `videoID=[string]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "product": "String",
      "videoID": "string",
      "linkProduct": "string",
      "title": "string",
      "price": "string"
    },
    {
      "product": "String",
      "videoID": "string",
      "linkProduct": "string",
      "title": "string",
      "price": "string"
    }
  ]
  ```

  ### POST api/:videoID/addcomment

This API will create a comment associated with the video with the specified id.

- URL Params:
  - required: `videoID=[string]`
- Data Params:
  ```
  {
    username: "string",
    comment: "string"
  }
  ```
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 201
  - Content:

  ```json
  [
    {
      "massage": "Comment berhasil di tambahkan"
    }
  ]
  ```

  - Error Response

  - Code: 400
  - Content:

  ```json
  {
    "message": "Comment gagal ditambahkan"
  }
  ```

## Installation

### Prerequisites

Before you proceed with the installation, make sure you have the following software installed on your computer:

1. Node.js: The app uses Node.js to run the development server and package manager.

### Steps to Install

Follow these steps to install and run the tokopedia-play:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd tokopedia-play
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the API.

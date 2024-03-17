# QLogger

QLogger is a Log Ingestor and Query Interface designed to efficiently handle large datasets for read, write, and search operations. The repository consists of two main parts: the frontend and the backend. The frontend is a UI service created using React, Typescript, and Javascript, while the backend service is developed using Node.js and Express.js. MongoDB is used as the database.

## Built With

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) **React**
- ![Typescript](https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white) **Typescript**
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) **Node.js**
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) **JavaScript**
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white) **Express.js**
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) **MongoDB**

## Features 
- **Efficient Log Handling:**
  Handles large datasets efficiently for read, write, and search operations.

- **API Endpoints:**
  Provides API endpoints for health check, reading data, and writing data.

- **UI with Search and Filters:**
  UI includes a search bar and filters for easy log navigation.

- **JSON Schema for Logs:**
  Defines a JSON schema for logs stored in the database.

- **Pagination and Sorting:**
  UI supports pagination, limits and sorting options for logs.

## Installation Instructions

### Backend Service
```bash
cd backend
npm install
nodemon
```
The backend service runs on port 3000, and the base route is http://localhost:3000/dyte-logger. It includes the following APIs:
- Health Check: `GET /health`
- Read Data: `GET /`
- Write Data: `POST /`

### Frontend Service
```bash
cd frontend/querylogger
npm install
npm start
```
The frontend service runs on port 4000, and the base route is http://localhost:4000/. It consists of a single route '/' that renders the UI.

## Usage

QLogger is used to read and write data to the database in the form of logs. The logs are stored as JSON objects with the following sample schema:
```json
{
  "level": "error",
  "message": "Failed to connect to DB",
  "resourceId": "server-1234",
  "timestamp": "2023-09-15T08:00:00Z",
  "traceId": "abc-xyz-123",
  "spanId": "span-456",
  "commit": "5e5342f",
  "metadata": {
    "parentResourceId": "server-0987"
  }
}
```

## System Design

The system architecture of QLogger is designed to ensure efficient log management and seamless user interaction. Here's an overview of the key components:

### Backend Architecture

The backend of QLogger is built on a Node.js and Express.js framework, providing a robust foundation for handling HTTP requests and managing the application's business logic. MongoDB is used as the primary database to store log data. The backend exposes RESTful APIs for health checks, reading data, and writing data.

Key Components:
- **Express.js Server:** Handles incoming HTTP requests and routes them to the appropriate endpoints.
- **MongoDB Database:** Stores logs in a structured format.
- **API Endpoints:** Exposed for health checks, reading data, and writing data.

### Frontend Architecture

The frontend of QLogger is a React-based user interface that allows users to interact with log data seamlessly. It communicates with the backend to fetch and display log information. The UI is designed to provide a user-friendly experience, allowing users to search, filter, and navigate through logs efficiently.

Key Components:
- **React UI Components:** Developed using React to create a dynamic and responsive user interface.
- **Data Fetching:** Communicates with the backend APIs to retrieve log data.
- **Search and Filtering:** Provides a search bar and filters for easy log navigation.

### Communication

The frontend and backend communicate through HTTP requests, enabling seamless interaction between the user interface and the server. The backend processes requests, performs necessary database operations, and sends back relevant data to the frontend for display.

### Scalability

QLogger is designed to handle large datasets efficiently, with scalability in mind. The use of a NoSQL database like MongoDB allows for horizontal scaling by adding more nodes to the database cluster.

### Future Considerations

As QLogger evolves, considerations for additional features, optimizations, and integrations will be evaluated. Features like live streaming, grouping, CSV conversion can be added. For the architecture, principles like Load Balancing, Sharding and deployment pipeline can be added. Also, environments, authentication and authorization can be integrated.

### APIs

- **Health Check:**
  - Method: GET
  - Route: `/health`

- **Read Data:**
  - Method: GET
  - Route: `/`
  - Retrieve logs from the database.
  - The filters to search data are send using query params.

- **Write Data:**
  - Method: POST
  - Route: `/`
  - Write logs to the database.
  - The body of write request is an array of log objects.

### UI

The UI provides a search bar to search for logs with a specific string and filters for each parameter. Logs are displayed in a column of cards with detailed information. Additional UI features include dropdowns to sort logs by parameters, sort order, and limit the number of logs displayed. Pagination is also available for easy navigation between pages.

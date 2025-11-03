Digital Library - NoSQL MongoDB Project
A flexible Digital Library backend API built with Node.js, Express, and MongoDB, demonstrating NoSQL flexible schema capabilities.

📚 Project Overview
This project implements a backend Digital Library system that stores different types of media (books, movies, music) in a single MongoDB collection using a polymorphic data model. It showcases the power of NoSQL's flexible schema approach compared to traditional relational databases.

🚀 Features
Flexible Schema Design: Store books, movies, and music in the same collection

Polymorphic Data Model: Different media types with type-specific fields

RESTful API: Complete CRUD operations with filtering and search

Docker Integration: MongoDB running in Docker container

Performance Optimized: Proper indexing and query optimization

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB 7.0

Containerization: Docker, Docker Compose

Environment Management: Dotenv

📋 Prerequisites
Node.js (v14 or higher)

Docker and Docker Compose

MongoDB Compass (optional, for database visualization)

⚡ Quick Start
1. Clone the Repository
bash
git clone https://github.com/your-username/digital-library-nosql.git
cd digital-library-nosql
2. Install Dependencies
bash
npm install
3. Start MongoDB with Docker
bash
docker-compose up -d
4. Seed the Database
bash
npm run seed
5. Start the Server
bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
The API will be running at http://localhost:3000

🗄️ Database Configuration
The project uses Docker to run MongoDB with the following configuration:

Port: 27017

Database: digital_library_db

Username: admin

Password: password

📖 API Documentation
Base URL
text
http://localhost:3000/api
Endpoints
Media Management
Method	Endpoint	Description
GET	/media	Get all media items (with filters)
GET	/media/:id	Get specific media by ID
POST	/media	Create new media item
PATCH	/media/:id	Partially update media item
PUT	/media/:id	Fully replace media item
DELETE	/media/:id	Delete media item
System
Method	Endpoint	Description
GET	/health	System health check
Filtering and Search
By media type: GET /api/media?mediaType=book

By title: GET /api/media?title=harry

By genre: GET /api/media?genre=Fiction

Combined filters: GET /api/media?mediaType=book&genre=Science+Fiction

🎯 Data Models
Book
json
{
  "title": "The Great Gatsby",
  "mediaType": "book",
  "details": {
    "author": "F. Scott Fitzgerald",
    "pages": 218,
    "genre": "Fiction",
    "publisher": "Scribner"
  }
}
Movie
json
{
  "title": "Inception",
  "mediaType": "movie",
  "details": {
    "director": "Christopher Nolan",
    "runtime": 148,
    "genre": "Sci-Fi",
    "releaseYear": 2010
  }
}
Music
json
{
  "title": "Thriller",
  "mediaType": "music",
  "details": {
    "artist": "Michael Jackson",
    "duration": 42,
    "genre": "Pop",
    "trackCount": 9
  }
}
🏗️ Project Structure
text
digital-library/
├── src/
│   ├── server.js          # Express server configuration
│   ├── seed.js            # Database seeding script
│   ├── routes/
│   │   └── media.js       # API route handlers
│   └── services/
│       └── db.js          # Database connection service
├── docker-compose.yml     # Docker composition
├── package.json           # Project dependencies
└── .env                   # Environment configuration
🧪 Testing the API
Create a Book
bash
curl -X POST http://localhost:3000/api/media \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Harry Potter",
    "mediaType": "book",
    "details": {
      "author": "J.K. Rowling",
      "pages": 320,
      "genre": "Fantasy"
    }
  }'
Get All Books
bash
curl "http://localhost:3000/api/media?mediaType=book"
Health Check
bash
curl http://localhost:3000/health
📊 NoSQL Features Demonstrated
Flexible Schema Advantages
Polymorphic Data Storage: Books, movies, music in same collection

Dynamic Field Addition: Add new fields without migrations

Schema Evolution: Support new media types without database changes

No NULL Overhead: Each document contains only relevant fields

Comparison with SQL
No complex JOINs for related data

No ALTER TABLE migrations for schema changes

Natural data representation matching application objects

Better performance for hierarchical data

🐳 Docker Commands
bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Check container status
docker ps
🔧 Available Scripts
npm start - Start production server

npm run dev - Start development server with auto-restart

npm run seed - Populate database with sample data

npm run docker:up - Start Docker containers

npm run docker:down - Stop Docker containers

🚨 Error Handling
The API provides structured error responses:

json
{
  "success": false,
  "error": "Error description",
  "details": "Additional information",
  "timestamp": "2024-01-15T10:30:00Z"
}
📝 Environment Variables
Create a .env file in the root directory:

env
MONGODB_URI=mongodb://admin:password@localhost:27017
MONGODB_DB=digital_library_db
PORT=3000
🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Siddhant Misruf

GitHub: SIDDHANTMISRUF

Student ID: 22BCE0689

🙏 Acknowledgments
MongoDB for excellent documentation

Express.js team for the robust web framework

Docker community for containerization tools

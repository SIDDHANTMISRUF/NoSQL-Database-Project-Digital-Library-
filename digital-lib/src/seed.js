const { connectToDatabase, getDatabase } = require('./services/db');

const sampleMedia = [
    {
        title: "The Great Gatsby",
        mediaType: "book",
        details: {
            author: "F. Scott Fitzgerald",
            pages: 218,
            genre: "Fiction",
            publisher: "Scribner"
        }
    },
    {
        title: "Inception",
        mediaType: "movie", 
        details: {
            director: "Christopher Nolan",
            runtime: 148,
            genre: "Sci-Fi",
            releaseYear: 2010
        }
    },
    {
        title: "Thriller", 
        mediaType: "music",
        details: {
            artist: "Michael Jackson",
            duration: 42,
            genre: "Pop",
            trackCount: 9
        }
    },
    {
        title: "To Kill a Mockingbird",
        mediaType: "book",
        details: {
            author: "Harper Lee", 
            pages: 281,
            genre: "Fiction",
            publisher: "J.B. Lippincott & Co."
        },
        rating: 4.8  // This shows arbitrary fields
    }
];

async function seedDatabase() {
    try {
        await connectToDatabase();
        const db = getDatabase();
        
        // Clear existing data
        await db.collection('media').deleteMany({});
        
        // Insert sample data
        const result = await db.collection('media').insertMany(sampleMedia);
        console.log(`Inserted ${result.insertedCount} media items`);
        
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

seedDatabase();
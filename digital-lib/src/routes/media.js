const express = require('express');
const { getDatabase } = require('../services/db');
const router = express.Router();

// GET all media items with optional filtering
router.get('/', async (req, res) => {
    try {
        const db = getDatabase();
        const { title, mediaType, genre } = req.query;
        
        let filter = {};
        if (title) filter.title = { $regex: title, $options: 'i' };
        if (mediaType) filter.mediaType = mediaType;
        if (genre) filter['details.genre'] = genre;
        
        const media = await db.collection('media').find(filter).toArray();
        res.json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET single media item by ID
router.get('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        const media = await db.collection('media').findOne({ 
            _id: new require('mongodb').ObjectId(req.params.id) 
        });
        
        if (!media) {
            return res.status(404).json({ error: 'Media not found' });
        }
        
        res.json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create new media item
router.post('/', async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('media').insertOne(req.body);
        res.status(201).json({ 
            message: 'Media created successfully', 
            id: result.insertedId 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PATCH update media item
router.patch('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('media').updateOne(
            { _id: new require('mongodb').ObjectId(req.params.id) },
            { $set: req.body }
        );
        
        res.json({ message: 'Media updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE media item
router.delete('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        await db.collection('media').deleteOne({ 
            _id: new require('mongodb').ObjectId(req.params.id) 
        });
        
        res.json({ message: 'Media deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
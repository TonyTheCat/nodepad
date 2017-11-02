const express = require('express');
const router = express.Router();
const controllers = require('../controllers/documents');
const views = require('../views/documents/index.jade');

// Index
router.get('/', (req, res) => {
    res.render('index');
    // return controllers.getAllDocuments();
});

// Create
router.post('/', (req, res) => {});

// Read
router.get('/:id', (req, res) => {});

// Update
router.put('/:id', (req, res) => {
    res.render()
});

// Delete
router.delete('/:id', (req, res) => {});

// Export
module.exports = router;

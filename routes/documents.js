const express = require('express');
const router = express.Router();
const controllers = require('../controllers/documents');

// Index
router.get('/documents.:format', (req, res) => {
    return controllers
});

// Create
router.post('/documents.:format?', (req, res) => {});

// Read
router.get('/documents/:id.:format?', (req, res) => {});

// Update
router.put('/documents/:id.:format?', (req, res) => {
    res.render()
});

// Delete
router.delete('/documents/:id.:format?', (req, res) => {});

// Export
module.exports = router;

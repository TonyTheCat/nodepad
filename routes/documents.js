const express = require('express');
const router = express.Router();

// Index
router.get('/documents.:format', (req, res) => {});

// Create
router.post('/documents.:format?', (req, res) => {});

// Read
router.get('/documents/:id.:format?', (req, res) => {});

// Update
router.put('/documents/:id.:format?', (req, res) => {});

// Delete
router.del('/documents/:id.:format?', (req, res) => {});

// Export
module.exports = router;

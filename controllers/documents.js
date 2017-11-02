const model = require('../models/document');
const Documents = {};

Documents.getDocuments = (document_id) => model.getOne(document_id);

Documents.getAllDocuments = (pid) => model.getAll(pid);

// See: admin.js for additional tag logic.
// TODO: POSTMVP @LG - Refactor admin.js, move logic back into Documents.js

module.exports = Documents;
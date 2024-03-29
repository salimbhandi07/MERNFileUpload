'use strict';

const express = require('express');
const { upload } = require('../helpers/filehelper');
const {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
  deleteSingleFile,
} = require('../controllers/fileuploaderController');
const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.delete('/singleFile/:id', deleteSingleFile);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);

module.exports = {
  router,
};

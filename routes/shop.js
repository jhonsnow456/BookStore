/** imported our express library + core packages*/ 
const express = require('express');
const path = require('path');


/** import defined files by me */
const rootDir = require('../util/path');


const router = express.Router();


/** Our home page */
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});


// export the package
module.exports = router;
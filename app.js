/** imported our express library */ 
const express = require('express');
const bodyParser = require('body-parser');


/** import defined files by me */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


/** create our express app */
const app = express();

/** Parsing the code we require a parser to check whether what kind of data is given 
 * to be delt with 
 */
app.use(bodyParser.urlencoded({extended: false}));

/** defining the routes */ 
app.use(adminRoutes);
app.use(shopRoutes);

// create a server 
app.listen(3000);

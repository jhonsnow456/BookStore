/** imported our express library */ 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


/** import defined files by me */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


/** create our express app */
const app = express();

/** Parsing the code we require a parser to check whether what kind of data is given 
 * to be delt with 
 */
app.use(bodyParser.urlencoded({extended: false}));

/** Serving static pages */
app.use(express.static(path.join(__dirname, 'public')));

/** defining the routes */ 
app.use('/admin', adminRoutes); // adding admin filter
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// create a server 
app.listen(3000);

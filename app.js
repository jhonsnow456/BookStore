/** imported our express library + core packages*/ 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/** Add controller function */
const errorController = require('./controllers/error');

/** import defined files by me */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


/** add modals */
const User = require('./models/user');
const Product = require('./models/product');

/** import our db */
const sequelize = require('./util/database')

/** create our express app */
const app = express();

/** set templating engine */
app.set('view engine', 'pug');
app.set('views', './views');


/** Parsing the code we require a parser to check whether what kind of data is given 
 * to be delt with 
 */
app.use(bodyParser.urlencoded({extended: false}));

/** Serving static pages */
app.use(express.static(path.join(__dirname, 'public')));

/** this is a middleware function */
app.use((req, res, next) => {
    User.findByPk(1)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
});

/** defining the routes */ 
app.use('/admin', adminRoutes); // adding admin filter
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

// create a server 
sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

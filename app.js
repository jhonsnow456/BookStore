/** imported our express library + core packages*/
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/** Add controller function */
const errorController = require("./controllers/error");
const sequelize = require("./utils/database");

/** Import Modules to build relation */
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

/** import defined files by me */
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

/** create our express app */
const app = express();

/** set templating engine */
app.set("view engine", "pug");
app.set("views", "./views");

/** Parsing the code we require a parser to check whether what kind of data is given
 * to be delt with
 */
app.use(bodyParser.urlencoded({ extended: false }));

/** Serving static pages */
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

/** defining the routes */
app.use("/admin", adminRoutes); // adding admin filter
app.use(shopRoutes);

app.use(errorController.get404);

/** forming associations */
User.hasMany(Product);
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Aman", email: "test@test.com" });
    }

    return user;
  })
  .then((user) => {
    // console.log(user);
    return user.createCart();
  })
  .then((cart) => {
    // create a server
    app.listen(process.env.PORT || 3000, function () {
      console.log(
        "Express server on port %d in %s mode",
        this.address().port,
        app.settings.env
      );
    });
  })
  .catch((err) => console.log(err));

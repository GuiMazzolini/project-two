// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "project-two";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const session = require("express-session")
const MongoStore = require("connect-mongo")

  // ℹ️ Middleware that adds a "req.session" information and later to check that you are who you say you are 😅
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super hyper secret key",
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
      }),
    })
  );

const projectRoutes = require("./routes/project.routes");
app.use("/", projectRoutes);
// 👇 Start handling routes here

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const webRoutes = require("./routes/webdev.routes");
app.use("/", webRoutes);

const designRoutes = require("./routes/uidesign.routes");
app.use("/", designRoutes);

const profileRoutes = require("./routes/profile.routes");
app.use("/", profileRoutes);

const dataRoutes = require("./routes/data.routes");
app.use("/", dataRoutes);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

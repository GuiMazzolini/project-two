require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "project-two";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const session = require("express-session")
const MongoStore = require("connect-mongo")

  app.use(
    session({
      secret: "super hyper secret key",
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/iron-library",
        clientPromise: mongoose.connection.asPromise(),
      }),
    })
  );

const projectRoutes = require("./routes/project.routes");
app.use("/", projectRoutes);

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

require("./error-handling")(app);

module.exports = app;

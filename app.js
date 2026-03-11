import express from "express";
import contactRouter from "./routes/contactRouter.js";
import indexRouter from "./routes/indexRouter.js";
import profileRouter from "./routes/profileRouter.js";
import dogRouter from "./routes/dogRouter.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);
const app = express();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

// Configuring EJS and route for dynamic html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});
app.get("/about", (req, res) => {
  res.render("about", { name: "Camulogène" });
});

// Serving Static Assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/about", profileRouter);
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/dog", dogRouter);
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`My server is listening to the PORT n°${PORT}`);
  }
});

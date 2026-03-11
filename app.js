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

app.use("/about", profileRouter);
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/dog", dogRouter);
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

// We recognize error middleware function as his first parameter being 'err', and as a four must-be present parameters.
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

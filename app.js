import express from "express";
import contactRouter from "./routes/contactRouter.js";
import indexRouter from "./routes/indexRouter.js";
import profileRouter from "./routes/profileRouter.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);

const app = express();

app.use("/about", profileRouter);
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`My server is listening to the PORT n°${PORT}`);
  }
});

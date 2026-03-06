import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"), (err) => {
    if (err) {
      console.error(err);
      res.end();
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"), (err) => {
    if (err) {
      console.error(err);
      res.end();
    }
  });
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"), (err) => {
    if (err) {
      console.error(err);
      res.end();
    }
  });
});

app.get("/{*splat}", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"), (err) => {
    if (err) {
      console.error(err);
      res.end();
    }
  });
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`My server is listening to the PORT n°${PORT}`);
  }
});

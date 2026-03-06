import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.sendFile("/Users/lamalice/Desktop/express-project/index.html", (err) => {
    if (err) {
      console.error(err);
      res.end();
    }
  });
});

export default indexRouter;

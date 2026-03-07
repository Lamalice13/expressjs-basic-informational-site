import { Router } from "express";
import { getAuthorById } from "./controllers/profileControllers";

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  res.sendFile("/Users/lamalice/Desktop/express-project/about.html", (err) => {
    if (err) {
      console.log(err);
      res.end();
    }
  });
});

profileRouter.get("/:profileId", getAuthorById);

export default profileRouter;

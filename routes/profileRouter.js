import { Router } from "express";
import { getProfileById } from "../controllers/profileController.js";

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  res.sendFile("/Users/lamalice/Desktop/express-project/about.html", (err) => {
    if (err) {
      console.log(err);
      res.end();
    }
  });
});

profileRouter.get("/:profileId", getProfileById);

export default profileRouter;

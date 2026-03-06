import { Router } from "express";

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  res.sendFile("/Users/lamalice/Desktop/express-project/about.html", (err) => {
    if (err) {
      console.log(err);
      res.end();
    }
  });
});

profileRouter.get("/:profileId", (req, res) => {
  const { profileId } = req.params;
  res.send(`Here's the profile's id: ${profileId}`);
});

export default profileRouter;

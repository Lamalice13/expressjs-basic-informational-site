import { Router } from "express";

const contactRouter = Router();

contactRouter.get("/", (req, res) => {
  res.sendFile(
    "/Users/lamalice/Desktop/express-project/contact.html",
    (err) => {
      if (err) {
        console.log(err);
        res.end();
      }
    }
  );
});
export default contactRouter;

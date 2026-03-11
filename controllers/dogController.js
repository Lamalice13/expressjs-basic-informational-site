import db from "../db.js";
import { customNotFoundError } from "../errors/customNotFoundError.js";

export async function getDogById(req, res) {
  const { dogId } = req.params;

  const dog = await db.getDogById(Number(dogId));

  if (!dog) {
    throw new customNotFoundError("Dog not found");
  }

  res.send(`Dog name: ${dog.breed}`);
}

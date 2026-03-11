import db from "../db.js";
import { customNotFoundError } from "../errors/customNotFoundError.js";

export async function getProfileById(req, res) {
  const { profileId } = req.params;

  const profile = await db.getProfileById(Number(profileId));

  if (!profile) {
    throw new customNotFoundError("Author not found");
  }
  res.send(`Profile name: ${profile.name}`);
}

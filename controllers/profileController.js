import db from "../db";

export async function getProfileById(req, res) {
  const { profileId } = req.params;

  const profile = await db.getProfileById(Number(profileId));

  if (!profile) {
    res.status(400).send("Profile not found!");
    return;
  }

  res.send(`Profile name: ${profile}`);
}

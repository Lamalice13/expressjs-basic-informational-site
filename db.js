const profiles = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getProfileById(profileId) {
  return profiles.find((profile) => profile.id === profileId);
}

export default { getProfileById };

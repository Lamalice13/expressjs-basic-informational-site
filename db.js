const profiles = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const dogs = [
  { id: 1, breed: "Greyhound racing" },
  { id: 2, breed: "Border Collies" },
  { id: 3, breed: "Greyhounds" },
];

async function getProfileById(profileId) {
  return profiles.find((profile) => profile.id === profileId);
}

async function getDogById(dogId) {
  return dogs.find((dog) => dog.id == dogId);
}

export default { getProfileById, getDogById };

// Fixture data
if (Animals.find().count() === 0) {
  Animals.insert({
      rank: 3,
      name: "Cat"
  });
  Animals.insert({
      rank: 1,
      name: "Dog"
  });
  Animals.insert({
      rank: 2,
      name: "Zebra"
  });
}
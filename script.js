const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a copy of the players array
const team1 = [...players];

// Create a copy of the person object
const cap1 = { ...person };

// Write your solution here!
// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Functions that modify the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
  console.log("After destructivelyAppendCat:", cats);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log("After destructivelyPrependCat:", cats);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log("After destructivelyRemoveLastCat:", cats);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log("After destructivelyRemoveFirstCat:", cats);
}

// Functions that return new arrays without modifying the original
function appendCat(name) {
  const newCats = [...cats, name];
  console.log("After appendCat:", newCats);
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  console.log("After prependCat:", newCats);
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  console.log("After removeLastCat:", newCats);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  console.log("After removeFirstCat:", newCats);
  return newCats;
}

// Testing the functions
console.log("Initial cats array:", cats);
destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();

// Export functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};


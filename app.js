const greeting = () => {
  let message = "Hello, World!";
  return message;
};

const greeting2 = () => {
  let message = "Goodbye, cruel World!";
  return message;
};

const groceries = [
  "1 dozen eggs",
  "milk",
  "2 boxes golden raisins",
  "2 containers whipped butter",
  "oatmeal",
  "chick pea paella",
  "sparkling ice drinks",
  "fruit juice",
  "2 lbs. seedless grapes",
  "2 lb. navel oranges",
  "10 bananas",
  "1 bunch broccoli",
  "2 boxes no sugar added crunchy Klondike bars",
  "2 cannisters ground French Vanilla Coffee"
];

module.exports = {
  greeting,
  greeting2,
  groceries
};
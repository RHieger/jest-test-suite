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

const secondsPerDay = () => {
  let totalSeconds = 24 * 60 * 60;
  return totalSeconds;
}

const millisecondsPerDay = () => {
  let totalMilliseconds = (24 * 60 * 60) * 1_000;
  return totalMilliseconds;
};

const millisecondsPerYear = () => {
  let totalMilliseconds = 86_400_000 * 365.25;
  return totalMilliseconds;
};

const people = [
  { name: "Joe Smith", age: 32, sex: "male" },
  { name: "Joe Green", age: 28, sex: "female" },
  { name: "Jennifer James", age: 35, sex: "female" },
  { name: "Robert Roth", age: 52, sex: "male" }
];

const can1 = {
  contents: "kidney beans",
  ounces: 12
};

const can2 = {
  contents: "kidney beans",
  ounces: 12
};

const can3 = {
  contents: "lentils",
  ounces: 16
};

const can4 = {
  contents: "fava beans",
  ounces: 10
};

const printMessage = () => {
  return null;
};

const printMessage2 = () => {
  const message = "I have something to say.";
  return message;
};

const favColor1 = undefined;

const favColor2 = "purple";

const num1 = NaN;

const num2 = 365.25;

module.exports = {
  greeting,
  greeting2,
  groceries,
  secondsPerDay,
  millisecondsPerDay,
  millisecondsPerYear,
  people,
  can1,
  can2,
  can3,
  can4,
  printMessage,
  printMessage2,
  favColor1,
  favColor2,
  num1,
  num2
};

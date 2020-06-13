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

module.exports = {
  greeting,
  greeting2,
  groceries,
  secondsPerDay,
  millisecondsPerDay
};

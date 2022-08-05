var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//Find a particular item and remove it
//First use indexOf to act on item, make it a variable bc you will use it in conditionals to decide what to do with it
var removeItems = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`Sorry, no such item in this array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};
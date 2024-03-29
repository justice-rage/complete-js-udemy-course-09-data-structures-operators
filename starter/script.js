'use strict';

//////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// const openingHours  = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES6 enhanced object literals
//   openingHours,
  
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
  
//   orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//   },
  
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
  
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients)
//   },
// };

// // Lecture 118: Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'False!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// Lecture 117: Maps: Fundamentals

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', 'Italian', ['Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

//   console.log(rest.get('name'));
//   console.log(rest.get(true));
//   console.log(rest.get(1));

//   const time = 21;
//   console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//   console.log(rest.has('categories'));
//   rest.delete(2);
//   // rest.clear();
//   const arr = [1,2];
//   rest.set(arr, 'Test');
//   rest.set(document.querySelector('h1'), 'Heading');
//   console.log(rest);
//   console.log(rest.size);

//   console.log(rest.get(arr));
////////////////////////////////////

// Lecture 116: Sets

// const orderSet = new Set([
//   'Pasta', 
//   'Pizza', 
//   'Pizza', 
//   'Risotto', 
//   'Pasta', 
//   'Pizza'
// ])
// console.log(orderSet);

// console.log(new Set('Justice'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for(const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staff)
// console.log(staffUnique)
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set('justicepelteir').size)

////////////////////////////
// Coding Challenge #2
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   scorers,
// }

// Let's continue with our football betting app.

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, value] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }
// // 2. Use a loop to calculate the average odd and log it to the console (we already studid how to calculate avergaes, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       // Odd of victory Bayern Munich: 1.33
//       // Odd of draw: 3.25
//       // Odd of victory Borrussia Dortmund: 6.5

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// Get the team names directly from the game.object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names.

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      // {
        // Gnarby: 1,
        // Hummels: 1,
        // Lewandowski: 2
      // }

// Lecture 114: Looping Objects: Object Keys, Values, and Entries

/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
/*
//////////////////////////////

// Lecture 113: Optional Chaining (?.)

/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.fri.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for(const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist.');

// Arrays
// const users = [
//   {name: 'Jonas', email: 'hello@justice.io'}
// ];

const users = [];

console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty')
*/

/////////////////////////////////////

// Lecture 112: Enhanced Object Literals

/////////////////////////////////////

// Lecture 111: Looping Arrays: The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

////////////////////////////////////////////////
// Coding Challenge #1

/*
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players).
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2').
6. Write a function ('printGoals') that receives an arbitrary number of players names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of players names passed in).
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  }
}

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const team1Finals = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(team1Finals);

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`)
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 1 is more likely to win`);
//////////////////////////////////////////////
*/

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Lecture 103: Destructuring Arrays
// Lecture 104: Destructuring Objects
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Lecture 109: Logical Assignment Operators

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest2.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Lecture 108: The Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;

// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // Nullish: null and undefined (NOT 0 or ')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*
// Lecture 107: Short Circuiting (&& and ||)
console.log('--- OR ---');
// use any data type, return any data type, short-circuiting
console.log(3 || 'justice');
console.log('' || 'justice');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('--- AND ---');

console.log(0 && 'justice');
console.log(7 && 'justice')

console.log('Hello' && 23 && null && 'justice');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// Lecture 106: Rest Pattern and Paramters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1,2, ...[3,4]];

// REST, because LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
// Lecture 105: The SpreadOperator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.group(newArr);

console.log(...newArr);
console.log(newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
const newMenu2 = [restaurant.mainMenu, 'Gnocci'];
console.log(newMenu2);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets. NOT objects
const str = 'justice';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Pelteir`);

// real world example
const ingredients = [
prompt(`Let's make pasta! Ingredient 1?`), 
prompt(`Ingredient 2?`), 
prompt(`Ingredient 3?`)
];
// console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {foundedIn : 1998 ,...restaurant, founder: 'Guieseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours : hours, categories : tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // default values
// const { menu, starterMenu : starters = []} = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b);

// // nested objects
// const {fri: {open: o, close: c} } = openingHours;
// console.log(o, c);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a fucntion
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p=1, q=1, r=1] = [8];
// console.log(p, q, r);

// Complete Lecture 119: Summary: Which Data Structure to use?

// Coding Challenge #3

// Let's continue with our Football Betting App: this time, we have
// a map with a log of the events that happened during the Gamepad. 
// The values are the events themselves, and the keys are the minutes
// in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array `events` of the different game events that happened (no duplicates)
// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. 
// So remove this event from the game's event log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
// (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or 
// the second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. 
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`)

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF ] ${min}: ${event}`);
// }

///////////////////////////////////////////

// // // Lecture 122: Working with Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('justice'.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect)

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97';
// const priceUS = priceGB.replace(',' , '.');
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23.`
// console.log(announcement);
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else (console.log('Welcome aboard'));
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////////

// // Lecture 121: Working with Strings - Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, 3));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E')
//   console.log('You got the middle seat');
//   else console.log('You got lucky')
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(new String('justice'));
// console.log(typeof new String('justice'));

// console.log(typeof new String('justice').slice(1));

// // Lecture 123: Working With Strings - Part 3

// // Split and Join

// console.log('a+very+nice+string'.split('+'));
// console.log('Justice Pelteir'.split(' '));

// const [firstName, lastName] = 'Justice Douglas'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];
  
//   for(const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizeName('justice pelteir');
// capitalizeName('bob john');

// // Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return (last.padStart(str.length, '+'));
// }

// console.log(maskCreditCard(54323387857584459));
// console.log(maskCreditCard('866478394354323387857584459'));

// // Repeat
// const message2 = 'Bad weather... all departures delayed... '
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(15);

// Lecture 124: Coding Challenge #4

// Write a program that receives a list of variable 
// names written in underscore_case and convert them to camelCase.

// The input will come from a text area inserted into the DOM (see code below)
// , and conversion will happen when the button is pressed. 

// Test Data (5 separate console.log outputs)
// underscore_case
//  first_name
// some_variable 
//  calculate_age 
// delayed_departure 

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase
//  firstName
// someVariable 
//  calculateAge 
// delayedDeparture 

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for(const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
})

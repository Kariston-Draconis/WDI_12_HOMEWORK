console.log('Week One Checkpoints')
console.log('---------------')

// JS Variables
var captain = 'Jack';
var oh = 'Oh ';
var my = ', my ';
var first = oh.concat(captain);
var second = my.concat(captain);
var phrase = (first.concat(second) + '!')

console.log(phrase)

console.log('---------------')

// JS Conditionals
var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
  console.log('SOS!')
}

console.log('---------------')

// Data Structures - JS Arrays
var weekend = ['Saturday']

weekend.push('Sunday')

weekend.unshift('Friday')

var day = weekend[1]

weekend.shift()

console.log(weekend)

console.log('---------------')

// Data Structures - JS Objects
var brain = {
  energyLevel: 10,
  dream: 'electric sheep'
}

var energy = brain.energyLevel

console.log('---------------')

// JS Functions
var area = function(length, width) {
  return length * width
}

var threeByFour = area(3, 4)

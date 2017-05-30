console.log('Lifetime Supply Calculator')

var currentAge = prompt('How old are you?')
var maxAge = prompt('How old will you be when you die?')
var howMany = prompt('How many can you eat per day?')
var remainingYears = (maxAge - currentAge)

console.log('You will need ' + (remainingYears * howMany) + ' to last you until the ripe old age of ' + maxAge);

console.log("Objects Yay!")

console.log('-------------')

var recipie = {
  title: 'Mole',
  servings: 'Serves: 2',
  ingredients: ['Cinnamon', 'Cumin', 'Cocoa']
}

console.log(recipie.title)
console.log(recipie.servings)
console.log('Ingredients: ' + recipie.ingredients)

console.log('-------------')
console.log('-------------')
console.log('-------------')
console.log('-------------')

var books = [
  {
    title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true
  }, {
    title: 'On Basilisk Station', author: 'David Weber', alreadyRead: true
  }, {
    title: 'A Case Of Exploding Mangoes', author: 'Mohammed Hanif', alreadyRead: false
  }
]

var arrayLength = books.length

for (var count = 0; count < arrayLength; count++) {
  if (books[count].alreadyRead == true) {
    console.log('You already read "' + books[count].title + '" by ' + books[count].author)
  } else if (books[count].alreadyRead == false) {
    console.log('You still need to read "' + books[count].title + '" by ' + books[count].author)
  }
}

console.log('-------------')
console.log('-------------')
console.log('-------------')
console.log('-------------')

var movie = {
  title: 'Guardians Of The Galaxy',
  duration: 122,
  stars: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Bradley Cooper', 'Vin Diesel']
}

console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars ' + movie.stars)

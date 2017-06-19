# Generate a number
number = rand(0..10)

print 'Guess My Number (0-10): '
# Prompt user for a guess
guess = gets.chomp.to_i

# While the guess is incorrect
while guess != number
  puts 'wrong number'

  # Prompt user to guess again
  print 'Guess again: '
  guess = gets.chomp.to_i
end

puts 'Correct!!!'

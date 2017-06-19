operators = ['+', '-', '*', '-']

print "Welcome to the Crappy Calculator, Mk.2, please select from one of the following options. Press 0 for addition, 1 for subtraction, 2 for multiplication, 3 for division, and 4 to quit: "
operator = gets.chomp.to_i


while operator != 4
  while operator > 4
    puts "Invalid selection. Please try again."
    print "Please select from one of the following options. Press 0 for addition, 1 for subtraction, 2 for multiplication, 3 for division, and 4 to quit: "
    operator = gets.chomp.to_i
    if operator == 4
      puts "Thank you for using the Crappy Calculator, Mk.2. Goodbye."
      exit
    end
  end

  print "Enter your first number: "
  num1 = gets.chomp.to_i

  print "Enter your second number: "
  num2 = gets.chomp.to_i

  puts "The answer is: " + num1.send(operators[operator],num2).to_s

  print "Please select from one of the following options. Press 0 for addition, 1 for subtraction, 2 for multiplication, 3 for division, and 4 to quit: "
  operator = gets.chomp.to_i
end

puts "Thank you for using the Crappy Calculator, Mk.2. Goodbye."

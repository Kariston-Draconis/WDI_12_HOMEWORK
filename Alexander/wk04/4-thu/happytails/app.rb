require "pry"
require_relative "animal.rb"
require_relative "client.rb"

shelter = { animals: [], clients: [] }
relationships = { adoption: [], adopted: [] }

print "Welcome to Happy Tails. Press 1 to show all Animals, 2 to show all Clients, 3 to add an Animal, 4 to add a Client, 5 to process adoption of an Animal, 6 to list an Animal for adoption, or 7 to exit: "
menu = gets.chomp

while menu != nil
  if menu == 1
    menu = gets.chomp
  elsif menu == 2
    menu = gets.chomp
  elsif menu == 3
    menu = gets.chomp
  elsif menu == 4
    menu = gets.chomp
  elsif menu == 5
    menu = gets.chomp
  elsif menu == 6
    menu = gets.chomp
  elsif menu == 7
    menu = gets.chomp
  else
    print "Invalid selection. Please select again: "
    menu = gets.chomp
  end
end

binding.pry

# Round 1

words = ["so", "shine", "your", "light", "push", "the", "enemy", "back"]

def lengths (array)
  array.collect { |word| word.length}
end

lengths(words)


# Round 2

def transmogrifier (first, second, third)
  (first * second) ** third
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)


# Round 3

def toonify (accent, sentence)
  if accent == "daffy"
    sentence.gsub('s','th')
  elsif accent == "elmer"
    sentence.gsub('r','w')
  end
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "Be very very quiet, I'm hunting rabbits")
toonify("elmer", "I like cheese")


# Round 4

def wordReverse (sentence)
  sentence.split(" ").reverse.join(" ")
end

wordReverse("I'm going to go and eat some bread")


# Round 5

def letterReverse (sentence)
  sentence.split(" ").reverse.join(" ").reverse
end

letterReverse("I'm going to go and eat some bread")


# Round 6

def longest (array)
  array.max
end

longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

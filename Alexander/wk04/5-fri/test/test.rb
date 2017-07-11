cards = [ {pikachu: 40}, {rattata: 20}, {pidgeot: 60}, {alakazam: 80}, {butterfree: 30}, {gengar: 70}, {moltres: 100}, {vulpix: 40}, {blastoise: 80}, {hitmonchan: 50} ]

startPile = cards.reverse

pileOne = startPile.sample(3)
pileOne.each{ |card| startPile.delete card }

pileTwo = startPile.sample(3)
pileTwo.each{ |card| startPile.delete card }

pileThree = startPile.sample(3)
pileThree.each{ |card| startPile.delete card }

alfred = pileOne
peter = pileTwo

if rand.round == 0
  alfred.push(*pileThree)
  peter.push(*startPile)
else
  peter.push(*pileThree)
  alfred.push(*startPile)
end

# could also use:
# piles = cards.reverse.each_slice(3).to_a
# players = { alfred: piles.shift, peter: piles.shift }

# with
# if rand(0..1) == 0
#   players[:alfred].push(piles.shift).flatten!
#   players[:peter].push(piles.shift).flatten!
# else
#   players[:peter].push(piles.shift).flatten!
#   players[:alfred].push(piles.shift).flatten!
# end

# or
# winner = rand(0..1) == 0 ? :alfred : :peter
# loser = winner == :alfred ? :peter : :alfred
# players[winner].push(piles.shift).flatten!
# players[loser].push(piles.shift).flatten!

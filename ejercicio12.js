const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'telepathy' }
]

let power = 'telepathy'
findMutantByPower(mutants, power)

function findMutantByPower(mutants, power) {
  let count = 0
  for (let mutant of mutants) {
    if (power === mutant.power) {
      if (count === 0) {
        console.log(`These are the superheroes I've found with ${power}`)
      }
      console.log(mutant.name)
      count++
    }
  }
  if (count === 0) {
    console.log(`I haven't found any superheroes with ${power}`)
  }
}

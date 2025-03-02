const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

const oldest = findOldestXMen(xMen)
if (oldest.length === 1) {
  console.log(`The oldest xMen is ${oldest[0].name} from ${oldest[0].year}`)
} else {
  listOldest(oldest)
}

function findOldestXMen(xMen) {
  let oldest = []
  oldest.push(xMen[0])
  for (let xMan of xMen) {
    if (xMan.year < oldest[0].year) {
      oldest = [xMan]
      //Aquí he encontrado esta solución para cuando ya haya hecho un par de guardados con X año y encuentre otro mas pequeño borre lo anterior (en este caso no es así)
    } else if (xMan.year === oldest[0].year && xMan.name !== oldest[0]) {
      oldest.push(xMan)
      //Aquí el && es para que no se compare con él mismo al principio aunque podria darle una vuelta para que busque si ya existe él mismo en el array, aunque intuyo que seria mas facil en una primera funcion o algo asi
    }
  }
  return oldest
}

function listOldest(oldest) {
  console.log('')
  for (let old of oldest) {
    console.log(`One of the oldest xMen is ${old.name} from ${old.year}`)
  }
  console.log('')
}

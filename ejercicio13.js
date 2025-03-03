const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
]

//He visto que estarían mal escritas algunas de las oraciones y que dependiendo de si los nombres acaban en s o no faltaría un "'s" al final de su nombre pero creo que sabría coger el nombre, buscar si su última posición es o no es una s y luego tener este console.log o otro con la "'s"

const currentYear = new Date().getFullYear()
let actorsAge = []
calculateActorsAges(actors)
showResults(actorsAge)

function calculateActorsAges(actors) {
  for (let actor of actors) {
    let age = currentYear - actor.born
    actorsAge.push({ name: actor.name, age: age })
  }
}

function showResults(actorsAge) {
  console.log('')
  for (let actor of actorsAge) {
    console.log(`${actor.name} age is ${actor.age}`)
  }
  console.log('')
}

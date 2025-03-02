const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]

let promedio = averageMovieDuration(movies) / movies.length
console.log(`The average length of a movie is ${promedio} minutes`)

function averageMovieDuration(movies) {
  let allDurations = 0
  for (let movie of movies) {
    allDurations += movie.duration
  }
  return allDurations
}

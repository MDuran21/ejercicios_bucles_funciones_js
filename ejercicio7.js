const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

let trackSorter = {}
clasifyTracks(tracks)
console.log(trackSorter)

function clasifyTracks(tracks) {
  for (const track of tracks) {
    let genre = track.genre
    if (!trackSorter[genre]) {
      trackSorter[genre] = []
    }
    trackSorter[genre].push(track)
  }
}

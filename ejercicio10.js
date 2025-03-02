const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

let parametro = 'Ireland'
getCapital(capitals)

function getCapital(capitals) {
  if (capitals[parametro] != undefined) {
    console.log(`The capital of ${parametro} is ${capitals[parametro]}`)
  } else {
    console.log(`The capital of ${parametro} is not on this list`)
  }
}

const marvel_heros = ["thor","siderman","Ironman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)


console.log(dc_heros.concat(marvel_heros))//concat returns new arr

console.log([...dc_heros,...marvel_heros])//spread

let base_url = 'http://numbersapi.com/'
let fav_num = 5


// 1.
async function getFact() {
  res = await axios.get(`${base_url}${fav_num}/math?json`)
  console.log(res.data.text)
}
getFact()

// 2.
let nums = '1,2,3,4,5'
async function getFacts() {
  res = await axios.get(`${base_url}${nums}/math?json`)
  console.log(res.data)
}
getFacts()

// 3.
async function getFourFacts(fav_num) {
  let factPromises = [];
  for (let i = 1; i < 5; i++) {
      factPromises.push(axios.get(`${base_url}${fav_num}/math?json`))
  for (promise of factPromises) 
      factRes = await promise
      console.log(factRes.data.text)
  }
}
getFourFacts(fav_num)

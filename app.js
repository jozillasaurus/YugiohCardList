//all card list https://db.ygoprodeck.com/api/v7/cardinfo.php//

// const getInfo = async () => {
//   const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
//   try {
//     const response = await axios.get(url)
//     // console.log(response.data.data.forEach(element => console.log(element)))// i can now go through array with element.name and so
//     const list = Object.keys(response.data.data.forEach(element => console.log(element)))
//   } catch (error) {
//     console.log(`Error: ${error}`)
//   }
// }
// getInfo()

// https://cors-anywhere.herokuapp.com/
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
const input = document.querySelector('#blank')
const button = document.querySelector('#search')

button.addEventListener('click', async () => {
  let userInput = input.value
  const response = await axios.get(`${url}?&fname=${userInput}`)
  // console.log(response.data.data.forEach(element => console.log(element)))
  list(response.data.data.forEach(element => console.log(element)))
})

const cardArray = document.querySelector('.card-list')

const list = cards => {
  cards.forEach(card => {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'

    const name = document.createElement('h3')
    name.innerHTML = `${card.name}`
    cardContainer.appendChild(name)

    const image = document.createElement('img')
    image.src = `${card.card_image(image_url_small)}`
    cardContainer.appendChild(image)

    cardArray.appendChild(cardContainer)
  });
}
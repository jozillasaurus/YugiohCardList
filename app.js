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
// .forEach(element => console.log(element)) line 24
// https://cors-anywhere.herokuapp.com/

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
const input = document.querySelector('#blank')
const button = document.querySelector('#search')

button.addEventListener('click', async () => {
  let userInput = input.value
  const response = await axios.get(`${url}?&fname=${userInput}`)
  // console.log(response.data.data.forEach(element => console.log(element)))
  list(response.data.data)
})

const cardArray = document.querySelector('.card-list')

const list = cards => {
  removeCards()
  cards.forEach(card => {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'

    const name = document.createElement('h3')
    name.innerHTML = `${card.name}`
    cardContainer.appendChild(name)

    const image = document.createElement('img')
    image.src = `${card.card_images[0].image_url_small}`
    cardContainer.appendChild(image)

    cardArray.appendChild(cardContainer)

    cardContainer.addEventListener('click', async () => {
      document.getElementById('div').onclick = function changeContent() {
        document.image.src = `${card.card_images[0].image_url}`
      }
    })
  });
}


function removeCards() {
  const oldCard = document.querySelector('.card-list')
  while (oldCard.lastChild) {
    oldCard.removeChild(oldCard.lastChild)
  }
}

function expandImg() {

}
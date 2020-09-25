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
// part 2
// const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
// const input = document.querySelector('#blank')
// const button = document.querySelector('#search')

// button.addEventListener('click', async () => {
//   let userInput = input.value
//   const response = await axios.get(`${url}?&fname=${userInput}`)
//   // console.log(response.data.data.forEach(element => console.log(element)))
//   list(response.data.data)
// })

// pre-starting a new
// const cardArray = document.querySelector('.card-list')
// const cardContainer = document.querySelector('.card-container')
// const name = document.querySelector('card-name')
// const list = cards => {
//   removeCards()
//   cards.forEach(card => {
//     // const cardContainer = document.getElementsByClassName('card-container')
//     // cardContainer.className = 'card-container'

//     // const name = document.querySelector('h3')
//     name.innerHTML = `${card.name}`
//     cardContainer.appendChild(name)

//     const image = document.createElement('img')
//     image.src = `${card.card_images[0].image_url_small}`
//     cardContainer.appendChild(image)

//     // cardArray.appendChild(cardContainer)

//   });
// }
// function removeCards() {
//   const oldCard = document.querySelector('.card-list')
//   while (oldCard.lastChild) {
//     oldCard.removeChild(oldCard.lastChild)
//   }
// }

// part 3-steve help


//all card list https://db.ygoprodeck.com/api/v7/cardinfo.php//
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
const searchBar = document.querySelector('form')
searchBar.addEventListener('submit', getData)
async function getData(e) {
  e.preventDefault()
  const userInput = document.querySelector('#blank').value
  try {
    const response = await axios.get(`${url}?&fname=${userInput}`)
    let data = response.data.data
    // console.log(data)
    appendData(data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
function appendData(data) {
  removeCards()
  data.forEach(card => {
    let cardList = document.querySelector('.card-list')
    let cardDataContainer = document.createElement('div')
    let cardTitle = document.createElement('h5')
    cardTitle.textContent = card.name
    cardDataContainer.append(cardTitle)
    let cardImage = document.createElement('img')
    cardImage.src = card.card_images[0].image_url_small
    cardDataContainer.append(cardImage)
    cardList.append(cardDataContainer)
    //Doesn't help--
    // let allImg = document.querySelectorAll('img')
    // allImg.forEach(element => {
    //   console.log(element)

    cardImage.addEventListener('click', () => {
      //Doesn't help--
      // console.log(card.card_images)
      // let eachImage = card.card_images
      // console.log('image',card.card_images[0].image_url)
      if (cardImage.src != card.card_images[0].image_url) {
        cardImage.src = card.card_images[0].image_url
      } else {
        cardImage.src = card.card_images[0].image_url_small
      }
    })
    // })


  });
}
function bigImage(card) {
  // let imgList = document.querySelectorAll('img')
  // console.log("line 42", card)
  // card.src = card.card_images[0].image_url
}
function removeCards() {
  const oldCard = document.querySelector('.card-list')
  while (oldCard.lastChild) {
    oldCard.removeChild(oldCard.lastChild)
  }
}
// cards.forEach(card => {
//   name.textContent = `${card.name}`
//   image.src = `${card.card_images[0].image_url_small}`
// });




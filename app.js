//all card list https://db.ygoprodeck.com/api/v7/cardinfo.php//

const getInfo = async () => {
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  try {
    const response = await axios.get(url)
    console.log(response.data.data.forEach(element => console.log(element)))// i can now go through array with element.name and so
    // const list = Object.keys(response.data.data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getInfo()




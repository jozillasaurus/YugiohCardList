
# Project Overview

## Project Name

Yugioh Card List

## Project Description

Lets you go through all Yugioh cards and view their description, if they are limited or banned, and save your favorites for later purchase.


## API and Data Sample

[https://db.ygoprodeck.com/api/v7/cardinfo.php] 
```
            "id": 76794549,
            "name": "Astrograph Sorcerer",
            "type": "Pendulum Effect Monster",
            "desc": "[ Pendulum Effect ]\r\nDuring your Main Phase: You can destroy this card, and if you do, take 1 \"Stargazer Magician\" from your hand or Deck, and either place it in your Pendulum Zone or Special Summon it. You can only use this effect of \"Astrograph Sorcerer\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf a card(s) you control is destroyed by battle or card effect: You can Special Summon this card from your hand, then you can choose 1 monster in the Graveyard, Extra Deck, or that is banished, and that was destroyed this turn, and add 1 monster with the same name from your Deck to your hand. You can banish this card you control, plus 4 monsters from your hand, field, and/or Graveyard (1 each with \"Pendulum Dragon\", \"Xyz Dragon\", \"Synchro Dragon\", and \"Fusion Dragon\" in their names); Special Summon 1 \"Supreme King Z-ARC\" from your Extra Deck. (This is treated as a Fusion Summon.)",
            "atk": 2500,
            "def": 2000,
            "level": 7,
            "race": "Spellcaster",
            "attribute": "DARK",
            "archetype": "Magician",
            "scale": 1,
            "card_sets": [
                {
                    "set_name": "Pendulum Evolution",
                    "set_code": "PEVO-EN001",
                    "set_rarity": "Ultra Rare",
                    "set_rarity_code": "(UR)",
                    "set_price": "1.47"
                }
            ],
            "banlist_info": {
                "ban_tcg": "Banned",
                "ban_ocg": "Limited"
            },
            "card_images": [
                {
                    "id": 76794549,
                    "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/76794549.jpg",
                    "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/76794549.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.99",
                    "tcgplayer_price": "0.87",
                    "ebay_price": "1.19",
                    "amazon_price": "1.27",
                    "coolstuffinc_price": "0.49"
                }
            ]
 ```
## Wireframes

[https://wireframe.cc/EH5Xk9]

[https://wireframe.cc/kj9kMU]

### MVP/PostMVP
 
#### MVP 

- Built with HTML, CSS, and JavaScript
- Styled using Flexbox or Grid
- Find external api
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM
- Render data on page
- Implement responsive design using media query/breakpoint (mobile)
- Deployed site to a hosting service like Github Pages
- Make commits to GitHub every day
- A README.md file that contains project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i
- When clicking on the card it gives you a larger version of the imgage that gives you a more readableresolutionto be able to read the description (some the the descriptions are essay length, that will throw off the flow of the cards organization when displayed on the screen).

#### PostMVP  
- Menu bar
- Deck builder

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prepare READ.ME to presesnt to team leader/Get project idea approved | Incomplete
|Sept 21| Start building the skeleton(HTML,JS)/ Test that my external API is connected and working | Incomplete
|Sept 22| Making sure I have all the right pieces I want(buttons, extension, side menu, etc.) Connecting info from API to where I want it to go   | Incomplete
|Sept 23| Using CSS (flexbox) to make sure cards do not overlap and are evenly spaced out in columns of 4 or 5 | Incomplete
|Sept 24| Media Query and any final bugs that might show up | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

[https://wireframe.cc/e4nbjH]

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Approval | H | 3hrs| 2hrs 25min | 2hrs 25min |
| HTML base, setting up the api to be able to retrieve data | H | 3hrs| 2hrs 10min | 2hrs 10min |
| Being able to pull information from api by name and image | H | 3hrs| 3hrs 10min | 3hrs 10min|
| Fixed cors issue/ Debugged:image not receiving | H | 3hrs| 2hrs 56min | 2hrs 56 |
| worked on removing old child when making a new search/ Added click to enlarge pic function | H | 3hrs| 2hrs 10min | 2hrs 10min |
| Debugging enlarging pic on click because there are two different imagges | H | 3hrs| 4hrs 12min | 4hrs 12min |
| Last minute CSS adjustments | H | 3hrs| 2hrs | 2hrs |
| Total | H | 21hrs| 19hrs 3min| 19hrs 3min |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
cardImage.addEventListener('click', () => {
      if (cardImage.src != card.card_images[0].image_url) {
        cardImage.src = card.card_images[0].image_url
      } else {
        cardImage.src = card.card_images[0].image_url_small
      }
```

## Change Log
N/A

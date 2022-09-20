document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cards = [
  { name: 'fries',
    img: 'src/images/fries.png',
  },
  { name: 'cheeseburger',
    img: 'src/images/cheesburger.png',
  },
  { name: 'ice-cream',
    img: 'src/images/ice-cream.png',
  },
  { name: 'pizza',
    img: 'src/images/pizza.png',
  },
  { name: 'milkshake',
    img: 'src/images/milkshake.png',
  },
  { name: 'hotdog',
    img: 'src/images/hotdog.png',
  },
  { name: 'fries',
    img: 'src/images/fries.png',
  },
  { name: 'cheeseburger',
    img: 'src/images/cheesburger.png',
  },
  { name: 'ice-cream',
    img: 'src/images/ice-cream.png',
  },
  { name: 'pizza',
    img: 'src/images/pizza.png',
  },
  { name: 'milkshake',
    img: 'src/images/milkshake.png',
  },
  { name: 'hotdog',
    img: 'src/images/hotdog.png',
  },
]

cards.sort(() => 0.5 - Math.random())  //miks cards
console.log(cards)

const grid = document.querySelector('.grid')

function createBoard() {
  for (let i = 0; i < cards.length; i++){
    const card = document.createElement('img')
    cards.setAttribute('src', 'src/images/blanj.png')
    cards.setAttribute('data-id', i)
  }
}
})
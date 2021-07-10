
let baseURL = 'https://deckofcardsapi.com/api/deck';
  
// 1.
// $.getJSON(`${baseURL}/new/draw/`).then(data => {
//     let { suit, value } = data.cards[0];
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
// });
async function getCard(deckId) {
    res = await axios.get(`${baseURL}/${deckId}/draw/`)
    let { suit, value } = res.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }
  getCard("new")

// 2.
async function get2Cards() {
    let res1 = await axios.get(`${baseURL}/new/draw/`);
    let card1 = res1.data.cards[0];
    let { suit, value } = card1;
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    getCard(res1.data.deck_id) // gets second card using above function
  }
  get2Cards()


// 3. 
async function startup() {
    let $btn = $('button');
    let $deckDiv = $('#deck_div');
  
    let deckInfo = await $.getJSON(`${baseURL}/new/shuffle/`)
    let deckId = deckInfo.deck_id
  
    $btn.on('click', async function() {
        let cardInfo = await $.getJSON(`${baseURL}/${deckId}/draw/`)
        let cardSrc = cardInfo.cards[0].image;
        $deckDiv.append(
            $('<img>', {src: cardSrc, css: {
                    position: 'absolute',
                    transform: 'translate(100px, 100px)'
                }
            })
        );

    });  
}    
startup()
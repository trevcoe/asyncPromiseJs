$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1 
    async function reqCard() {
        let data = await $.getJSON (`${baseURL}/new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
  // 2.
    async function reqCard2(){
        let firstCardData = await $.getJSON(`${baseURL}/new/draw`);
        let deckId = firstCardData.deck_id;
        let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw`);
        [firstCardData, secondCardData].forEach(card => {
            let { suit, value} = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }
    // 3 
    //toughie...

});
const hands = []

let shuffle = (players) => {
    const deck = [' 7 of Spades',  '8 of Spades', ' 9 of Spades', ' 10 of Spades', ' Jack of Spades', ' Queen of Spades', ' King of Spades', ' Ace of Spades', ' 7 of Hearts', ' 8 of Hearts', ' 9 of Hearts', ' 10 of Hearts', ' Jack of Hearts', ' Queen of Hearts', ' King of Hearts', ' Ace of Hearts', ' 7 of Clubs', ' 8 of Clubs', ' 9 of Clubs', ' 10 of Clubs', ' Jack of Clubs', ' Queen of Clubs', ' King of Clubs', ' Ace of Clubs', ' 7 of Diamonds', ' 8 of Diamonds', ' 9 of Diamonds', ' 10 of Diamonds', ' Jack of Diamonds', ' Queen of Diamonds', ' King of Diamonds', ' Ace of Diamonds'];
    // reorganize deck with nested array for point-value, color, and face (something like [[K,S,10],[A,S,11],[2,D,2]...])
    const playCards = []
    for (let i = 0; i < players * 3 + 3; i++) {
        let draw = Math.floor((Math.random() * deck.length))
        playCards.push(deck[draw])
        deck.splice(draw, 1)
    }

    for (let j = 0; j < players+1; j++){
        hands.push([playCards[0],playCards[1],playCards[2]])
        playCards.shift()
        playCards.shift()
        playCards.shift()
    }

}

let showHand =(playerNumber)=>{
    
    document.getElementById("tafel").innerHTML = (`You have the following cards in hand:${hands[playerNumber]} ,`);
     
    document.getElementById("hand").innerHTML = ( `and the following cards are on the table:${hands[0]}` );
    // change so it changes card images in html

    //add functionality to change cards (buttons/ checkmarks?)
    }


shuffle(1)
showHand(1)
let card = [[K,S,10],[A,S,11],[2,D,2]]
document.getElementById("card1").src = (`./cards/${card[0][0]}${card[0][1]}`)
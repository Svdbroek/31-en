const hands = []

let shuffle = (players) => {
   
    const deck =[['7','S',7],['8','S',8],['9','S',9],['10','S',10],['J','S',10],['Q','S',10],['K','S',10],['A','S',11],['7','C',7],['8','C',8],['9','C',9],['10','C',10],['J','C',10],['Q','C',10],['K','C',10],['A','C',11],['7','H',7],['8','H',8],['9','H',9],['10','H',10],['J','H',10],['Q','H',10],['K','H',10],['A','H',11],['7','D',7],['8','D',8],['9','D',9],['10','D',10],['J','D',10],['Q','D',10],['K','D',10],['A','D',11]]
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
    //tablecards
    console.log(hands)
    document.getElementById("cardt1").src = (`./cards/${hands[0][0][0]}${hands[0][0][1]}.png`)
    document.getElementById("cardt2").src = (`./cards/${hands[0][1][0]}${hands[0][1][1]}.png`)
    document.getElementById("cardt3").src = (`./cards/${hands[0][2][0]}${hands[0][2][1]}.png`)
    
    //hand cards
    document.getElementById("cardh1").src = (`./cards/${hands[playerNumber][0][0]}${hands[playerNumber][0][1]}.png`)
    document.getElementById("cardh2").src = (`./cards/${hands[playerNumber][1][0]}${hands[playerNumber][1][1]}.png`)
    document.getElementById("cardh3").src = (`./cards/${hands[playerNumber][2][0]}${hands[playerNumber][2][1]}.png`)

    //add functionality to change cards (buttons/ checkmarks?)
    }


shuffle(3)
showHand(1)

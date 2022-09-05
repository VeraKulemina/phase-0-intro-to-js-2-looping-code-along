const cards = [];
cards.unshift("Charlie", "Samip", "Ali");
function writeCards(cards, event) {
    const message = [];
    for (let a = 0; a < cards.length; a++){
        message.push(`Thank you, ${cards[a]} for the wonderful ${event} gift!`);
       
    }
    return message;
} 
console.log(writeCards(cards, "birthday"));

let number = 5;
debugger;
function countDown(number) {
    while (number > 0) {
    console.log(number--);
    debugger;

}
    return number;
}
countDown(number)
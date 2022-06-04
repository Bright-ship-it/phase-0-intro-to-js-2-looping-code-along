// Code your solutions in this file
function writeCards(listFriends, surprise){
    let surpriseCard = [];
    for (let i=0; i<listFriends.length;i++){
      surpriseCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${surprise} gift!`);
    }

    return surpriseCard;
}

writeCards(["Guadalupe", "Olli", "Aki"], "surprise");


function countDown(number) {
  while (number >= 0) {
      console.log(number);
      number--;
  }
}

countDown(number);
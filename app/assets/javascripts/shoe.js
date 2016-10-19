var Shoe = function(options){
  this.allCards = [];
  this.createDecks(options.numOfDecks)
};

Shoe.prototype = {
  createDecks: function(num){
    for(var i = 0; i< num; i++){
      var deck = new Deck();
      for(var j = 0; j < deck.cards.length; j++){
        this.allCards.push(deck.cards[j]);
      }
    }
  }
};
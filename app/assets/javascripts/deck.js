var Deck = function(options){
  this.cards = [];
  this.createCards();
};

Deck.prototype = {
  createCards: function(){
    this.createTwoThroughTen();
    this.createRoyalsAndAces();
  },
  createTwoThroughTen: function(){
    var suites = this.suites();
    //iterate from 2 to 10
    for(var i = 2; i < 11; i++){
      for(var j = 0; j < suites.length; j++){
        var countValue;
        if(i < 7){
          //for values 2-6
          countValue = 1;
        } else if(i < 10){
          //for values 7-9
          countValue = 0;
        } else {
          //for value 10
          countValue = -1;
        }
        this.cards.push(new Card({value: i, suite: suites[j], countValue: countValue}));
      }
    }
  },
  createRoyalsAndAces: function(){
    var suites = this.suites();
    var cardsToCreate = ["jack", "queen", "king", "ace"];
    for(var i = 0; i < cardsToCreate.length; i++){
      for(var j = 0; j < suites.length; j++){
        this.cards.push(new Card({value: cardsToCreate[i], suite: suites[j], countValue: -1}));
      }
    }
  },
  suites: function(){
    return ["hearts", "spades", "diamonds", "clubs"];
  }
};
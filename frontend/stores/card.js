var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var CardStore = new Store(AppDispatcher);

var _allCards = [];

var addCompanyQuestions = function(payload){
  
};

var shuffle = function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};

CardStore.buildDecks = function(numberOfDecksToBuild){
  var shoe = new Shoe({numOfDecks: numberOfDecksToBuild});
  _allCards = shuffle(shoe.allCards);
  return _allCards;
};

CardStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    // case QuestionConstants.RECEIVE_COMPANY_AND_QUESTIONS:
//       addCompanyQuestions(payload);
//       QuestionStore.__emitChange();
//       break;
    
  }
}

module.exports = CardStore;
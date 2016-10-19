var Card = function(options){
  this.value = options.value;
  this.suite = options.suite;
  this.countValue = options.countValue;
  this.imageSrc = this.assignImageSrc(options);
};

Card.prototype = {
  assignImageSrc: function(options){
    return this.value + "_of_" + this.suite + ".svg";
  }
};
interface Array<T> {
  square(): Array<T> ;
}

Array.prototype.square = function() {
  return this.map(e => e*e)
}
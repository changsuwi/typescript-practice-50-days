interface Array<T> {
  at(index: number): T ;
}

Array.prototype.at = function(index: number) {
  if(Number.isNaN(index)) {
    return undefined;
  }
  if(!Number.isInteger(index)) {
    index = index > 0 ? Math.floor(index) : Math.ceil(index);
  }
  if(index < 0) {
    index = this.length + index;
  }
  
  return this[index];
}


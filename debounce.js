function debounce(fn, delay){
  var timer = null,
    self = this;
  return function(){
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(self, args);
    }, delay)
  }
}

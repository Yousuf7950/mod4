// (function(window){
// var goodbye={};
// var greet="Good Bye ";

// goodbye.speak=function(name)
// {
// 	console.log(greet + " "+name);
// }
// window.goodbye=goodbye;
// })(window);
(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);

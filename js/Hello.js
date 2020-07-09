// (function(window){
// var Hello={};
// var greet="Hello ";

// Hello.speak=function(name)
// {
// 	console.log(greet + " "+name);
// }
// window.Hello=Hello;
// })(window);
(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);


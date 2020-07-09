// var names=["Jaakov","John","Alexa","Abyss","Jane","Yaakov"];
// for(var i in names)
// {
// 	var firstLetter=((names[i]).charAt(0)).ToLowerCase();
// 	if(firstLetter=='j')
// 	{
// 		window.goodbye.speak(names[i]);
// 	} else{
// 		window.Hello.speak(names[i]);
// 	}
// 	console.log("HEllo00")
// }
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);


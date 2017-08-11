var stringAnswers = "Yes, No, Without a doubt, Most likely, Ask again later, Concentrate and ask again, Cannot predict now, Don't count on it, My sources say no, Very doubtful";
var button = document.getElementById('predictionBtn');
var textContainer = document.getElementById('textContainer');
var image = document.getElementById('image');

function getAnswer(){
	var counter = Math.round(Math.random() * (10 - 1));
	var split = stringAnswers.split(",");
	var answer = split[counter];

	textContainer.innerHTML = answer;
};

button.addEventListener('click', function(){
	getAnswer();
})

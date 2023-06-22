// Assignment 1 | COMP1073 Client-Side JavaScript



/* Variables

-------------------------------------------------- */

//Buttons to generate words 

const buttonOne = document.querySelector('.btn-one')
const buttonTwo = document.querySelector('.btn-two')
const buttonThree = document.querySelector('.btn-three')
const buttonFour = document.querySelector('.btn-four')
const buttonFive = document.querySelector('.btn-five')

// buttons to play, randomize and clear
const buttonClear = document.querySelector('.clear')
const buttonSurpise = document.querySelector('.surprise')
const content = document.querySelector('.content')
let sentence;
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('.speak');
let textToSpeak = [];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

//Function-Btn-One

function pressOne(){

	let nouns = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My teacher', 'The elephant', 'The cat']

	let word = nouns[Math.floor(Math.random()*nouns.length)];
	//textToSpeak.push(word);
	textToSpeak[0]=word
	console.log(textToSpeak)

}
//Function-Btn-Two
function pressTwo(){
	let verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed']

	let word = verbs[Math.floor(Math.random()*verbs.length)];
	textToSpeak[1]=word
	console.log(textToSpeak)

	
}

//Function-Btn-Three
function pressThree(){
	let adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat']

	let word = adjective[Math.floor(Math.random()*adjective.length)];
	textToSpeak[2]=word
	console.log(textToSpeak)

}

//Function-Btn-Four
function pressFour(){
	let nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm']
	
	let word = nouns2[Math.floor(Math.random()*nouns2.length)];
	textToSpeak[3]=word
	console.log(textToSpeak)

}
//Function-Btn-Five
function pressFive(){
	let places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']

	let word = places[Math.floor(Math.random()*places.length)];
	textToSpeak[4]=word;
	console.log(textToSpeak);

}

//Function-Btn-clear
function pressClear(){
	textToSpeak = [];
	console.log(textToSpeak);

}

//Function to display text
function displayText(){
	
	content.innerHTML = textToSpeak
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);
	displayText();
});

// The click event handler for the btn-one
buttonOne.addEventListener('click',function () {
	pressOne();
	displayText();
});

// The click event handler for the btn-two
buttonTwo.addEventListener('click',function () {
	pressTwo();
	displayText();
});

// The click event handler for the btn-three
buttonThree.addEventListener('click',function () {
	pressThree();
	displayText();
});

// The click event handler for the btn-four
buttonFour.addEventListener('click',function () {
	pressFour();
	displayText();
});

// The click event handler for the btn-five
buttonFive.addEventListener('click',function () {
	pressFive();
	displayText();
});

// The click event handler for the btn-clear
buttonClear.addEventListener('click',function () {
	pressClear();
	displayText();
});

// The click event handler for the btn-surprise
buttonSurpise.addEventListener('click',function () {
	pressOne();
	pressTwo();
	pressThree();
	pressFour();
	pressFive();
	displayText();
});
//--------------------------------------//



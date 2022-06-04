var num = document.querySelectorAll(".drum").length;

for(var i=0; i<num; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", getMsg);

	function getMsg() {
		// alert("I got clicked");
		var temp = this.innerHTML;

		makeSound(temp);

		animation(temp);
	}
}

document.addEventListener("keypress", function(event){
	
	makeSound(event.key);

	animation(event.key);

});

function makeSound(key){
	switch(key) {
			case "w" :
				var audio = new Audio("sounds/tom-1.mp3");
				audio.play();
				break;
			
			case "a" :
				var audio = new Audio("sounds/tom-2.mp3");
				audio.play();
				break;

			case "s" :
				var audio = new Audio("sounds/tom-3.mp3");
				audio.play();
				break;

			case "d" :
				var audio = new Audio("sounds/tom-4.mp3");
				audio.play();
				break;

			case "j" :
				var audio = new Audio("sounds/snare.mp3");
				audio.play();
				break;

			case "k" :
				var audio = new Audio("sounds/crash.mp3");
				audio.play();
				break;

			case "l" :
				var audio = new Audio("sounds/kick-bass.mp3");
				audio.play();
				break;

			default :
				break;

		}
}
		

function animation(pressedKey){

	var activateBtn = document.querySelector("." + pressedKey);

	activateBtn.classList.add("pressed");

	setTimeout(function(){
		activateBtn.classList.remove("pressed");
	}, 50)
}
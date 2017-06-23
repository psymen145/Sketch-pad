function createCanvas(gridSize){
	$pixel = $('<div class="pixel"></div>');
	sizeOfPixel = 700/gridSize;

	for(let i = 0; i < gridSize * gridSize; i++){
		$('#canvas').append($pixel.clone());
	}

	$('.pixel').height(700/gridSize);
	$('.pixel').width(700/gridSize);
}

function createButtons(){
	$('#start').remove();
	$('.buttons').append('<button type="button" id="colorButton" name="colorButton" style="padding: 10px; margin-right:5px">Rainbow Color</button>');
	$('.buttons').append('<button type="button" id="eraseButton" name="eraseButton" style="padding: 10px; margin-right:5px">Eraser</button>');
	$('.buttons').append('<button type="button" id="blackButton" name="blackButton" style="padding: 10px; margin-right:5px">Black Color</button>');
}

function randomGenerator(){
	var possibleChoice = "0123456789ABCDEF";
	var color = '#';
	for(let i = 0; i < 6; i++){
		color += possibleChoice[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}

$(document).ready(function(){
	var askForSize = "What is the size of your canvas? (1-100)";
	var invalidSizeMsg = "Sorry, you entered an incorrect size. Default size is now 100 x 100";
	var gridSize;
	var colorChoice = "#000000";
	var randomColor = false;

	//call the canvas creatr
	$('button[name="sButton"]').on('click',function(){
		gridSize = prompt(askForSize);

		if(gridSize > 100 || gridSize < 1){
			alert(invalidSizeMsg);
			gridSize = 50;
		}

		//create the grid, pass in the gridSize
		createCanvas(gridSize);

		createButtons();
	});

	$('button[name="cButton"]').on('click',function(){
		$('.pixel').css('background-color', '#ECEBEB');
	});

	$(document).on('mouseenter','.pixel', function(){
		if(!randomColor){
			$(this).css('background-color',colorChoice);
		}
		else{
			$(this).css('background-color',randomGenerator());
		}
	});
	
	$(document).on('click','#eraseButton',function(){
		colorChoice = '#ECEBEB';
		randomColor = false;
	});

	$(document).on('click','#blackButton',function(){
		colorChoice = '#000000';
		randomColor = false;
	});

	$(document).on('click','#colorButton',function(){
		randomColor = true;
	})

	$(document).on('mouseenter','button',function(){
		$(this).addClass('highlightButton');
	});

	$(document).on('mouseleave','button',function(){
		$(this).removeClass('highlightButton');
	});
});
/*
 * Create a list that holds all of your cards
 */

 let cards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-bomb', 'fa-bomb',
'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle'];

const deck = $('.deck');
let moves = 0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const shuffled_cards = shuffle(cards);
for (card of shuffled_cards){
	deck.append('<li class="card"><i class="fa ' + card + '"></i></li>'); 
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let opened = [];
let matched = 0;

$(".card:not(.Locked)").click(function(){
 	$(this).addClass('open show');
 	// console.log('upper',this);
 	let clickedCard = $(this).children().attr('class').split(" ")[1];
 	if (opened.length == 0){
 		opened.push($(this));
 	} 
 	else{
 		// $(".container").addClass('hide');
 		// $("body").prepend('<div align="center" id="win">You win <div class="button"><button onclick="location.reload()" type="button">Click to replay!</button></div></div>');
 		
 		opened.push($(this));
 		
		if (opened[0].children().attr('class').split(" ")[1] == clickedCard){
			console.log("Match!");	
			opened[0].removeClass('open show');
			opened[0].addClass('match');
			console.log('middle',opened[0].parent());
			opened[0].effect( "bounce", "slow" );
			opened[1].removeClass('open show');
			opened[1].addClass('match');
			opened[1].effect( "bounce", "slow" );
			matched += 1;
			opened = [];
			if (matched == 1){
				$(".container").addClass('hide');
 				$('#win').removeClass('hide');
 				for (element of $('#star-panel li')){
 					console.log(element);
 					$('#win .stars').append(element);
 				}
			}
		} 
		else{
			// console.log('down',this);
			setTimeout(function () { 
				console.log("Not Match!");
				console.log('down2',opened);
				opened[0].effect("shake");
				opened[1].effect("shake");
				opened[0].removeClass('open show');
				opened[1].removeClass('open show');
				opened = [];
				$('.card').removeClass('Locked');
			}, 1000);
			// TODO: Lock the card click until the function in setTimeout finish
			$('.card').addClass('Locked'); 
		}

 	}
 	moves += 1;
 	$(".moves").text(moves);
 	if (moves == 15){
		$('.stars li:first').remove();
	} else if (moves == 20){
		$('.stars li:first').remove();
	} else if (moves == 30){
		$('.stars li:first').remove();
	}
});

$(".restart").click(function(){
	console.log('restart clicked');
	location.reload();
});















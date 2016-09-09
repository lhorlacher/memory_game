$(document).ready(function() {
	var clickedCards = [];
	var totalCards = $('.card').length
	var pairCounter = 0
	var neededPairs = totalCards / 2
	var noMoreCards = false
	var replay = $('#replay_same_deck')
	var deck = $('.card')


	deck.on('click', function() {
		didILose();
		$card = $(this.firstElementChild);
		console.log($(this.firstElementChild));
		checkForCards($card);
	});

	function validateChoice(cardChoice) {
		console.log('validateChoice');
		if(cardChoice.hasClass('no-display')) {
			selectCard(cardChoice);
		} else {
			alert('That card is already chosen. Choose another.');
		}
	}

	function selectCard(validChoice) {
		validChoice.toggleClass('no-display');
		clickedCards.push(validChoice);
		if(clickedCards.length === 2) {
			evaluateChoices(clickedCards);
		}
	}

	function evaluateChoices(choices) {
		if(choices[0].attr('title') === choices[1].attr('title')) {
			winner();
		} else { 
			loser();
		}
	}

	function winner() {
		pairCounter += 1
		if(pairCounter === neededPairs) {
			noMoreCards = true;
			replay.slideDown();

		}
		clickedCards =[]
	}

	function checkForCards(card) {
		console.log('checkForCards')
		if(noMoreCards === true) {
			alert('You need to start a new game!');
		} else {
			validateChoice(card);
		}
	}

	function loser() {
	}

	function didILose() {
		if(clickedCards.length === 2) {
			clickedCards[0].toggleClass('no-display');
			clickedCards[1].toggleClass('no-display');
			clickedCards =[]
		}
	}

	replay.click(function() {
		imagesArray = deck.context.images;
		console.log(imagesArray);
		for(var i = 0; i < imagesArray.length; i++){
		$(imagesArray[i]).addClass('no-display');
		}
	})












});

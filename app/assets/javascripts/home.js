$(document).ready(function() {
	var clickedCards = [];
	var totalCards = $('.card').length
	var pairCounter = 0
	var neededPairs = totalCards / 2
	var noMoreCards = false


	$('.card').on('click', function() {
		console.log('card is clicked')
		$card = $(this.firstElementChild)
		console.log($(this.firstElementChild))
		checkForCards($card)
	});

	function validateChoice(cardChoice) {
		console.log('validateChoice')
		if(cardChoice.hasClass('no-display')) {
			selectCard(cardChoice)
		} else {
			alert('That card is already chosen. Choose another.');
		}
	}

	function selectCard(validChoice) {
		console.log('selectCard')
		console.log(validChoice)
		validChoice.slideToggle('normal', function(){
			validChoice.toggleClass('no-display');
		})
		clickedCards.push(validChoice);
		if(clickedCards.length === 2) {
			evaluateChoices(clickedCards);
		}
	}

	function evaluateChoices(choices) {
		console.log('evaluateChoices')
		console.log(choices)
		console.log(choices[0])
		console.log(choices[1])
		if(choices[0].innerText === choices[1].innerText) {
			winner;
		} else { 
			loser;
		}
	}

	function winner() {
		console.log('winner')
		pairCounter += 1
		if(pairCounter === neededPairs) {
			alert('You have won!!');
			noMoreCards = true

		}
	}

	function checkForCards(card) {
		console.log('checkForCards')
		if(noMoreCards === true) {
			alert('You need to start a new game!');
		} else {
			validateChoice(card)
		}
	}

	function loser() {
		console.log('loser')
		alert('No match! Study your cards then press enter to continue.');
		clickedCards[0].slide_toggle('normal', function(){
			validChoice.toggleClass('no-display');
		})
		clickedCards[1].slide_toggle('normal', function(){
			validChoice.toggleClass('no-display');
		})
	}














});

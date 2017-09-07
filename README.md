# Memory Game Project

## Get started

```
git clone https://github.com/jjjjohnson/fend-project-memory-game
cd Your Foler
```
Double click on the [index.html](index.html)
## Introduction
This project takes advatange of jQuery and jQuery-ui to easily select elements in DOM and manipulate their attributes and values. You can see the scrip tag at the end of the `body` tag.

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
```

Basic functionality is a user click 2 cards, if both cards match then, fix it open. If do not match, then flick both card back to the hidden state. The game is over when all the cards are opened and an summery of the game is provided.

In [app.js](js/app.js), an event listener is added to respond to user's click(L51-L113). The number of clicks is recorded in variable `moves` and the times passes during the game. Animations are added when flipping the card, when cards match(`opened[0].effect( "bounce", "slow" );`) and not match(`opened[0].effect("shake");`).

In order to check the two cards match or not, an array `opened` is introduced which store the DOM element of the particular list. After checking, the `opened` list will be cleared to be ready for the next click.

The time during the game is recorded using `counter = setInterval(writeTimer, 1000);`. At the end of the game, the number of moves and time passed will be showed to the page.
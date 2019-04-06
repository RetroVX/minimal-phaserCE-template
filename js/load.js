/*!
*
* Load State. Preload all assets/sounds for the game
*
*/

let loadState = {

  // preload assets needed
  preload: function() {

    game.load.image('player', 'assets/player.png');
	  game.load.image('ball', 'assets/ball2.png');

  },

  create: function() {
    
    // once all assets are loaded, go to menu state
    game.state.start('menu');
  }

}

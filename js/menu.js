/*!
*
* Menu State. Main menu so user does not go straight into the level
* Use to tell player controls, edit settings etc
*
*/

let menuState = {

  create: function() {

    // add text
    var style = { font: "bold 32px Verdana", fill: "#fff"};
    let text = game.add.text(130, 200, "Press SPACE To Start", style);

    // spacebar key added 
    let startKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    startKey.onDown.addOnce(this.start, this)
  },

  // when player hits Space bar then start the game
  start: function() {
    game.state.start('levelOne');
  }
};

/*!
*
* Boot state to add ARCADE physics to the game
*
*/

let bootState = {

  create: function() {

    // set ARCADE physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // load assets state
    game.state.start('load');

  }

};

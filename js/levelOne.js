/*!
*
* Level State. Here you create the level for the game
*
*/
let lvOneState = {


  create: function() {

    // create player
    this.player = game.add.sprite(100, 280, 'player');
    // add ARCADE physics to the player sprite
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    // set gravity Y
    this.player.body.gravity.y = 1000;
    // set player anchor to the middle of the sprite
    this.player.anchor.setTo(0.5, 0.5);
    // player collides with world bounds
    this.player.body.collideWorldBounds = true;
    
    // create cursor keys (arrow keys)
    this.cursors = this.input.keyboard.createCursorKeys();

  },

  update: function() {
    const player = this.player;
    const cursors = this.cursors;

    // controls
    // up
    if(cursors.up.isDown) {
      player.body.velocity.y = -350;
    }
    // down
    else if(cursors.down.isDown) {
      // hover
      player.body.velocity.y = 100;
    }
    // left
    if(cursors.left.isDown) {
      player.body.velocity.x = -300;
    }
    // right
    else if(cursors.right.isDown) {
      player.body.velocity.x = 300;
    }
    // if no keys pressed, stop moving
    else {
      player.body.velocity.x = 0;
    }

  }
};

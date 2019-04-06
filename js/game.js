/*!
*
* Game State to add the boot, load, menu and level states and init canvas
*
*/

let game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameCanvas');

// add states to start the game
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('levelOne', lvOneState);

// boot scene
game.state.start('boot');

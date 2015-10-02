
var game = new Phaser.Game(1024, 900, Phaser.Game, '', {preload: preload, create: create, update: update});

var fnd1, plata1, trem;
var teclado,firebutton;
var sprBoneco, sprNinja;
var v;
var bomba,explode;
var score = 0;
var scoreText = "";
var toca;

    function preload()
{
    this.load.image('plata', './img/plataforma.png');
    this.load.image('piso', './img/plata.png');
    this.load.image('trem', './img/trem.png');
    this.load.spritesheet('boneco', './img/vilao.png', 115, 200);
    this.load.spritesheet('ninja', './img/ninja.png', 100, 100);
    this.load.spritesheet('bomba', './img/bomba.png', 32, 32);
    this.load.spritesheet('explosao', './img/explosion.png', 64, 64);

    this.load.audio('musica', './sounds/mfase.mp3');

    teclado = game.input.keyboard.createCursorKeys();
    firebutton = game.input.keyboard.addKey(32);
    game.input.keyboard.addKeyCapture([32]);

}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    fnd1 = game.add.sprite(0, 10, 'plata');
    plata1 = game.add.sprite(0, 560, 'piso');
    trem = game.add.sprite(0, 370, 'trem');
    bomba = game.add.sprite(-300, 170, 'bomba');
    explode = game.add.sprite(-400, 170, 'explosao');

    explode.animations.add('anima', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, false);
    game.physics.arcade.enable(explode);
    explode.scale.y = 1.8;
    explode.scale.x = 1.8;
    explode.body.x = -300;

    toca = game.add.audio('musica');
    toca.play();

    game.physics.arcade.enable(fnd1);
    game.physics.arcade.enable(plata1);
    game.physics.arcade.enable(trem);
    game.physics.arcade.enable(bomba);
    trem.body.velocity.x = -400;
    bomba.body.gravity.y = 600;
    bomba.body.collideWorldBounds = false;

    sprBoneco = game.add.sprite(900, 100, 'boneco');
    sprBoneco.animations.add('dir', [0, 1, 2, 3, 4, 5, 6], 10, true);
    sprBoneco.animations.add('esq', [7, 8, 9, 10, 11, 12, 13], 10, true);
    game.physics.arcade.enable(sprBoneco);
    sprBoneco.body.offset.y = -10;
    sprBoneco.body.offset.x = 50;
    sprBoneco.body.gravity.y = 600;
    sprBoneco.body.collideWorldBounds = false;
    sprBoneco.scale.y = 0.7;
    sprBoneco.scale.x = 0.7;
    sprBoneco.body.velocity.x = -100;

    sprNinja = game.add.sprite(100, 400, 'ninja');
    sprNinja.animations.add('parado', [0], 10, true);
    sprNinja.animations.add('dir', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
    sprNinja.animations.add('esq', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);
    sprNinja.animations.add('pulo', [4, 5], 10, true);
    game.physics.arcade.enable(sprNinja);
    sprNinja.body.offset.y = -20;
    sprNinja.body.offset.x = -20;
    sprNinja.body.gravity.y = 200;
    sprNinja.body.y = 800;
    sprNinja.body.collideWorldBounds = true;
    sprNinja.scale.y = 1.3;
    sprNinja.scale.x = 1.3;

    plata1.body.immovable = true;
    trem.body.immovable = true;

    scoreText = game.add.text(16, 16, 'PLACAR: 0', {fontsize: '60px', fill: '#00FF00'});

}

function collectStar(player, star){
    star.kill();
}

function update() {

    game.physics.arcade.collide(sprBoneco, plata1);
    game.physics.arcade.collide(sprNinja, plata1);
    game.physics.arcade.collide(bomba, plata1);

    sprBoneco.animations.play('esq');

    if (bomba.body.x > 1000) {
        bomba.body.velocity.x = 0;
        bomba.body.x = -500;
    }

    // QUANDO COLIDE NINJA COM BONECO
        game.physics.arcade.collide(sprNinja, sprBoneco, function () {
            sprNinja.visible = false;
            scoreText.text = 'GAME OVER ';
            sprNinja.body.x = -2000;
            explode.animations.play('anima');
            explode.body.x = sprNinja.body.x;
            explode.body.y = sprNinja.body.y;
            sprBoneco.body.x = 1200;
            sprBoneco.body.velocity.x = -300;

        });

    // QUANDO COLIDE BOMBA COM BONECO

    game.physics.arcade.collide(bomba, sprBoneco, function () {
        explode.animations.play('anima');
        score += 100;
        scoreText.text = 'PLACAR: ' + score;
        explode.body.x = bomba.body.x;
        explode.body.y = bomba.body.y;
        sprBoneco.body.x = 1200;
        sprBoneco.body.velocity.x = -300;
        bomba.body.velocity.x = 0;
        bomba.body.x = -500;
        //sprBoneco.visible = false;

    });

    if (sprNinja.body.x > trem.body.x) {
        game.physics.arcade.collide(sprNinja, trem);
    }

    sprBoneco.animations.play('parado');

    if (trem.body.x < -1700) {
        trem.body.x = 1500;
    }

    if (teclado.left.isDown) {
        sprNinja.body.velocity.x = -200;
        sprNinja.animations.play('esq');
    }
    else if (teclado.right.isDown) {
        sprNinja.body.velocity.x = 200;
        sprNinja.animations.play('dir');
    }
    else {
        sprNinja.body.velocity.x = 0;
        sprNinja.animations.play('parado');
    }

    //Soltando a bomba
    if (game.input.keyboard.isDown(32)) {
        if (bomba.body.x < sprNinja.body.x) {
            bomba.visible = true;
            bomba.body.y = sprNinja.body.y + 30;
            bomba.body.x = sprNinja.body.x + 110;
            bomba.body.velocity.x = 400;
            bomba.body.velocity.y = -300;
        }
    }

    //  Allow the player to jump if they are touching the ground.
    if (teclado.up.isDown && sprBoneco.body.touching.down) {
        sprNinja.body.velocity.y = -150;
    }

}


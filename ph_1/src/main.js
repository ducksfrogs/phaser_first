import * as ph from 'phaser';

var mainScene = new ph.Scene("mainScene");

mainScene.preload = function(){
    console.log("main scene");
}

const config = {
    type: ph.AUTO,
    width: 1024,
    height: 768,
    scece: [mainScene],
};

var game = new ph.Game(config);


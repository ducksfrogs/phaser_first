var startScene = new Phaser.Scene("startScene");

startScene.create = function() {
    this.startButtonImage = this.add.image(400, 300, 'startButton');
    this.startButtonImage.setDisplaySize(300, 300);
    this.startButtonImage.setInteractive();

    this.input.keyboard.on('keydown', function(event){
        this.scene.start('mainScene', {
            status: "start",
        });
    }, this);
}
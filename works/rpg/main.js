var mainScene = new Phaser.Scene("mainScene");

mainScene.create = function (data) {
    // 初期設定の読み込み
    this.config(data);
    // マップの作成
    this.createMap();
    
    // プレイヤー作成
    this.createPlayer();
    
    
    // プレイヤー操作
    this.input.keyboard.on('keydown-UP',this.moveUp, this);
    this.input.keyboard.on('keydown-DOWN',this.moveDown, this);
    this.input.keyboard.on('keydown-RIGHT',this.moveRight, this);
    this.input.keyboard.on('keydown-LEFT',this.moveLeft, this);
    
    // モンスター作成
    
    
    // ゲームオーバー処理
    
};

mainScene.update = function() {
    // 何もしません
};

mainScene.config = function(data) {
    // スタートシーンから起動した場合、初回なので、データをコピーする
    if(data.status == "start") {
        // プレイヤーデータのコピー
        this.playerData = JSON.parse(JSON.stringify(player_data));
        // モンスターデーターのコピー
        this.monsterData = JSON.parse(JSON.stringify(monster_data));
    }
};

mainScene.createMap = function() {
    // マップ作成
    for (var y =0; y < map_data.length; y++ ){
        for (var x = 0; x < map_data[y].length; x ++){
            var mapImage = this.add.image(x*50, y*50, map_data[y][x]).setOrigin(0, 0);
        
            mapImage.setDisplaySize(50, 50);
        }
    }
    
};

mainScene.createPlayer = function() {
    // プレイヤー画像の表示
    console.log(this.playerData.x*50);
    this.player = this.add.image(this.playerData.x*50, this.playerData.y*50, 'player')
    
    this.player.setOrigin(0, 0);
    this.player.setDisplaySize(50, 50);
    this.player.setDepth(1);
    this.player.setData("profile", this.playerData);
};

mainScene.drawPlayer = function() {
    // プレイヤー画像を移動して表示する
    this.player.setPosition(this.playerData.x*50, this.playerData.y*50);
};

mainScene.moveUp = function(event) {
    // 
    console.log(this.playerData.y);
    console.log("UP");
    var x = this.playerData.x;
    var y = this.playerData.y -1;
    if (!this.checkMove(x, y)){
        return false;
    }
    
    this.playerData.y -=1;
    this.drawPlayer();
    this.checkMonster();
    
};

mainScene.moveDown = function(event) {
    // プレイヤーが下に移動
    
};

mainScene.moveRight = function(event) {
    // プレイヤーが右に移動
    
};

mainScene.moveLeft = function(event) {
    // プレイヤーが左に移動
    
};

mainScene.checkMove = function(x, y) {
    // マップの移動可能可否の確認
    if( x < 0 || x > 15 ) {
        // X方向でシーンの外に出るので移動不可
        return false;
    }

    if( y < 0 || y > 11 ) {
        // Y方向でシーンの外に出るので移動不可
        return false;
    }

    // 移動してOK
    return true;
};

mainScene.checkMap = function(x, y) {
    // マップ内の移動不可の画像をチェック
    
};

mainScene.createMonster = function() {
    // モンスター作成
    
};

mainScene.checkMonster = function() {
    // プレイヤーがモンスターの位置に移動したのかの確認
    
};

mainScene.checkData = function(data) {
    // バトルシーンからの戻ってきた場合
    
};

mainScene.isGameOver = function() {
    
};

mainScene.gameOver = function() {
    alert("ゲームオーバー");
    this.scene.start("startScene");
};

mainScene.gameClear = function() {
    alert("モンスターを倒しました");
    this.scene.start("startScene");
};

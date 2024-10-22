mainScene.create = function(data){
    this.config(data);
    this.createMap()


};

mainScene.createMap = function() {
    for (var y = 0; y < map_data.length; y ++){
        for(var x = 0; x<map_data[y].length; x++){
            var mapImage = this.add.image(x * 50, y * 50, map_data[y][x]).setOrigin(0,0);

            mapImage.setDisplaySize(50, 50);
        }
    }
}
var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
playerX=10;
playerY=10;
var playerObject="";
function player_update(){
fabric.Image.fromURL("player.png", function(img){
player_object=img;
player_object.scaleToWidth(150);
player.object.scaleToHeight(140);
player_object.set({
    top:playerY,
    left:playerX

});
canvas.add(player_object);
});
}

function newImage(get_image){
    fabric.Image.fromURL(get_image, function(img){
    block_image_object=img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:playerY,
        left:playerX
    
    });
    canvas.add(block_image_object);
    });
    }

    window.addEventListener("keydown", myKeydown)
    function myKeydown(e){
        keyPessed= e.keyCode;
        console.log(keyPessed);
        if(e.shiftKey == true && keyPessed=='80'){
console.log("p and shift pressed together")
blockImageWidth=blockImageWidth+10;
blockImageWidth=blockImageWidth+10;
document.getElementById("currentWidth").innerHTML=blockImageWidth;
document.getElementById("currentHeight").innerHTML=blockImageHeight;
        }
if(e.shiftKey == true && keyPessed=='77'){
    console.log("m and shift pressed together")
    blockImageWidth=blockImageWidth-10;
    blockImageWidth=blockImageWidth-10;
    document.getElementById("currentWidth").innerHTML=blockImageWidth;
    document.getElementById("currentHeight").innerHTML=blockImageHeight;

        }
        if(keyPessed=='38'){
            up();
        }
        if(keyPessed=='40'){
            down();
        }
            if(keyPessed=='37'){
                left();
            }
            if(keyPessed=='39'){
                right();
            }
            if(keyPessed=='82'){
                newImage('wall.jpg');
                console.log("R");

            }
            if(keyPessed=='87'){
                newImage('OIP.jpg');
                console.log("w");

            }
            if(keyPessed=='71'){
                newImage('ground.png');
                console.log("g");

            }
            if(keyPessed=='76'){
                newImage('light_green.png');
                console.log("l");

            }
            if(keyPessed=='84'){
                newImage('trunk.jpg');
                console.log("t");

            }
            if(keyPessed=='69'){
                newImage('roof.jpg');
                console.log("e");

            }
            if(keyPessed=='89'){
                newImage('yellow_wall.png');
                console.log("Y");

            }
            if(keyPessed=='68'){
                newImage('dark_green.png');
                console.log("d");

            }
            if(keyPessed=='85'){
                newImage('different.png');
                console.log("U");

            }
            if(keyPessed=='83'){
                newImage('cloud.png');
                console.log("s");

            }

    }
    function up(){
        if(playerY>=0){
playerY=playerY-block_image_height;
console.log("block image height="+ block_image_height);
console.log("when  up arrow is pressed="+playerX+",Y="+playerY);
canvas.remove(player_object);
player_update();
        }   
    }
    function down(){
        if(playerY<=500){
playerY=playerY+block_image_height;
console.log("block image height="+ block_image_height);
console.log("when  up arrow is pressed="+playerX+",Y="+playerY);
canvas.remove(player_object);
player_update();
        }   
    }
    function right(){
        if(playerX<=700){
playerX=playerX+block_image_width;
console.log("block image height="+ block_image_width);
console.log("when  up arrow is pressed="+playerY+",X="+playerX);
canvas.remove(player_object);
player_update();
        }   
    }
    function left(){
        if(playerX>=0){
playerX=playerX-block_image_width;
console.log("block image height="+ block_image_width);
console.log("when  up arrow is pressed="+playerY+",X="+playerX);
canvas.remove(player_object);
player_update();
        }   
    }


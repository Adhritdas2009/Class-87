canvas= new fabric.Canvas("myCanvas");

var b_width=30;
var b_height=30;

var player_x=20;
var player_y=30;

var player_object="";
var block_object="";

function player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function block1(getimage){
    fabric.Image.fromURL(getimage, function(Img){
        block_object=Img;
        block_object.scaleToWidth(b_width);
        block_object.scaleToHeight(b_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keypressed= e.keyCode;
    if (keypressed == '37'){
        left();
    }
else if (keypressed== '38'){
    up();
}
else if (keypressed=='39'){
    right();
}
else if (keypressed=='40'){
    down();
}
else if (keypressed=='84'){
    block1("trunk.jpg") ; 
}


else if (keypressed=='67'){
    block1("cloud.jpg");
}

else if (keypressed=='68'){
    block1("dark_green.png");
}
else if (keypressed=='71'){
    block1("ground.png");
}
else if (keypressed=='76'){
    block1("light_green.png");
}
else if (keypressed=='82'){
    block1('roof.jpg');
}
else if (keypressed=='85'){
    block1('unique.png');
}
else if(keypressed=='87'){
    block1('wall.jpg');
}
else if (keypressed=='89'){
    block1("yellow_wall.png");
}
else if (e.shiftKey==true && keypressed=='80'){
    b_width= b_width + 10;
    b_height= b_height + 10;
    document.getElementById("cw").innerHTML=b_width;
    document.getElementById("ch").innerHTML=b_height;
}

else if (e.shiftKey==true && keypressed=='77'){
    b_width=b_width - 10;
    b_height=b_height-10;
    document.getElementById("cw").innerHTML=b_width;
    document.getElementById("ch").innerHTML=b_height;
}
}
//Class 88 code
function left(){
if(player_x >=0){
player_x=player_x-b_width;
canvas.remove(player_object);
player();
}
}
function right(){
    if(player_x <=700){
    player_x=player_x+b_width;
    canvas.remove(player_object);
    player();
    }
}
  
    function up(){
if(player_y >=0){
player_y=player_y-b_height;
canvas.remove(player_object);
player();
}
}

function down(){
    if(player_y <=400){
    player_y=player_y+b_height;
    canvas.remove(player_object);
    player();
    }
}    
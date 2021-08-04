var canvas=new fabric.Canvas('myCanvas');
var player_x=10;
player_y=10;
block_img_height=30;
block_img_width=40;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

        
        });
        canvas.add(player_object);
        
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x

        
        });
        canvas.add(block_object);
        
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='40'){
    console.log("down arrow key");
    down();
}
if(keypressed=='38'){
    console.log("up arrow key");
    Up();
}
if(keypressed=='39'){
    console.log("Right Arrow Key");
    Right();
}
if(keypressed=='37'){
    console.log("Left Arrow Key");
    Left();
}
if(keypressed=='67'){
    new_image('cobblestone.png');
    console.log("c key");
}
if(keypressed=='84'){
    new_image('table_front.png');
    console.log("t key");
}
if(keypressed=='66'){
    new_image('bricks.png');
    console.log("b key");
}
if(keypressed=='69'){
    new_image('emerald_ore.png');
    console.log('e key');
}
if(keypressed=='71'){
    new_image('grass_path_side.png');
    console.log('g key');
}
if(keypressed=='79'){
    new_image('oak_planks.png');
    console.log('o key');
}
if(keypressed=='83'){
    new_image('spruce_log.png');
    console.log('s key');
}
if(keypressed=='82'){
    new_image('rock.png');
    console.log('r key');
}
if(e.shiftKey==true && keypressed=='80'){
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;

}
if(e.shiftKey==true && keypressed=='77'){
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;

}
}

function Up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("When up arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("When down arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("When Left arrow key is pressed y="+player_y+"x="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function Right(){
    if(player_x<=800){
        player_x=player_x+block_img_width;
        console.log("When Right arrow key is pressed y="+player_y+"x="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
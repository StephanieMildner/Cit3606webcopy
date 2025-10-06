const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const myimg = new Image();
myimg.src = "fish.png";
myimg.onload = function(){
    ctx.drawImage(myimg,0,0,100,100);}
const myimg2 = new Image();
myimg2.src = "fish1.1.png";
myimg2.onload = function(){
    ctx.drawImage(myimg2,50,50,100,100);}
const myimg3 = new Image();
myimg3.src = "fish2.2.png";
myimg3.onload = function(){
    ctx.drawImage(myimg3,100,100,100,100);}
const myimg4 = new Image();
myimg4.src = "shark1.png";
myimg4.onload = function(){
    ctx.drawImage(myimg4,150,150,250,200);}

    setInterval(drawFunction, 100);
let x=Math.random() * canvas.width;
y=Math.random() * canvas.height;

function drawFunction(){
    ctx.clearRect(0,0,500,500);
    x++;
    y++;
    ctx.drawImage(myimg,x,y,100,100);
ctx.drawImage(myimg2,x,y,100,100);
ctx.drawImage(myimg3,x,y,100,100);
ctx.drawImage(myimg4,x,y,100,100);
ctx.drawImage(shark1,x,y,250,250);}
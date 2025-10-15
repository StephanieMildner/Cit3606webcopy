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
myimg4.src = "shark2.png";
myimg4.onload = function(){
    ctx.drawImage(myimg4,125,125,200,150);}

const myimg5 = new Image();
myimg5.src = "shark1.png";
myimg5.onload = function(){
    ctx.drawImage(myimg5,150,150,200,200);}

    setInterval(drawFunction, 800);
let x=Math.random() * canvas.width;
y=Math.random() * canvas.height;
x2=Math.random() * canvas.width;
y2=Math.random() * canvas.height;
x3=Math.random() * canvas.width;
y3=Math.random() * canvas.height;
x4=Math.random() * canvas.width;
y4=Math.random() * canvas.height;
x5=Math.random() * canvas.width;
y5=Math.random() * canvas.height;


function drawFunction(){
    ctx.clearRect(0,0,500,500);
x=Math.random() * canvas.width-100;
y=Math.random() * canvas.height-100;
x2=Math.random() * canvas.width-100;
y2=Math.random() * canvas.height-100;
x3=Math.random() * canvas.width-100;
y3=Math.random() * canvas.height-100;
x4=Math.random() * canvas.width-100;
y4=Math.random() * canvas.height-100;
x5=Math.random() * canvas.width-100;
y5=Math.random() * canvas.heigh-100;
ctx.drawImage(myimg,x,y,100,100);
ctx.drawImage(myimg2,x2,y2,100,100);
ctx.drawImage(myimg3,x3,y3,100,100);
ctx.drawImage(myimg4,x4,y4,150,150);
ctx.drawImage(myimg5,x5,y5,250,250);
}
                           
score = 1                          
myCanvas.onmousedown = function(e)  
{ if (e.clientX > x && 
        e.clientX < x + 200 &&            
        e.clientY > y && 
        e.clientY < y + 200)  
        {alert("You caught a fish! your score is "+ score++)};
    if (e.clientX > x2 && 
        e.clientX < x2 + 200 &&            
        e.clientY > y2 && 
        e.clientY < y2 + 200)  
        {alert("You caught a fish! your score is "+ score++)};
    if (e.clientX > x3 && 
        e.clientX < x3 + 200 &&            
        e.clientY > y3 && 
        e.clientY < y3 + 200)  
        {alert("You caught a fish! your score is "+ score++)};
    if (e.clientX > x4 && 
        e.clientX < x4 + 300 &&            
        e.clientY > y4 && 
        e.clientY < y4 + 200)  
        {alert("Oh No you got a shark! Score: "-score--)};
    if (e.clientX > x5 && 
        e.clientX < x5 + 300 &&            
        e.clientY > y5 && 
        e.clientY < y5 + 300)  
        {alert("Oh No you got a shark! Score: "-score--)};
    
    
    }
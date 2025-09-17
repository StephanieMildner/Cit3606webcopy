
//function hello(){
//name = document.getElementById("username").value;
 //   alert("Hello " + name + "!");
//}
//function bye(){
 //   alert("Goodbye!");
//} 
function convert(){
    money = document.getElementById("money").value;
    let num = money * 9.32;
    let n = num.toFixed(2);
    document.getElementById("krona").value = n ;
    

}

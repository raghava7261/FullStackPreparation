let a=20
let b=10

ele1=document.getElementById("sp-1").textContent=a
ele2=document.getElementById("sp-2").textContent=b
final=document.getElementById("res")
sumt=0
multiply=1
divide=0
subtract=0
function sum(){
    sumt=a+b
    final.textContent="SUM:"+ sumt
    
     
}
function sub(){
    subtract=a-b
    final.textContent="SUB:"+subtract
}
function mul(){
    multiply=a*b
    final.textContent="MUL:"+multiply
}
function div(){
    divide=a/b
    final.textContent="DIV:"+divide
}
let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayname);

}

function sayHello(){
    alert("hello");
}

function sayname(){
    alert("Apna college");
}
let btns= document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter=function(){
        console.log("you entered a button");
    }
}

function sayHello() {
    alert("button was clicked");
};
let todo=[];

let req = prompt("plesae enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("-----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------")
    }else if(req=="add"){
     let task =prompt("please enter the task you want to do");
     todo.push(task);
     console.log("task added");
    }
     req=prompt("plesae enter your request");

}

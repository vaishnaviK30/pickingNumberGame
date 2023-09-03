
let number=Math.floor((Math.random()*50)+1);
// document.writeln(number);

let count=0;

let user=document.getElementById("submitform");
user.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userch=document.getElementById("num1");
    if(userch.value>number){
        alert("Please enter lowest number");
        count++;
    }
    else if(userch.value<number){
        alert("Please enter greater number")
        count++;
    }
    else if(userch.value==number){
        alert("You win! your number is "+number+ ". You picked it in " +count+ " attempts");

    }
})

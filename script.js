//ex 1
let firstname = document.getElementById("firstname");
firstname.addEventListener("keyup", myFunction);

function myFunction(){
    let x = firstname.value;
    document.getElementById("display-firstname").innerHTML = x;
}
//ex2

const age = document.getElementById("age");
const section = document.getElementById('a-hard-truth')

age.addEventListener("keyup", () => {
    if (age.value < 18){
        section.style.visibility = "hidden"
    }
    else{
        section.style.visibility = "visible"
    }
})

//ex3

const pdw = document.getElementById("pwd");
const pdw_confirm = document.getElementById('pwd-confirm')

pdw.addEventListener("keyup", () => {
    if (pdw.value.length < 6){
        pdw.style.background= "red"
    }
    else{
       
        pdw.style.background= "green"
    }
})
pdw_confirm.addEventListener("keyup", () => {
    if (pdw_confirm.value != pdw.value){
        pdw_confirm.style.background= "red"
    }
    else{
       
        pdw_confirm.style.background= "green"
    }
})



//ex4

const darkmode = document.getElementById("toggle-darkmode");

darkmode.addEventListener("change", () => {
   if (darkmode.value == 'dark'){
    document.body.style.color ="white"
    document.body.style.background= "black"
   }
   else{
    document.body.style.color ="black"
    document.body.style.background= "white"
   }
})


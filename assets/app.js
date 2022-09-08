let number1 = document.querySelector("#number1");
let number2= document.querySelector("#number2");
let number3= document.querySelector("#number3");
let number4 = document.querySelector("#number4");
let number5 = document.querySelector("#number5");
let number6 = document.querySelector("#number6");

let inputs = document.querySelectorAll("input");

inputs.forEach((input)=>{
    input.addEventListener("keyup",function(e){
      if (e.target.value<=9 || e.target.value>=0) {
        if (this.nextElementSibling.id != null) {
            this.nextElementSibling.focus();
        }
      }
      else{
        e.target.value = 0;
    }
    })
})
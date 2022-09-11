let numbers = document.querySelectorAll("input");

numbers[0].focus();

numbers.forEach(num=> {
  num.addEventListener("input", function(){
            if(num.value.length >1){
                this.value = this.value[this.value.length -1]
            }
            if(num.nextElementSibling && num.value != ''){
                num.nextElementSibling.focus()
            }
            else if(!num.nextElementSibling && num.value != ''){
                num.blur();
            }
        })
})
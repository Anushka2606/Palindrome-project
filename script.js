let check=document.querySelector("#check-btn");
let input=document.querySelector("#text-input");
let result=document.querySelector("#result");








check.addEventListener("click",()=>{

    let inputValue=input.value;
    
    if(inputValue==""){
           alert("Please input a value");
           return;
    }
    
     else{
     let trimmed=inputValue.trim();
   let lowerCaseValue=trimmed.toLowerCase();
    let replace=lowerCaseValue.replace(/[.,\/?#!$%\^*&\:;{}=\-_`~()" "]/g, '');
     let reverse=replace.split('').reverse().join('');
    
console.log(replace);
        if(reverse==replace){
            result.innerText=`${inputValue} is a palindrome`;
         }
             else{
             result.innerText=`${inputValue} is not a palindrome`;
             }

     }
      
    
})






















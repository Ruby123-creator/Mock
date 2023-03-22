// console.log("hello");
/*
- Take an input from the user using an input HTML element, which becomes the current initial string- Display the current value of our string inside an ‘H3’ element- Implement the following 4 functionalities: - Find and replace: Take the string to be found, and the replacement value, as a string input, find it in our current string, and replace it. - toUpperCase: Clicking this button makes our string uppercase - toLowerCase: Clicking this button makes our string lowercase - concat: Takes a string input and concatenates it to our current string on the press of a button
*/
let arr = document.querySelectorAll("input");
let p = document.createElement("h3");
let input = arr[0].value;
let find = arr[1].value;
let string = arr[2].value;
arr[3].addEventListener("click" , ()=>{
   p.innerText = arr[0].value;
   document.body.append(p);  
})
arr[5].addEventListener("click" ,()=>{
     
     let str = input.replace(find , string);
     console.log(str);
     p.innerText = str;
     document.body.append(p);

})
arr[6].addEventListener("click" , ()=>{
    p.innerText = input.toUpperCase();
})
arr[7].addEventListener("click" ,()=>{
     p.innerText = input.toLowerCase();
})
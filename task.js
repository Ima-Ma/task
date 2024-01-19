let name = prompt("Enter Your Name");
console.log(name);
let sub1 = parseInt(prompt("Enter Your English Marks"));
let sub2 = parseInt(prompt("Enter Your Urdu Marks"));
let sub3 = parseInt(prompt("Enter Your Maths Marks"));
let sub4 = parseInt(prompt("Enter Your Chemistry Marks"));
let sub5 = parseInt(prompt("Enter Your Physics Marks"));
let total = sub1+sub2+sub3+sub4+sub5;
console.log(total);

let percentage = total/500*100;
console.log(percentage);

if(percentage=>50  && percentage<60){
    console.log("Your Grade Ias C")
}
 else if(percentage=>70  && percentage<80){
    console.log("Your Grade is B")
}
else if(percentage=>80  && percentage<90){
    console.log("Your Grade is A")
}
else if(percentage=>90  && percentage<100){
    console.log("Your Grade is A-one")
}
else{
    console.log("Failed!")
}



//string
let greeting='hello everyone';
console.log('salamalikum');
let age= '10';
console.log(age);

//string concatination
let firstName='Moh';
let lastName='Most';
let fullName= firstName + ' ' + lastName;
console.log(fullName);

//getting cheracter
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methodes
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase()); 
console.log(fullName.indexOf('s')); // index means the position and indexOf finds the postion of an arguement(a charater)
console.log(fullName.lastIndexOf('o')); //LastIndexOf find the last postion of an argument
console.log(fullName.slice(0,5));
console.log(fullName.substring(5,7));
console.log(fullName.replace('o','v'));

//template strings
let template=`my name is ${firstName+lastName} and im ${age} years old`;
console.log(template);

//html template
let html=`
<h1>${greeting}</h1>
<p>my name is ${firstName+lastName} and im ${age} years old</p>
`
console.log(html);

//Arrays
let bros=['Soso', 'YanRkhis', 'DatboiMusta'];
console.log(bros.length);
console.log(bros[2]);
console.log(bros.indexOf('YanRkhis'));
console.log(bros.join(' '));
let newbros= bros.concat(['adam', 'moh']);//to add elements into the array
console.log(newbros);
console.log(newbros.push('jhonny'));// add a new element to an erray and counts it length here it will display 6
console.log(newbros.pop());//takes off the last element and shows it off 

//null and undefined
let x; //undefined
console.log(x , x+3);
let y =null;//null
console.log(y , y+3);

//booleans & comparisons
console.log(false ,true); //booleans
console.log(lastName.includes('s'));
console.log(newbros.includes('moh'));

let hight= 6; 
console.log(hight== 6);
console.log(hight < 5 );//comparison

//loose comparison
console.log(hight == '6');
//strict comparison
console.log(hight === '6');

//type conversion
let aString="15";
aString =Number(aString);
console.log(aString +1);
console.log(typeof(aString));
let number1 = 17;
let number2 = 0;
let number3 = -17;
number1 = Boolean(number1);//true
number2 = Boolean(number2);//false
number3 = Boolean(number3);//true
console.log(number1, number2, number3);
let string1 = "abdul";//true
let string2 = "";//false
console.log(Boolean(string1));
console.log(Boolean(string2));

//for loop
for (let i = 0; i < 5; i++) {
  console.log('in loop:', i); 
} 
let names = ['moh', 'sofiane', 'yan']
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log(element);
}

//for loop in html
for (let i = 0; i < names.length; i++) {
  const element =`<div>${names[i]}</div>`;
  console.log(element); 
}

//while loop
let i=0;
while (i < 5) {
  console.log(i);
  i++;
}
let z=0;
while (z < names.length){
  console.log(names[z]);
  z++;
}

//if statment
let password = "moh6911111";
if (password.length < 8){
   console.log("your password is too short !");
} else if (password.length == 8) {
  console.log("your password is perfect !");
} else {
  console.log("your passeword is too long");
}

// &&=> and ; ||=> or

//Logical not(!)
let user = false;
if (!user){
  console.log('your need to log first !');
}

//continue an break
let scores = [50, 10, 90, 1, 14, 200, 102];

for (let n=0 ; n < scores.length ; n++){
  console.log('your score:' ,scores[n]);
  if (scores[n] === 14){
    console.log('congrates your best score is', scores[n]);
    break;
  }
  if (scores[n] === 90){
    console.log('congrates your score is', scores[n]);
    continue;
  }
}

//switch statments
let grade = 'C';

switch(grade){
  case 'A':
    console.log('you got an A');
    break;
  case 'B':
    console.log('you got a B');
    break;
  case 'C':
    console.log('you got a C');
    break;
  case 'D':
    console.log('you got a D');
    break;
  case 'E':
    console.log('you got an E') ;
    break;
  default:
    console.log ('not a vailde grade');
}

//functions
//function declaration 
greet();
function greet(){
  console.log('hey there');
};
//function expression (better way to use functions because in this way you can declar variables before the function)

                            /*default values
                              ⬇         ⬇   */
const speak = function(nami='bro',time='now'){
  console.log(`how are you ${time} ${nami}?`);
};
    /*updated values
        ⬇        ⬇    */
speak('soso', 'today');

//returne values
const calcArea = function(radius){
  return 3.14 * radius**2;//----> 
}                       //      ⬇returne the value here
let area = calcArea(5)//<--------   
console.log(area);  

//arrow functions 
const arrFunc = () => 'hello,word';
const gree =arrFunc();
console.log(gree);

//callback 📞 & foreach 🔄
const funkchen = (callbac) => {
  let value= 10;
  callbac(value);
};
funkchen (function (value){
  console.log(value);
});

const bronames = ((name,index)=>{
  console.log(`${index} - hello ${name}`)
});
newbros.forEach(bronames);

//objects 
let myself={
  name:"moh",
  age:69,
  adress:"hotville",
  sahabass: sahabass=[
    {name: "abdulay", readers: 300},
    {name: "hazbulay", readers:100},
    {name: "mamadou", readers:1},
  ],
  sahbassfunc () { //shorthand version of sahabassfunc : function (){......
    console.log("those are the holy sahabass:");
    this.sahabass.forEach(sahabi => {
      console.log(sahabi.name, sahabi.readers);
    })
  }
};
console.log(this);
myself.sahbassfunc();

//math object
let random = Math.random();
console.log(Math.random());
console.log(Math.round(random * 100));

//the query selector
let para1= document.querySelector('p');//grabs only the frist paragraph
let paras= document.querySelectorAll('p');//grabs all the paragraphs elements
console.log(para1);
console.log(paras);
console.log(para1.innerText);
paras.forEach(para =>{
  console.log(para.innerText);
  para.innerText += ' text added';
})
let para3 = document.querySelector('div');
console.log(para3.innerHTML);
para3.innerHTML += '<h2>im header number 2</h2>'
persons=['most','gherab', 'mist'];
persons.forEach(person=> {
  para3.innerHTML +=`<p>${person}</p>`;
})

//getting and setting HTML atributes
console.log(para1.getAttribute('class'));
para1.setAttribute('style', 'color: green; font-size:3em')//adding new attribute
para1.setAttribute('class', 'imNewClass');//changing attribute

//changing attribites wthout overwriting existing ones
para1.style.fontSize ='1.5em';

//exercice
let pees = document.querySelectorAll('div p');
pees.forEach(pee =>{
  if (pee.textContent.includes('error')) {
    pee.setAttribute('class', 'error');
  }
  if (pee.textContent.includes('success')) {
    pee.setAttribute('class', 'success');
  }
})

//basics event 📆 (click event)
const ul= document.querySelector('ul')
const button =document.querySelector('button');
const lis = document.querySelectorAll('li');
 lis.forEach(li =>{
  li.addEventListener('click', e =>{
    //console.log(e.target);
    //*e.target.style.backgroundColor= 'green';
    e.stopPropagation() //*to prevent event bobbling
    //or we can remove
    e.target.remove();
  })
 })

//add elements ➕
button.addEventListener('click', () =>{
  const li = document.createElement('li');
  li.textContent = "new element";
  ul.append(li);// append to add forward prepend to add backwards
});

//a better way to remove them ✨
ul.addEventListener('click', e =>{
   if(e.target.tagName==='LI'){
     e.target.remove()
   }
})

//more events 'copy','mousemove'


const form = document.querySelector(".signup-form");

form.addEventListener('submit', e =>{
  e.preventDefault();
  console.log(form.username.value)
})

//regular expressions (RegExp)
"/^[a-zA-Z]$/"

  //simple form event
  const feedback = document.querySelector('.feedback')
  const usernamePattern = /^[a-zA-Z]{6,10}$/
  const username = form.username.value
form.addEventListener('submit', e =>{
  e.preventDefault();
  if(usernamePattern.test(username)){
    feedback.textContent="your username is valid!"
  } else{
    feedback.textContent="you need a username of 6 to 10 characters that contain onlyletters"
  }
})

//keyup event(live feedback)

form.username.addEventListener('keyup', e =>{
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'valid')
  }else{
    form.username.setAttribute('class', 'unvalid')
  }
})

// Array methodes
// Filter method

const users =[
  {username: 'abdulass', premium:true},
  {username: 'boulahayass', premium:false},
  {username: 'bembelass', premium:false},
  {username: 'boutermass', premium:true},
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)

//map method 🗺️

const editNames = users.map(user => user.username += ' ibn qoraych')

console.log(editNames)

const citizens =[
  {username: 'abdulass',age: 10,},
  {username: 'boulahayass',age: 30,},
  {username: 'bembelass',age: 25,},
  {username: 'boutermass',age: 90,},
]

const editAges = citizens.map(citizen => {
  if (citizen.age > 30){
    return {name: citizen.name, age: citizen.age/2}
  }else {
    return citizen
  }
})

console.log(editAges)

//reduce method
const nums= [ 10, 40, 200, 25, 9, 70, 30, 66, 120]

const newResults = nums.reduce((acc ,curr) =>{
  if (curr > 30){
    acc+= curr;
  }
  return acc;
}, 0 );
// 
//inital value of acc

console.log(newResults)

//Async JavaScript 
//http request
const request = new XMLHttpRequest()

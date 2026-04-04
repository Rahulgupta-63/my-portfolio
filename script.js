// 1. Print a message to the console
console.log("Portfolio loaded!");

// 2. Store your info in variables
const mynameE2 = "Rahul Gupta";
const myJob  = "Aspiring Web Developer";
const myCity = "Prayagraj";

// 3. Print them using a template literal
console.log(`My name is ${myname}.`);
console.log(`I am a ${myJob} from ${myCity}.`);

// 4. A simple function
function showWelcome(name) {
  console.log(`Welcome to ${name}'s portfolio!`);
}
showWelcome(mynameE2);

// 5. An if/else decision
const skills = 3;
if (skills >= 5) {
  console.log("I know a lot of skills!");
} else {
  console.log("I am still learning — more skills coming soon!");
}
// Change the page title after 3 seconds
setTimeout(function() {
  document.title = "Hire Rahul! 👨‍💻";
}, 3000);

// === DOM MANIPULATION ===

// 1. Grab elements
const greetbtn = document.querySelector('#greetbtn');
const mynameE1   = document.querySelector('#myname');
const myimg   = document.querySelector('#myimg')

const sitefootP =document.querySelector('#sitefoot p')

// 2. Click event — change the heading text
greetbtn.addEventListener('click', function() {
  mynameE1.textContent = 'Hello! I am Rahul 👋';
  mynameE1.style.color = '#34d399';
  greetbtn.textContent = 'Click again!';
  sitefootP.textContent='this is your friend rahul gupta'
  sitefootP.style.color   = '#e94560'; // ← bright color so you can see it!
});

 
myimg.addEventListener('click',function(){
  myimg.style.border='4px solid #e94560';
})

// 3. Change title on page load
document.title = 'Rahul Gupta | Web Developer';

// 4. Log when page is fully loaded
window.addEventListener('load', function() {
  console.log('Page fully loaded!');
  console.log(`Welcome to ${document.title}`);
});
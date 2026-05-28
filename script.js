// 1. Print a message to the console
console.log("Portfolio loaded!");

// 2. Store your info in variables
const mynameE2 = "Rahul Gupta";
const myJob  = "Aspiring Web Developer";
const myCity = "Mahoba";

// 3. Print them using a template literal
console.log(`My name is ${mynameE2}.`);
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

// === ARRAYS & LOOPS ===

// 1. Skills array
const skillsList = ["HTML", "CSS", "JavaScript","Git & GitHub", "Responsive Design","AI/ML" , "Data Science","Meachine Learning","Deep Leaening","Pythone","Java","PyTorch"];

// 2. Grab the empty ul from HTML
const skillsUl = document.querySelector('#skillsList');
//  add to your skillsList array
skillsList.push("React");
skillsList.push("Node.js");

// 3. Loop through skills and add each one to the page
skillsList.forEach(function(skill) {
  // create a new <li> element
  const li = document.createElement('li');
  
  // set its text
  li.textContent = skill;
  
  // add it to the ul
  skillsUl.appendChild(li);
});

// 4. Log how many skills you have
console.log(`I have ${skillsList.length} skills so far!`);



//  hobbies array with for...of
const hobbies = ["coding", "reading", "gaming"];
for (let hobby of hobbies) {
  console.log(hobby);
}

//  numbers multiplied by 2
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
// === OBJECTS ===

const developer = {
  name:     "Rahul Gupta",
  age:       21,
  city:     "Prayagraj",
  country:  "India",                    // ← exercise 1 added here
  job:      "Aspiring Web Developer & AI/ML Engineer",
  skills:   ["HTML", "CSS", "JavaScript", "Git", "React"],
  goals:    ["Get a job", "Learn AI/ML", "Build real projects"],

  introduce: function() {
    console.log(`Hi! I am ${this.name} from ${this.city}.`);
    console.log(`I want to be a ${this.job}.`);
    console.log(`I know ${this.skills.length} skills so far!`);
  },                                    // ← comma here!

  showGoals: function() {               // ← add inside same object
    this.goals.forEach(function(goal) {
      console.log(goal);
    });
  }
};

// Call both methods
developer.introduce();
developer.showGoals();
console.log(developer.country);
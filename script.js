/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}


//Move these variables to the top
var factList = [
  "22.6% of LGBTQIA students were prevented from wearing clothes considered “inappropriate” based on their legal sex.", 
  "18.2% of LGBTQIA students are prohibited from discussing or writing about LGBTQ topics in school assignments", 
  "14.8% of LGBTQIA students are restricted from forming or promoting a gay-straight alliance.", 
  "Less than half of all high schools in the U.S. have a GSA club in place"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

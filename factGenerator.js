// CODE FOR THE FACT GENERATOR //
var factList = [ //List of factors that will appear when the button is clicked//
  "Transcript Grades",
  "Course Difficulty",
  "Extracurriculars",
  "Extracurriculars that align with your passion",
  "Awards and honors",
  "Athletics",
  "Parents who are alumni of the college",
  "Household Income",
  "Personal Statement and Supplemental Essays",
  "Teacher and Counselor Recommendation Letters",
  "Additional Information About Yourself",
  "High School Profile",
  "Race, Ethnicity, and/or Identity",
  "Community Impact"
];

// Set variables //
var fact = document.getElementById("fact"); 
var myButton  = document.getElementById("myButton");
var count = 0; // Initialize the index for the list of factors //

myButton.addEventListener("click", displayFact); // Click button //

function displayFact() {
  fact.innerHTML = factList[count]; // The index of the factList will appear on the screen on click
  count++; // count = count + 1
  if (count == factList.length){
    count = 0;  // Resets the index to 0 once the index = length of the list
  }
}

//slider
//create a slider pictures file with the name: slider_pictures
var figcaption = document.getElementById("slider-text")
var arrow_right = document.getElementById("arrow_right"); 
var arrow_left = document.getElementById("arrow_left"); 
var img = document.getElementById("picture-frame");

var resourcesFolderName = "slider_pictures"; 

img.src = `${resourcesFolderName}/1.jpg`;


var counter = 0;
var images = ["1", "2", "3", "4"]; 
var figcaptions = ["1", "2", "3", "4"]

arrow_right.addEventListener("click", function () {
  counter += 1;
  if (counter >= images.length) {
    counter = 0; 
  }
  img.src = `${resourcesFolderName}/${images[counter]}.jpg`; 
  figcaption.innerText = figcaptions[counter];

});

arrow_left.addEventListener("click", function () {
  counter -= 1; 
  if (counter < 0) {
    counter = images.length - 1;
  }
  img.src = `${resourcesFolderName}/${images[counter]}.jpg`; 
  figcaption.innerText = figcaptions[counter];
});

var preloadedImages = images.map(name => {
  let img = new Image();
  img.src = `${resourcesFolderName}/${name}.jpg`;
  return img;
});

img.onerror = function () {
  console.error("Failed to load image:", img.src);
  img.src = `${resourcesFolderName}/error.jpg`; 
}

// sidebar closing whe a link is clicked

var sidebar_staff = document.getElementById("a1");
var sidebar_players = document.getElementById("a2");
var sidebar_who_we_are = document.getElementById("a3");
var sidebar_gastfamilien = document.getElementById("a4");
var sidebar_slider = document.getElementById("a5");
var sidebar_schule = document.getElementById("a6");
var sidebar_contact = document.getElementById("a7");
var checkbox = document.getElementById("hamburger-checkbox");


sidebar_staff.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_players.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_who_we_are.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_gastfamilien.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_slider.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_schule.addEventListener("click", () => {
  checkbox.checked = false;
})

sidebar_contact.addEventListener("click", () => {
  checkbox.checked = false;
})
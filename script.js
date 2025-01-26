//slider
//create a slider pictures file with the name: slider_pictures
var picture_frame = document.getElementById("picture-frame");
var figcaption = document.getElementById("fotogallery-text")
var arrow_right = document.getElementById("arrow_right"); 
var arrow_left = document.getElementById("arrow_left"); 

var img = document.createElement("IMG");
picture_frame.appendChild(img);

var resourcesFolderName = "slider_pictures"; 
img.src = `${resourcesFolderName}/1.jpg`; 

var counter = 0;
var images = ["1", "2", "3", "4"]; 
var figcaptions = ["1", "2", "3"] // add the figcaption text of the images -> within 1 the figcaption of 1 and so on

arrow_right.addEventListener("click", function () {
  counter += 1;
  if (counter >= images.length) {
    counter = 0; 
  }
  img.src = `${resourcesFolderName}/${images[counter]}.jpg`; 
  figcaption.innerText = figcaptions.value[counter] // maybee remove the value
});

arrow_left.addEventListener("click", function () {
  counter -= 1; 
  if (counter < 0) {
    counter = images.length - 1;
  }
  img.src = `${resourcesFolderName}/${images[counter]}.jpg`; 
  figcaption.innerText = figcaptions.value[counter] // maybee remove the value
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

var sidebar_staff = getElementById("staff");
var sidebar_players = getElementById("players");
var sidebar_who_we_are = getElementById("who-we-are");
var sidebar_gastfamilien = getElementById("Gastfamilien");
var sidebar_slider = getElementById("slider");
var sidebar_schule = getElementById("Schule");
var sidebar_contact = getElementById("contact");
var checkbox = getElementById("checkbox");


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
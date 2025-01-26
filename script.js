var picture_frame = document.getElementById("picture-frame");
var figcaption = document.getElementById("fotogallery-text")
var arrow_right = document.getElementById("arrow_right"); 
var arrow_left = document.getElementById("arrow_left"); 

var img = document.createElement("IMG");
picture_frame.appendChild(img);

var resourcesFolderName = "path_to_your_resources"; // Replace with your actual folder path
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
  img.src = `${resourcesFolderName}/${images[counter]}.jpg`; 

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

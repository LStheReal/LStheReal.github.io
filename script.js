var picture_frame = document.getElementById("picture-frame");
var img = document.createElement("IMG");
picture_frame.appendChild(img);

img.width = "400";  
img.height = "267"; 

      img.src = "${resourcesFolderName}/Pasted.jpg"; // the first image to show on load

var counter = 0;
var images = ["1","2","3"]; // array of image names in resource folder
var arrow_right = document.getElementById("arrow_right"); // right button
var arrow_left = document.getElementById("arrow_left"); // left button

arrow_right.addEventListener("click", function () { // listening for user click on right arrow
  counter += 1; // when clicked counter variable increases by 1
  if (counter >= images.length) { // checks to see if counter variable is greater than the array of filenames
    counter = images.length-1; // if it is greater or equal to it then we set the counter to this value
  } else {
    img.src = "${resourcesFolderName}/" + images[counter] + ".jpg"; // if it isn't greater than it then we show the image corresponding to the array number
  }

});

arrow_left.addEventListener("click", function () { // listening for user click on left arrow
  counter -= 1;

  if (counter < 0) { // checks to see if counter variable is less than 0
    counter = 0; // if it is then set the counter to 0
  } else {
    img.src = "${resourcesFolderName}/" + images[counter] + ".jpg"; // if it isn't then show the corresponding image
  }
});


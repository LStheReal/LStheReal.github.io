var picture_frame = document.getElementById("picture-frame");
var arrow_right = document.getElementById("arrow_right"); // right button
var arrow_left = document.getElementById("arrow_left"); // left button

var img = document.createElement("IMG");
picture_frame.appendChild(img)

      img.src = "${resourcesFolderName}/1.jpg"; // the first image to show on load

var counter = 0;
var images = ["1","2","3", "4"]; // array of image names in resource folder

arrow_right.addEventListener("click", function right_arrow () { // listening for user click on right arrow
  counter += 1; // when clicked counter variable increases by 1
  if (counter >= images.length) { // checks to see if counter variable is greater than the array of filenames
    counter = -1;
    right_arrow();
    return; //if the counter is within the last picture it will go back to the fist one adn callthe function
  } else {
    img.src = "${resourcesFolderName}/" + images[counter] + ".jpg"; // if it isn't greater than it then we show the image corresponding to the array number
  }

});

arrow_left.addEventListener("click", function left_arrow () { // listening for user click on left arrow
  counter -= 1;

  if (counter < 0) { // checks to see if counter variable is less than 0
    counter = images.lenght + 1; // if it is smaller than 0 get to the end of the loop
    left_arrow();
    return;
  } else {
    img.src = "${resourcesFolderName}/" + images[counter] + ".jpg"; // if it isn't then show the corresponding image
  }
});


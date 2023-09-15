// Number that we will be using to iterate over the images
let imgNumber = 0;
// Number that we will be using to know when to stop iterating
let totalImg = 5;

// Array of strings, to save the text/color
let  color = ["Gray","Black","Red","Yellow","Blue"];

// General function to change the img of an
// already existing img after being clicked
// and also change the text right below it
function imgClick(){
    // We find the element by using the imgChange ID
    // and provide it to a variable for easier use
    let image = document.getElementById("imgChange");
    // We do the same but for the textColor ID
    let text = document.getElementById("textColor");
    
    // We increase by one the img iteration
    imgNumber++;
    
    // if the img iteration reaches 5, reset it to 0
    // since we dont have a 6th image
    // (Array starts at 0, ends at 4, having a total of 5 imgs not 6)
    if(imgNumber == totalImg){
        imgNumber = 0;
    }

    // We change the img src
    image.src = "./Media/"+imgNumber+".png";
    
    // We change the text contents and color using
    // the current imgNumber iteration
    text.style.color = color[imgNumber];
    text.innerText = color[imgNumber];
}

//
//  Instructions to add images.
//  Add the image to the Media folder, and name it with the next
//  number of the sequence.
//  Ie, if latest number is 4, you rename it to 5, since it's the next Nº after 4
//  
//  Afterwards change the totalImg variable, to the amount of img
//  found in the Media folder
//
//  You may also add a new entry to the color array, so it changes
//  the text below the img, and if a color is used it will also change the
//  text color
//
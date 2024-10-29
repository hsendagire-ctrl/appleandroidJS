// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style; // Accesses CSS rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpg"; //Changes an image

// document.getElementById("some-a-tag").href = "http://www.newlink.com";  // Change the hyperlink

// Changing an image vs adding a new image
// to add an image where there wasn't one before, you need a container for the image in HTML.
// Containers are empty paragraphs, h1s, or div elements. Could be a span as well
// for E.g. in html: <div id="img-container"> </div>

// document.getElementById("img-container").innerHTML =
//   "<img src= 'imgaes/pic.jpg'  >";

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  // Change the 'android vs aple' image to the android logo in the images folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";

  document.getElementById("the-link").innerHTML = "Android Home";

  document.getElementById("the-link").style.background = "#a4c93b";

  document.getElementById("the-link").href = "https://www.android.com";

  document.getElementById("the-html").style.background = "#a4c93b";

  document.getElementById("the-body").style.fontFamily =
    " 'Roboto', sans-serif";

  document.getElementById("android").classList.add("redborder");

  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";

  document.getElementById("the-link").href = "www.apple.com";

  document.getElementById("the-link").innerHTML = "Apple Home";

  document.getElementById("the-link").style.background = "#b6bcca";

  document.getElementById("the-body").style.background = "#b6bcca";

  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";

  document.getElementById("apple").classList.add("redborder");

  document.getElementById("android").classList.remove("redborder");
}

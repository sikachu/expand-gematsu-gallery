var images = document.getElementsByClassName("image");

if(images.length > 0) {
  for(var i = 0; i < images.length; i++) {
    var image = images[i];
    image.setAttribute("style", "width: auto; height: auto");

    var imgTag = image.firstChild.firstChild;
    var actualSrc = imgTag.src.replace(/gallery\/cache/, "gallery/albums").
      replace(/(\.jpg|png).+$/, "$1");
    imgTag.removeAttribute("width");
    imgTag.removeAttribute("height");
    imgTag.setAttribute("style", "max-width: 937px; width: auto; height: auto");
    imgTag.src = actualSrc;
  };
}

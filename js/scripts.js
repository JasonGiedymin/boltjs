toggleJSCS(function(id) {
  if (document.getElementById("" + id + "_JS").style.display === "block") {
    return document.getElementById(id + "_JS").style.display = "none";
  } else {
    return document.getElementById(id).style.display = "block";
  }
});
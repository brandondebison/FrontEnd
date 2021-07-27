/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
  
}

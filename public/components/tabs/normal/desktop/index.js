// Execute when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Open the first tab by default
  document.getElementById("Recent").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

  // Add a keyboard event listener to add keyboard interaction
  document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          var activeTab = document.querySelector(".tablinks.active");
          var tablinks = document.getElementsByClassName("tablinks");
          var currentIndex = Array.from(tablinks).indexOf(activeTab);

          if (event.key === "ArrowLeft") {
              // Switch to the previous tab when left arrow key is pressed
              var newIndex = (currentIndex - 1 + tablinks.length) % tablinks.length;
              tablinks[newIndex].click();
          } else if (event.key === "ArrowRight") {
              // Switch to the next tab when right arrow key is pressed
              var newIndex = (currentIndex + 1) % tablinks.length;
              tablinks[newIndex].click();
          }
      }
  });
});

// Function to switch tabs
function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Get all tab contents and tab buttons
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");

  // Hide all tab contents
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the active state from all tab buttons
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Display the specific tab content
  document.getElementById(tabName).style.display = "block";

  // Add the active state to the clicked tab button
  event.currentTarget.classList.add("active");
}

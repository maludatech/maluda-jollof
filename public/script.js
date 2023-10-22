document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("icon");
  const dropdown = document.getElementById("dropdown");
  let toggleDropdown = false; // Set to false initially

  icon.addEventListener("click", function () {
    icon.className = `${toggleDropdown ? "fa fa-bars" : "fa fa-x"}`;
    dropdown.style.display = toggleDropdown ? "none" : "block";
    toggleDropdown = !toggleDropdown;
  });
});

function validateForm() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var errorMessage = document.getElementById("error-message");

  if (title.trim() === "" || content.trim() === "") {
    errorMessage.style.display = "block";
    return false; // Prevent the form from submitting
  } else {
    errorMessage.style.display = "none";
    return true; // Allow the form to submit
  }
}

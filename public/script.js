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

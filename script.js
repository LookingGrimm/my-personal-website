// Create and add a new h2 element
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

// Toggle visibility of the section when the button is clicked
document.querySelector("#toggleButton").addEventListener("click", function() {
  const section = document.querySelector("#hiddenSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
});

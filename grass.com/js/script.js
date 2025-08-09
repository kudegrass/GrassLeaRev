// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Search Filter
function filterSubjects() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "" : "none";
  });
}

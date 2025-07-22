function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

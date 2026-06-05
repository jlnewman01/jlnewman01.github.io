document.addEventListener("DOMContentLoaded", function() {
  const displayElement = document.getElementById("random-word-container");
  if (!displayElement) return; // Exit if the element isn't on this page

  const words = ["Lambda", "Lucky", "Labourious", "Leslie", "Linguistics", "Language", "Logic", "Lemon", "Lukewarm", "Lipid", "Labneh", "Laboratory","Landmark","Laundering","Lavish","Lawsuit","Lighthouse","Lion","Limerick","Limiting","Library","Liquidity","Locomotive","Loamy","Loco","Logistical","Longitudinal","Lullaby","Lowest","Lucrative","Luncheon","Lingering"];
  const randomIndex = Math.floor(Math.random() * words.length);
  displayElement.textContent = words[randomIndex];
});

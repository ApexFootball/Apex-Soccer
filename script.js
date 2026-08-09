const form = document.getElementById("assessmentForm");
const profile = document.getElementById("profile");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const playerData = {
      position: document.querySelector('input[name="position"]:checked')?.value,
      finish: document.getElementById("finish")?.value.trim(),
      dangerZone: document.getElementById("dangerZone")?.value.trim(),
      defender: document.getElementById("defender")?.value.trim(),
      mental: document.getElementById("mental")?.value.trim()
    };

    localStorage.setItem("apexPlayerData", JSON.stringify(playerData));

    window.location.href = "profile.html";
  });
}

if (profile) {
  const savedData = localStorage.getItem("apexPlayerData");

  if (!savedData) {
    profile.innerHTML = "<p>No assessment data found.</p>";
  } else {
    const playerData = JSON.parse(savedData);

    profile.innerHTML = `
      <h2>Position</h2>
      <p>${playerData.position}</p>

      <h2>Go-To Finish</h2>
      <p>${playerData.finish}</p>

      <h2>Most Dangerous Area</h2>
      <p>${playerData.dangerZone}</p>

      <h2>Against a Tight Center-Back</h2>
      <p>${playerData.defender}</p>

      <h2>After a Missed Chance</h2>
      <p>${playerData.mental}</p>
    `;
  }
}

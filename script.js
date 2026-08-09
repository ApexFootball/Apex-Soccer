const form = document.getElementById("assessmentForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const position = document.querySelector(
      'input[name="position"]:checked'
    )?.value;

    const finish = document.getElementById("finish")?.value.trim();
    const dangerZone = document.getElementById("dangerZone")?.value.trim();
    const defender = document.getElementById("defender")?.value.trim();
    const mental = document.getElementById("mental")?.value.trim();

    const playerData = {
      position,
      finish,
      dangerZone,
      defender,
      mental
    };

    localStorage.setItem("apexPlayerData", JSON.stringify(playerData));

    window.location.href = "profile.html";
  });
}

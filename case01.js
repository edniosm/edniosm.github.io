


document.addEventListener("DOMContentLoaded", () => {
  let timeLeft = 40;

  const timerEl = document.getElementById("timer");
  const overlay = document.getElementById("danger-overlay");

  const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerEl.textContent =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeLeft <= 10 && timeLeft > 0) {
      overlay.classList.add("active");
    }

    // ⏹ Stop ONLY at 0 + redirect to next page
    if (timeLeft === 0) {
      clearInterval(countdown);
      overlay.classList.remove("active");
      timerEl.textContent = "TIME'S UP";

      setTimeout(() => {
        window.location.href = "case01-6.html"; 
      }, 3000); // 3000ms = 3 seconds

      return;
    }

    timeLeft--;
  }, 1000);
});







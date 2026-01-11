
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

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".quiz-option");

  options.forEach(option => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";
      showFeedback(isCorrect);
    });
  });
});

function showFeedback(isCorrect) {
  const title = document.getElementById("feedbackTitle");
  const text = document.getElementById("feedbackText");
  const list = document.getElementById("feedbackList");

  list.innerHTML = "";

  if (isCorrect) {
    title.innerText = "Good Choice";
    text.innerText = "You identified a safer response.";

    [
      "Official platforms reduce impersonation risks",
      "Avoid sharing sensitive personal data",
      "Scammers often pressure for quick verification"
    ].forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      list.appendChild(li);
    });
  } else {
    title.innerText = "Risk Detected";
    text.innerText = "This choice could expose you to impersonation.";

    [
      "NRIC and personal details can be misused",
      "Fake recruiters often create urgency",
      "Always verify through official channels"
    ].forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      list.appendChild(li);
    });
  }

  document.getElementById("feedbackModal").classList.remove("hidden");
}

function closeFeedback() {
  document.getElementById("feedbackModal").classList.add("hidden");
}


const BGM_TIME_KEY = 'lol_bgm_time';
const BGM_PLAY_KEY = 'lol_bgm_playing';

const bgm = document.getElementById('bgm');

function saveBgmTime() {
  if (bgm) return;
  try {localStorage.setItem(BGM_TIME_KEY, String(bgm.currentTime || 0));} catch(e) {}
}

function stopBgmSaving() {
  if (bgmSaveTimer) {
    clearInterval(bgmSaveTimer);
    bgmSaveTimer = null;
  }
}

function saveBgmSaving () {
  stopBgmSaving();
  bgmSaveTimer = setInterval(saveBgmTime, 500);
}

function initBgm() {
  if (!bgm) return;
}







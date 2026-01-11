document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      text: "Round 1: You receive a message from someone claiming to be a company representative asking you to confirm your identity.",
      options: [
        { text: "Send your full name and NRIC details", correct: false },
        { text: "Verify via the company's official communication channel", correct: true },
        { text: "Share social media profile for verification", correct: false }
      ],
      feedback: {
        correct: {
          title: "Good Choice",
          text: "You avoided impersonation.",
          points: [
            "Official platforms reduce scam risk",
            "Sensitive data should be protected"
          ]
        },
        wrong: {
          title: "Risk Detected",
          text: "This could expose your identity.",
          points: [
            "NRIC misuse leads to fraud",
            "Scammers use urgency to pressure victims"
          ]
        }
      }
    },
    {
      text: "Round 2: You notice an account using your photo and name but posting unusual content.",
      options: [
        { text: "Ignore it since it has not affected you", correct: false },
        { text: "Report the account to the platform and gather evidence", correct: true },
        { text: "Confront the account owner and demand they stop", correct: false }
      ],
      feedback: {
        correct: {
          title: "Well Done",
          text: "You protected your digital identity.",
          points: [
            "Reporting stops further misuse",
            "Evidence helps investigations"
          ]
        },
        wrong: {
          title: "Risk Detected",
          text: "Ignoring allows harm to spread.",
          points: [
            "Fake accounts escalate quickly"
          ]
        }
      }
    },
    {
      text: "Round 3: Someone online asks for your photo to create an AI-Generated avatar.",
      options: [
        { text: "Send a clear photo since it is 'just for fun'", correct: false },
        { text: "Send blurred and cropped image", correct: false },
        { text: "Decline and avoid sharing your image", correct: true }
      ],
      feedback: {
        correct: {
          title: "Safe Decision",
          text: "You prevented image abuse.",
          points: [
            "AI images can be misused",
            "Consent matters"
          ]
        },
        wrong: {
          title: "High Risk",
          text: "Your image could be exploited.",
          points: [
            "Deepfakes spread fast"
          ]
        }
      }
    },
    {
      text: "Round 4: Your edited photo is shared without permission.",
      options: [
        { text: "Report the content and keep screenshots as evidence", correct: true },
        { text: "Publicly shame them to warn others", correct: false },
        { text: "Ignore it", correct: false }
      ],
      feedback: {
        correct: {
          title: "Correct Action",
          text: "You protected yourself.",
          points: ["Documentation is critical"]
        },
        wrong: {
          title: "Risky Response",
          text: "This may worsen the situation.",
          points: ["Escalation attracts attention"]
        }
      }
    },
    {
      text: "Round 5: A stranger frequently messages that you're the only one they trust.",
      options: [
        { text: "Share personal information to build trust", correct: false },
        { text: "Set boundaries and keep conversations public", correct: true },
        { text: "Continue chatting to be polite", correct: false }
      ],
      feedback: {
        correct: {
          title: "Good Boundary",
          text: "You avoided grooming.",
          points: ["Isolation is a red flag"]
        },
        wrong: {
          title: "Danger Sign",
          text: "This mirrors grooming tactics.",
          points: ["Manipulation builds slowly"]
        }
      }
    },
    {
      text: "Round 6: They want to move the conversation to a private messaging app.",
      options: [
        { text: "Agree to move to the app", correct: false },
        { text: "Ask why secrecy is necessary", correct: false },
        { text: "Decline and stay on the current platform", correct: true }
      ],
      feedback: {
        correct: {
          title: "Well Done",
          text: "You stayed safe.",
          points: ["Private spaces increase risk"]
        },
        wrong: {
          title: "High Risk",
          text: "Secrecy enables harm.",
          points: ["Predators isolate victims"]
        }
      }
    }
  ];

  let current = 0;
  let score = 0;

  const qText = document.getElementById("question-text");
  const buttons = document.getElementById("quiz-buttons");
  const modal = document.getElementById("feedbackModal");
  const fTitle = document.getElementById("feedbackTitle");
  const fText = document.getElementById("feedbackText");
  const fList = document.getElementById("feedbackList");
  const fBtn = document.getElementById("feedbackButton");

  function render() {
    const q = questions[current];
    qText.innerHTML = `
      <span class="round-label"></span>
      ${q.text} 
    `;

    buttons.innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt.text;
      btn.onclick = () => select(btn, opt.correct);
      buttons.appendChild(btn);
    });
  }

  function select(btn, correct) {
    document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
    btn.classList.add(correct ? "correct" : "wrong");
    if (correct) score++;
    showFeedback(correct);
  }

  function showFeedback(correct) {
    const fb = correct ? questions[current].feedback.correct : questions[current].feedback.wrong;
    fTitle.textContent = fb.title;
    fText.textContent = fb.text;
    fText.className = `feedback-text ${correct ? "safe" : "risky"}`;
    fList.innerHTML = "";
    fb.points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      fList.appendChild(li);
    });
    modal.classList.remove("hidden");
  }

  fBtn.onclick = () => {
    modal.classList.add("hidden");
    current++;
    if (current < questions.length) {
      render();
    } else {
      let caption = score === 6 ? "🛡️ Digital Guardian"
        : score >= 4 ? "⚠️ Risk-Aware but Vulnerable"
        : "🚨 High Risk Detected";

      qText.innerHTML = `
        <strong>${caption}</strong><br>
        <span class="final-caption">Score: ${score} / ${questions.length}</span>
      `;
      buttons.innerHTML = "";
      restartBtn.classList.remove("hidden");

    }
  };

  render();
});

restartBtn.onclick = () => {
  window.location.href = "case01-1.html";
};


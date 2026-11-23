
/* ===================================
   CHAPTER 22 - INTERACTIONS
=================================== */

/* CHANGE YOUR PASSWORD HERE */
const SECRET_PASSWORD = "2426";


/* 22 PROMISE LETTERS */
const promises = [
    {
        title: "I Promise to Make You Feel Important",
        message: "I will never let you feel like you are just another person in my life. You have a special place in my heart."
      },
      {
        title: "I Promise to Notice You",
        message: "Even in a crowd, I will notice your little changes, your mood and your silence."
      },
      {
        title: "I Promise to Make Time for You",
        message: "No matter how busy life gets, I will try to make time for you and our little moments."
      },
      {
        title: "I Promise to Listen to You",
        message: "Your words, random talks, silly stories and little complaints will always matter to me."
      },
      {
        title: "I Promise to Never Ignore Your Feelings",
        message: "I may not always understand everything, but I will never treat your feelings as unimportant."
      },
      {
        title: "I Promise to Choose You in Little Moments",
        message: "Not just on special days, but on ordinary days too, I will try to make you feel special."
      },
      {
        title: "I Promise to Remember the Little Things",
        message: "Your likes, dislikes, favourite things and the tiny details you share with me are worth remembering."
      },
      {
        title: "I Promise to Reassure You",
        message: "When you feel unwanted or unimportant, I will remind you that you mean so much to me."
      },
      {
        title: "I Promise to Be Proud of You",
        message: "I will celebrate your achievements, even the smallest ones, and be happy to see you grow."
      },
      {
        title: "I Promise to Respect Your Feelings",
        message: "You never have to hide your sadness, anger or disappointment from me. Your feelings matter."
      },
      {
        title: "I promise to be honest.",
        message: "I'll choose honesty and clear communication instead of leaving things unsaid."
      },
      {
        title: "I Promise to Give You My Attention",
        message: "When we are together, I will try to be present and make you feel that your time with me matters."
      },
      {
        title: "I Promise to Never Make You Beg for Care",
        message: "You deserve love, kindness and care without having to ask for them every single time."
      },
      {
        title: "I Promise to Understand Your Silence",
        message: "When something is bothering you, I will try to understand instead of making you feel alone."
      },
      {
        title: "I Promise to Keep Our Little Moments Special",
        message: "Our jokes, silly fights, random calls and memories will always have a special place in my heart."
      },
      {
        title: "I Promise to Apologize When I'm Wrong",
        message: "I will accept my mistakes, try to correct them and never let my ego come before your feelings."
      },
      {
        title: "I Promise to Be Your Cheerleader",
        message: "When you doubt yourself, I will remind you of your strength and encourage you to believe in yourself."
      },
      {
        title: "I promise to respect your space.",
        message: "I'll respect your personal time, your independence and the things that make you who you are."
      },
      {
        title: "I Promise to Keep Learning You",
        message: "Even after knowing you for a long time, I will keep learning about your feelings, thoughts and little ways."
      },
      {
        title: "I Promise to Make You Smile",
        message: "I will try to bring happiness into your ordinary days and give you little reasons to smile."
      },
      {
        title: "I Promise to Make You Feel Loved",
        message: "Through my words, actions, time and little efforts, I will keep reminding you that you matter."
      },
      {
        title: "I Promise You This",
        message: "You will never have to wonder whether you are important to me. I want my actions to remind you that you are."
      }
];


/* READ-WHEN LETTERS */
const littleLetters = [
  {
    title: "When you need a smile",
    message: "I hope something good finds you today. Remember the little things that make you laugh, take a breath, and give yourself a chance to enjoy the day. You deserve happy moments, even ordinary ones."
  },
  {
    title: "When things feel difficult",
    message: "You don't need to figure everything out at once. Take things one step at a time. It's okay to slow down, ask for help and give yourself time. A difficult day doesn't define your whole life."
  },
  {
    title: "When you need encouragement",
    message: "I hope you remember how much potential you have and how far you've come already. Keep learning, keep trying and keep making room for your dreams. You don't have to be perfect to make progress."
  },
  {
    title: "When you want to feel appreciated",
    message: "I hope you know that the little things you do matter. Your efforts, your thoughts, your kindness and your presence are worth appreciating. Never feel that you have to prove your worth."
  }
];


/* PASSWORD UNLOCK */
function unlockBook() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("passwordError");

  if (input === SECRET_PASSWORD) {
    error.textContent = "";
    showPage("coverScreen");
  } else {
    error.textContent = "That's not the secret word. Try again ♡";
  }
}


/* ENTER KEY ALSO UNLOCKS */
document.getElementById("passwordInput")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      unlockBook();
    }
  });


/* PAGE NAVIGATION */
function showPage(pageId) {
  document.querySelectorAll(".screen").forEach(page => {
    page.classList.remove("active-screen");
    page.classList.add("hidden");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active-screen");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* 22 HEARTS ARRANGEMENT
   Grid has 7 columns.
   Each entry is [row, column], starting from 1.
*/
const heartPositions = [
  [1, 2], [1, 3], [1, 5], [1, 6],
  [2, 1], [2, 2], [2, 3], [2, 5], [2, 6], [2, 7],
  [3, 1], [3, 2], [3, 3], [3, 5], [3, 6], [3, 7],
  [4, 2], [4, 3], [4, 5], [4, 6],
  [5, 3], [5, 4]
];


/* CREATE HEART STAMPS */
function buildHearts() {
  const grid = document.getElementById("heartGrid");

  grid.innerHTML = "";

  promises.forEach((promise, index) => {
    const heart = document.createElement("button");

    heart.className = "heart-stamp";
    heart.innerHTML = `♥<span>${index + 1}</span>`;

    heart.style.setProperty("--row", heartPositions[index][0]);
    heart.style.setProperty("--col", heartPositions[index][1]);

    heart.setAttribute("aria-label", `Open promise ${index + 1}`);

    heart.addEventListener("click", () => {
      openPromise(index);
      heart.classList.add("opened");
    });

    grid.appendChild(heart);
  });
}


/* OPEN A PROMISE */
function openPromise(index) {
  const promise = promises[index];

  document.getElementById("modalNumber").textContent =
    `PROMISE ${String(index + 1).padStart(2, "0")}`;

  document.getElementById("modalTitle").textContent =
    promise.title;

  document.getElementById("modalMessage").textContent =
    promise.message;

  document.getElementById("promiseModal").classList.remove("hidden");
}


/* CLOSE PROMISE */
function closeModal() {
  document.getElementById("promiseModal").classList.add("hidden");
}


/* OPEN LITTLE LETTER */
function openLittleLetter(index) {
  const letter = littleLetters[index];

  document.getElementById("littleLetterTitle").textContent =
    letter.title;

  document.getElementById("littleLetterMessage").textContent =
    letter.message;

  document.getElementById("letterModal").classList.remove("hidden");
}


/* CLOSE LITTLE LETTER */
function closeLetterModal() {
  document.getElementById("letterModal").classList.add("hidden");
}


/* CLICK OUTSIDE MODAL TO CLOSE */
document.getElementById("promiseModal").addEventListener("click", function(event) {
  if (event.target === this) closeModal();
});

document.getElementById("letterModal").addEventListener("click", function(event) {
  if (event.target === this) closeLetterModal();
});


/* ESCAPE KEY */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
    closeLetterModal();
  }
});


/* OPTIONAL MUSIC */
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicToggle");

let musicPlaying = false;

musicButton.addEventListener("click", async function() {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      musicButton.textContent = "♫ Music on";
    } catch (error) {
      musicButton.textContent = "Add music file";
    }
  } else {
    music.pause();
    musicPlaying = false;
    musicButton.textContent = "♫ Music";
  }
});


/* INITIALIZE */
buildHearts();

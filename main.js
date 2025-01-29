document.addEventListener("DOMContentLoaded", function () {
  const messages = [
      "You're doing great!",
      "Keep up the amazing work!",
      "You are appreciated!",
      "Stay positive and strong!",
      "Believe in yourself!",
      "Your efforts matter!",
      "Keep shining!"
  ];

  const button = document.getElementById("button");
  const style = document.createElement("style");
  document.head.appendChild(style);

  button.addEventListener("change", function () {
      if (button.checked) {
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          style.innerHTML = `.paper:before { content: "${randomMessage}"; position: absolute; font-family: arial; text-align: center; top: 50px; transform: scaleY(-1); opacity: 0; }`;
      }
  });
});

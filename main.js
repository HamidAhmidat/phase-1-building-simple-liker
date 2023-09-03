// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");
const modal = document.querySelector("#modal");
mimicServerCall()
  .then((data) => {
    console.log(data);
    likes.forEach((like) => {
      like.addEventListener("click", () => {
        like.innerText === FULL_HEART
          ? (like.innerText = EMPTY_HEART)
          : (like.innerText = FULL_HEART);
        like.classList.toggle("activated-heart");
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.add("hidden"), 3000);
  });
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

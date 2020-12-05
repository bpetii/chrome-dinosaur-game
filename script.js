const dinosaur = document.querySelector(".dinosaur");
const block = document.querySelector(".block");

const jump = () => {
  if (dinosaur.classList[1] != "animate") {
    dinosaur.classList.add("animate");
  }
  setTimeout(() => {
    dinosaur.classList.remove("animate");
  }, 500);
};

window.addEventListener("click", () => {
  jump();
});

const isDead = setInterval(function () {
  const dinosaurTop = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if ((blockLeft < 20 && blockLeft > 0) && dinosaurTop >= 130) {
    block.style.animation = "none";
    dinosaur.style.display = "none";
    alert("DEAD");
  }
}, 10);

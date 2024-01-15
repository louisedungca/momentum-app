// BG Change JS

let totalBGCount = 10;

function changeBG() {
  const num = Math.ceil(Math.random() * totalBGCount);
  document.body.background = "bgimages/" + num + ".avif";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

changeBG();

// Submit Name

const submitBtn = document.querySelector(".submit-btn");

function passName() {
  const firstName = document.querySelector(".username").value;
  localStorage.setItem("textvalue", firstName);
  return false;
}

submitBtn.addEventListener("click", passName)
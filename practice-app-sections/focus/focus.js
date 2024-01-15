// BG Change JS

let totalBGCount = 10;

function changeBG() {
  const num = Math.ceil(Math.random() * totalBGCount);
  document.body.background = "bgimages/" + num + ".avif";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

changeBG();

const askFocus = document.querySelector('.ask-focus');
const showFocus = document.querySelector('.show-container');
const focusContent = document.querySelector('.focus-content');
const actionBtns = document.querySelector(".actions");

// Function to save input to local storage
function saveFocus() {
	const focusInput = document.getElementById('focus-content').value;
	localStorage.setItem('mainFocusInput', focusInput);

	displayFocus();
}

// Function to display saved input
function displayFocus() {
	const savedFocus = localStorage.getItem('mainFocusInput');
	if (savedFocus) {
		askFocus.style.display = 'none';
		showFocus.style.display = 'block';
		focusContent.innerHTML = `<span>${savedFocus}</span>`;
	}
} 

// Function to edit and resave input
function editFocus() {
	const savedFocus = localStorage.getItem('mainFocusInput');
	if (savedFocus) {
		askFocus.style.display = 'block';
		showFocus.style.display = 'none';
		document.getElementById('focus-content').value = savedFocus;
	}
}


displayFocus();

document.querySelector('.addfocus-btn').addEventListener('click', saveFocus);
document.querySelector('.edit-focus').addEventListener('click', editFocus);

//

showFocus.addEventListener("mouseover", () => {
	actionBtns.style.display = "block";
});

focusContent.addEventListener("mouseout", () => {
	actionBtns.style.display = "none";
});

/* JS Code 1

document.addEventListener("DOMContentLoaded", function () {
	const focusWrapper = document.querySelector(".focus-wrapper");
	const displayFocus = document.querySelector(".display-focus h4");
	const focusInput = document.getElementById("focus-input");
	const getFocusBtn = document.getElementById("getfocus-btn");
	const mainFocusText = document.querySelector(".mainfocus-text");

	// Load the stored input text from Local Storage on page load
	const storedFocus = localStorage.getItem("focusText");
	if (storedFocus) {
		mainFocusText.textContent = storedFocus;
		focusWrapper.style.display = "none"; // Hide the wrapper content
		displayFocus.style.display = "block";
	}

	// Event listener for storing text in Local Storage
	getFocusBtn.addEventListener("click", function () {
			const focusItem = focusInput.value;
			if (focusItem.trim() !== "") {
					localStorage.setItem("focusText", focusItem);
					mainFocusText.textContent = focusItem;
					focusWrapper.style.display = "none"; // Hide the wrapper content
			}
	});
});

*/


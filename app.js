  // for Header
  const userIcon = document.querySelector(".user-icon");
  const settings = document.querySelector(".settings-container");
  const nameInput = document.querySelector(".name");
  const syncBtn = document.querySelector(".sync-namebtn");

  // for Greeting 
  const greetingContainer = document.querySelector(".greeting .container");

  // for Main Focus
  const askFocus = document.querySelector('.ask-container');
  const showFocus = document.querySelector('.show-container');
  const focusContent = document.querySelector('.focus-content');
  const actionBtns = document.querySelector(".actions");

  // for Clock
  const formatClockBtn = document.querySelector(".format-switch-btn");
  const clockBox = document.querySelector(".clock-box");

  // for Quote
  const addQuoteBtn = document.querySelector(".addquote-icon");
  const refreshBtn = document.querySelector(".refreshquote-icon");
  const quoteDisplay = document.getElementById("quote-display");
  const addQuoteForm = document.getElementById("addQuoteForm");
  const newQuoteInput = document.getElementById("newQuote");

  // for To Do List
  const toDoIcon = document.querySelector(".to-do-icon");
  const toDoContainer = document.querySelector(".app .container");

  // BG Change JS
  let totalBGCount = 18;

  function changeBG() {
    const num = Math.round(Math.random() * totalBGCount);
    document.body.background = "bgimages/" + num + ".jpeg";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  changeBG();

  // Header JS
  let username = localStorage.getItem("username");
  nameInput.value = username;

  userIcon.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  // Get Name JS
  function getName() {
    
    nameInput.addEventListener("change", e => {
      localStorage.setItem("username", e.target.value);
    })
  }

  window.addEventListener("load", getName); 

  // Sync/Refresh Button JS
  function syncName() {
    window.location.reload();
  }

  syncBtn.addEventListener("click", syncName);

  // Greeting JS
  const hour = new Date().getHours();
  const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];

  let welcomeText = "";

    if (hour < 12) {
      welcomeText = welcomeTypes[0];
    }
    else if (hour < 18) {
      welcomeText = welcomeTypes[1];
    }
    else {
      welcomeText = welcomeTypes[2];
    }

  function greetingLine() {
    if (nameInput.value === "") {
      greetingContainer.textContent = welcomeText + ", " + "Bestie.";
    }
    else {
      greetingContainer.textContent = welcomeText + ", " + nameInput.value + ".";
    }
  }

  greetingLine();

  // Main Focus JS
  function saveFocus() {
    const focusInput = document.getElementById('focus-content').value;
    localStorage.setItem('mainFocus', focusInput);

    displayFocus();
  }

  function displayFocus() {
    const savedFocus = localStorage.getItem('mainFocus');
    if (savedFocus) {
      askFocus.style.display = 'none';
      showFocus.style.display = 'block';
      focusContent.innerHTML = `<span>${savedFocus}</span>`;
    }
  } 

  function editFocus() {
    const savedFocus = localStorage.getItem('mainFocus');
    if (savedFocus) {
      askFocus.style.display = 'block';
      showFocus.style.display = 'none';
      document.getElementById('focus-content').value = savedFocus;
    }
  }

  displayFocus();

  document.querySelector('.addfocus-btn').addEventListener('click', saveFocus);
  document.querySelector('.focus-item').addEventListener('click', editFocus);

  // Clock JS
  // switch clock button
  clockBox.addEventListener("click", () => {
    formatClockBtn.classList.toggle("active");

    const formatValue = formatClockBtn.getAttribute("data-format");

    if (formatValue === "12") {
      formatClockBtn.setAttribute("data-format", "24");
    }
    else {
      formatClockBtn.setAttribute("data-format", "12");
    }

  });

  // get current time
  function clock() {
    const today = new Date();
    let hours = today.getHours(); 
    let minutes = today.getMinutes(); 
    let seconds = today.getSeconds();

    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    const formatValue = formatClockBtn.getAttribute("data-format");

    if (formatValue === "12") {
      hours = hours > 12 ? hours % 12 : hours;
    }

    // console.log(formatValue);

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
  };

  // to update time every 1s
  const updateClock = setInterval(clock, 1000);

  // for the current day and calendar 
  const today = new Date();
  const dayName = today.toLocaleString("default", { weekday: "short" });

  const calDate = today.toLocaleString("default", { day: "2-digit" });
  const calDay = today.toLocaleString("default", { weekday: "long" });
  const calMonth = today.toLocaleString("default", { month: "long" });	
  const calYear = today.getFullYear();


  document.querySelector(".current-day").innerHTML = dayName;
  document.getElementById("cal-month").innerHTML = calMonth;
  document.getElementById("cal-day").innerHTML = calDay;
  document.getElementById("cal-year").innerHTML = calYear;
  document.getElementById("cal-date").innerHTML = calDate;

  // Quote JS
  addQuoteBtn.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  const givenQuotes = [
    'A wise philosopher once said, "Go, go, go."',
    'Ang mundo ay isang malaking Quiapo, maraming snatcher, maagawan ka. Lumaban ka.',
    'Pa-order naman ng kape, kailangan kong kabahan.',
    'Mahal mo ba ako dahil kailangan mo ako, o kailangan mo ako kaya mahal mo ako?',
    'Once, twice, three times more, gaano ba kadalas ang minsan?',
    'Ang pera natin hindi basta-basta mauubos, pero ang pasensya ko, konting-konti na lang!',
    "Ang buhay ay parang bato. It's hard.",
    "Anong karapatan mong hingin ang bagay na ipinagdamot mong ibigay? I deserved an explanation. I deserved an acceptable reason.",
  ];

  const quotesArray = JSON.parse(localStorage.getItem("quotes")) || givenQuotes;

  // Function to generate and display random quote
  function displayRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    quoteDisplay.textContent = quotesArray[randomIndex];
  }

  // Add quote
  addQuoteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newQuote = newQuoteInput.value.trim();

    if (newQuote !== "") {
      quotesArray.push(newQuote);
      newQuoteInput.value = "";

      localStorage.setItem("quotes", JSON.stringify(quotesArray));
    }
  });

  //  console.log(quotesArray);

  function newQuoteArray() {
    displayRandomQuote();
    refreshBtn.addEventListener('click', displayRandomQuote);
  };

  window.addEventListener("load", newQuoteArray);


  const container = document.querySelector(".outer-container");
  const changeBtns = document.querySelector(".change-btns");
  // console.log(changeBtns);

  container.addEventListener("mouseover", () => {
      changeBtns.style.display = "block";
  });

  container.addEventListener("mouseout", () => {
      changeBtns.style.display = "none";
  });


  // To Do List JS
  toDoIcon.addEventListener("click", () => {
    toDoContainer.classList.toggle("active");
  });

  window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.querySelector('.new-todo-form');

    newTodoForm.addEventListener('submit', e => {
      e.preventDefault();

      const todo = {
        content: e.target.elements.content.value,
        done: false,
        createdAt: new Date().getTime()
      }

      todos.push(todo);

      localStorage.setItem('todos', JSON.stringify(todos));

      // Reset the form
      e.target.reset();

      displayTodos();
    })

    displayTodos();
  })

  function displayTodos () {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = "";

    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');
      const input = document.createElement('input');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');

      input.type = 'checkbox';
      input.checked = todo.done;
      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');

      content.innerHTML = `<textarea type="text" readonly>${todo.content}</textarea>`;
      edit.innerHTML = '<i class="fas fa-edit edit-icon"></i>';
      deleteButton.innerHTML = '<i class="far fa-trash-alt delete-icon"></i>';

      label.appendChild(input);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);

      if (todo.done) {
        todoItem.classList.add('done');
      }
      
      input.addEventListener('change', (e) => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));

        if (todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }

        displayTodos();

      })

      edit.addEventListener('click', (e) => {
        const input = content.querySelector('textarea');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          todo.content = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          
          displayTodos();
        })
      })

      deleteButton.addEventListener('click', (e) => {
        todos = todos.filter(item => item !== todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        displayTodos();
      })

    })
  }

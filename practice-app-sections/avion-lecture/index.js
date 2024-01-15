// async & await
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(apiUrl);
  const joke = await response.json();
  console.log(joke.value);
}

getJoke();


/*
// fetch

fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
 
    const newComment = {
      postId: 1,
      name: 'New Comment',
      email: 'new@example.com',
      body: 'This is a new comment.',
    };
  })

  .catch(error => {
    console.error('Error making GET request:', error);
  });


// Promises

function findUserData() {
  return new Promise((resolve, reject) => {
    const user = { 
      1: {
        firstName: "Juan",
        age: 20,
        email: "juan@gmail.com"
      }
    };

    function tOut() {
      const userData = user[userId];
      if (userData) {
        resolve(userData);
      }
      else {
        reject("Oops! User not found.");
      }
    }

    setTimeout(tOut, 1000);
  });
};

const userId = 1; 

findUserData(userId)
  .then((userData) => {
    console.log('User Data:', userData); 
  })
  .catch((error) => {
    console.error('Error:', error); 
  });

  */

// async function fetchdata() {
//     const resopnse=await fetch('../DataJson/Training_data.json');
//     data=await resopnse.json();
//     return data;
// } 



// async function getAIResponse(userInput) {
//     const data = await fetchdata();
//     // Normalize the input for case insensitivity
//     const normalizedInput = userInput.toLowerCase();
//     const hasNumber = /\d/.test(normalizedInput);
//     // Loop through each item in the data array
//     for (const item of data) {
//         // Normalize the user phrases for case insensitivity
//         const phrases = item.user.toLowerCase().split(' ');

//         // Check if the input matches any of the phrases
//         if (phrases.some(phrase => normalizedInput.includes(phrase))) {
//             return item.AI;
//         }
//         else if (hasNumber){
//             return "Sure i'll start the payment gateway right away";
//         }
//     }

//     // Return a default response if no match is found
//     return "Sorry, I don't understand that request.";
// }




// function StoreMessage(Input){
//     const fs=require("fs");
//     let data=[];
//     data.push({user:Input});
//     fs.writeFile('Data.json', JSON.stringify(data, null, 1), (err) => {
//         if (err) throw err;
//         console.log('Data saved successfully!');
// });}

// async function sendMessage() {
//   let input = document.getElementById('userInput');
//   let message = input.value;
//   StoreMessage(message);
//   if (message.trim() !== '') {
//       // Display user's message
//       let userMessage = `<div class="message user"><p>${message}</p></div>`;
//       document.getElementById('chatBody').innerHTML += userMessage;

//       // Wait for AI response
//       let AI_response = await getAIResponse(message); // <--- await the promise

//       // Display AI's response
//       let botMessage = `<div class="message bot"><p>${AI_response}</p></div>`;
//       document.getElementById('chatBody').innerHTML += botMessage;

//       // Clear input
//       input.value = '';

//       // Scroll to the bottom
//       document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
//   }
// }

// function sendMessage() {
    
    
//     let input = document.getElementById('userInput');
//     let message = input.value;
//     let AI_response=getAIResponse(message);

//     if (message.trim() !== '') {
//         // Display user's message
//         let userMessage = `<div class="message user"><p>${message}</p></div>`;
//         document.getElementById('chatBody').innerHTML += userMessage;

//         // Simulate bot response
//         let botMessage = `<div class="message bot"><p>${AI_response}</p></div>`;
//         document.getElementById('chatBody').innerHTML += botMessage;

//         // Clear input
//         input.value = '';

//         // Scroll to the bottom
//         document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
//     }
// }


const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});



document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const email = document.getElementById("email").value;

    if (email) {
      // Simulate password reset
      document.getElementById("message").innerHTML = `A password reset link has been sent to ${email}`;
    } else {
      document.getElementById("message").innerHTML = "Please enter a valid email.";
    }
  });

// Handle form submission using JavaScript in signup page
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Display a message (this can be replaced with more complex JS functions if needed)
    document.getElementById('message').textContent = `Account created for ${username} with email ${email}!`;
  });

  // Handle form submission using JavaScript in login page
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Simple validation (can be replaced with more advanced logic)
    if (username === 'admin' && password === 'password123') {
      document.getElementById('message').textContent = 'Login successful!';
    } else {
      document.getElementById('message').textContent = 'Invalid username or password!';
    }
  });


  // Simplified event listener for input field
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });

  function toggleDarkModesp() {
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const iconContainer = document.querySelector('.icon-container');
    
    console.log('Current stylesheet:', darkModeStylesheet.href);
    
    iconContainer.classList.toggle('animate');
    
    setTimeout(() => {
        if (darkModeStylesheet.href.includes('signinpage.css')) {
            console.log('Switching to dark mode');
            darkModeStylesheet.href = './styles/signinpage_dark.css';
        } else {
            console.log('Switching to light mode');
            darkModeStylesheet.href = './styles/signinpage.css';
        }
    }, 500);
}

function toggleDarkModelp() {
  const darkModeStylesheet = document.getElementById('darkModeStylesheet');
  const iconContainer = document.querySelector('.icon-container');
  
  console.log('Current stylesheet:', darkModeStylesheet.href);
  
  iconContainer.classList.toggle('animate');
  
  setTimeout(() => {
      if (darkModeStylesheet.href.includes('Loginpage.css')) {
          console.log('Switching to dark mode');
          darkModeStylesheet.href = './styles/Loginpage_dark.css';
      } else {
          console.log('Switching to light mode');
          darkModeStylesheet.href = './styles/Loginpage.css';
      }
  }, 500);
}


function toggleDarkModefp() {
  const darkModeStylesheet = document.getElementById('darkModeStylesheet');
  const iconContainer = document.querySelector('.icon-container');

  // Toggle the animation class for the sun and moon icons
  iconContainer.classList.toggle('animate');

  setTimeout(() => {
    const currentStylesheet = darkModeStylesheet.href.split('/').pop();

    if (currentStylesheet === 'forgotpassword_dark.css') {
      darkModeStylesheet.href = './styles/forgotpassword.css';
    } else {
      darkModeStylesheet.href = './styles/forgotpassword_dark.css';
    }
  }, 300); // Adjust this delay for the icon animation
}



function toggleDarkMode() {
  const darkModeStylesheet = document.getElementById('darkModeStylesheet');
  const iconContainer = document.querySelector('.icon-container');
  
  console.log('Current stylesheet:', darkModeStylesheet.href);
  
  iconContainer.classList.toggle('animate');
  
  setTimeout(() => {
      if (darkModeStylesheet.href.includes('Styles.css')) {
          console.log('Switching to dark mode');
          darkModeStylesheet.href = './styles/Styles_dark.css';
      } else {
          console.log('Switching to light mode');
          darkModeStylesheet.href = './styles/Styles.css';
      }
  }, 100);
}

// function sendMessage() {
//   const userInput = document.getElementById('userInput').value;
//   const chatBody = document.getElementById('chatBody');

//   if (userInput.trim()) {
//       // Append user message
//       const userMessage = document.createElement('div');
//       userMessage.classList.add('message', 'user');
//       userMessage.innerHTML = `<p>${userInput}</p>`;
//       chatBody.appendChild(userMessage);

//       // Get response from JSON file
//       fetch('responses.json')
//           .then(response => response.json())
//           .then(data => {
//               // Example logic to find a response
//               const botResponse = data.responses[userInput.toLowerCase()] || "Sorry, I don't understand that.";
              
//               // Append bot response
//               const botMessage = document.createElement('div');
//               botMessage.classList.add('message', 'bot');
//               botMessage.innerHTML = `<p>${botResponse}</p>`;
//               chatBody.appendChild(botMessage);
              
//               chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
//           })
//           .catch(error => {
//               console.error('Error fetching responses:', error);
//           });

//       document.getElementById('userInput').value = ''; // Clear input field
//   }
// }

async function fetchResponses() {
  const response = await fetch('Training_data.json');
  return response.json();
}

function getResponse(userInput, responses) {
  const cleanedInput = userInput.toLowerCase().trim();
  return responses[cleanedInput] || "Sorry, I didn't understand that.";
}

function displayMessage(text, sender) {
  const chatBody = document.getElementById('chatBody');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() === '') return;

  displayMessage(userInput, 'user');
  document.getElementById('userInput').value = '';

  const data = await fetchResponses();
  const response = getResponse(userInput, data.responses);
  displayMessage(response, 'bot');
}

// Function to fetch data from the training JSON file
async function fetchdata() {
  try {
      const response = await fetch('../DataJson/Training_data.json');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return empty array if there's an error
  }
}

// Function to get the AI response based on user input
async function getAIResponse(userInput) {
  const data = await fetchdata(); // Fetch the data from JSON
  const normalizedInput = userInput.toLowerCase(); // Normalize input for case insensitivity
  const hasNumber = /\d/.test(normalizedInput); // Check if input contains a number

  // Loop through each item in the data array to find a matching phrase
  for (const item of data) {
      const phrases = item.user.toLowerCase().split(' '); // Normalize user phrases

      // If the input matches any phrase, return the AI response
      if (phrases.some(phrase => normalizedInput.includes(phrase))) {
          return item.AI;
      } else if (hasNumber) {
          return "Sure, I'll start the payment gateway right away.";
      }
  }

  // Default response if no match is found
  return "Sorry, I don't understand that request.";
}

// Store message locally (no file handling in browser, so using localStorage)
function storeMessage(input) {
  let storedData = JSON.parse(localStorage.getItem('messages')) || [];
  storedData.push({ user: input });
  localStorage.setItem('messages', JSON.stringify(storedData));
  console.log('Message stored locally!');
}

// Function to send the user's message and handle the AI response
async function sendMessage() {
  let input = document.getElementById('userInput');
  let message = input.value;

  if (message.trim() !== '') {
      // Store user's message in localStorage
      storeMessage(message);

      // Display user's message in the chat
      let userMessage = `<div class="message user"><p>${message}</p></div>`;
      document.getElementById('chatBody').innerHTML += userMessage;

      // Get AI's response based on user input
      let AI_response = await getAIResponse(message); // Wait for the response

      // Display AI's response in the chat
      let botMessage = `<div class="message bot"><p>${AI_response}</p></div>`;
      document.getElementById('chatBody').innerHTML += botMessage;

      // Clear the input field after sending
      input.value = '';

      // Scroll to the bottom of the chat body
      document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
  }
}

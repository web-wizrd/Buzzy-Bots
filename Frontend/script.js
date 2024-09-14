
async function fetchdata() {
    const resopnse=await fetch('../Frontend/Training_data.json');
    data=await resopnse.json();
    return data;
} 


// (async function() {
//     const data=await fetchdata();  
//     if(data){
//         console.log(data);
//     }
// })();

// fetchdata().then(data=>{
//     console.log(data);
// })

async function getAIResponse(userInput) {
    const data = await fetchdata();
    // Normalize the input for case insensitivity
    const normalizedInput = userInput.toLowerCase();
    const hasNumber = /\d/.test(normalizedInput);
    // Loop through each item in the data array
    for (const item of data) {
        // Normalize the user phrases for case insensitivity
        const phrases = item.user.toLowerCase().split(' ');

        // Check if the input matches any of the phrases
        if (phrases.some(phrase => normalizedInput.includes(phrase))) {
            return item.AI;
        }
        else if (hasNumber){
            return "Sure i'll start the payment gateway right away";
        }
    }

    // Return a default response if no match is found
    return "Sorry, I don't understand that request.";
}

// async function getAIResponse(userInput) {
        
//         const data=await fetchdata();
//         // Normalize the input for case insensitivity
//         const normalizedInput = userInput;

//         // Loop through each item in the data array
//         for (const item of data) {
//             // Normalize the user phrases for case insensitivity
//             const phrases = item.user.split(' ');

//             // Check if the input matches any of the phrases
//             if (phrases.some(phrase => normalizedInput.includes(phrase))) {
//                 return item.AI;
//             }
//         }

//         // Return a default response if no match is found
//         return "Sorry, I don't understand that request.";
    
// }


function StoreMessage(Input){
    const fs=require("fs");
    let data=[];
    data.push({user:Input});
    fs.writeFile('Data.json', JSON.stringify(data, null, 1), (err) => {
        if (err) throw err;
        console.log('Data saved successfully!');
});}

async function sendMessage() {
    let input = document.getElementById('userInput');
    let message = input.value;
    StoreMessage(message);
    if (message.trim() !== '') {
        // Display user's message
        let userMessage = `<div class="message user"><p>${message}</p></div>`;
        document.getElementById('chatBody').innerHTML += userMessage;
        
        // Wait for AI response
        let AI_response = await getAIResponse(message);

        // Display AI's response
        let botMessage = `<div class="message bot"><p>${AI_response}</p></div>`;
        document.getElementById('chatBody').innerHTML += botMessage;

        // Clear input
        input.value = '';

        // Scroll to the bottom
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }

}

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
var num=1;
function toggleDarkMode() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    } else {
        // Remove dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "Styles.css";
        Theme_icon.textContent="dark_mode";
    }
}

const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

// const userInput = document.getElementById('userInput');

// userInput.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter' && !event.shiftKey) {
//     event.preventDefault();
//     sendMessage();
//   } else if (event.key === 'Enter' && event.shiftKey) {
//     userInput.value += '\n';
//   }
// });

function toggleDarkModefp() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "./Frontend/forgot_password/forgotpassword.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="dark_mode";
        
    } else {
        // Remove dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "./Frontend/forgot_password/forgotpassword_dark.css";
        Theme_icon.textContent="wb_sunny";
    }
}

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

function toggleDarkModelp() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "Loginpage.css";
        Theme_icon.textContent="dark_mode";
    } else {
        // Remove dark mode CSS
        darkModeStylesheet.href = "Loginpage_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    }
}

function toggleDarkModesp() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "signinpage.css";
        Theme_icon.textContent="dark_mode";
    } else {
        // Remove dark mode CSS
        darkModeStylesheet.href = "signinpage_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    }
}

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
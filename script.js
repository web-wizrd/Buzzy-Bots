
async function fetchdata() {
    const resopnse=await fetch('./Training_data.json');
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

    // Loop through each item in the data array
    for (const item of data) {
        // Normalize the user phrases for case insensitivity
        const phrases = item.user.toLowerCase().split(' ');

        // Check if the input matches any of the phrases
        if (phrases.some(phrase => normalizedInput.includes(phrase))) {
            return item.AI;
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



async function sendMessage() {
    let input = document.getElementById('userInput');
    let message = input.value;

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
var num=0;
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
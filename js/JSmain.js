// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,

let submitButton = document.getElementById("submit-button");

// <input type="text" id="fullname">,

let fullnameInput = document.getElementById("fullname");

// <input type="text" id="email">

let emailInput = document.getElementById("email");

// <textarea id="message"></textarea>

let messageInput = document.getElementById("message");

// Declare variable that will 
// store regular expression for email

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors

function validateForm() {

    // Two empty buckets
    let data = {};
    let errors = [];

     /* +-----------+    
    | FULL NAME |
    +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data". */
    
    if (fullnameInput.value.trim() !== "") {
        data.fullname = fullnameInput.value.trim();
    } 
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    else {
        errors.push({ fn: "Full name is missing" });
    }
    // End your conditional here.


   /* +-------+    
    | EMAIL | 
    +-------+ */ 
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
          if (emailInput.value.trim() !== "") {
            if (emailPattern.test(emailInput.value.trim())) {
            data.email = emailInput.value.trim();
          }
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
        // End your nested conditional here.
        else {
            errors.push({ em: "Email is not valid" });
        }
     // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
        } else {
        errors.push({ em: "Email is missing" });
    }

    // End your outer conditional here.


   /* +---------+    
    | MESSAGE | 
    +---------+*/
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
           if (messageInput.value.trim() !== "") {
        data.message = messageInput.value.trim();
    }
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
     else {
        errors.push({ msg: "Message is missing" });
    }   
    // End your conditional here.


   /* +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+ */

    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
       if (errors.length > 0) {
        console.log("Errors:", errors);
    }
       // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
       else {
        console.log("Collected data:", data);

        // Clear text.
        fullnameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }

    }
    // End your conditional here.

// Close your function here
    
// Register your form to "click" event.
submitButton.addEventListener("click", validateForm);

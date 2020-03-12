   // get the reference to full name with id fname
        let fn = document.getElementById("fname");
        // get the reference to email with id email
        let em = document.getElementById("email");
        // get the reference to message with id message
        let msg = document.getElementById("message");
        // get the reference to button with id validate-form
        let btn = document.getElementById("validate-form");
        
        // create the event handler that will take care 
        // of the action following button-click
        function formValidator(){
            
            // create object that will save user inputs (empty bucket)
            let feedback = {};
            // create array that will save error messages (empty bucket)
            let errors = [];
            
            // check if full name has a value
            if (fn.value !== ""){
                // if it does, save it
                feedback.fname = fn.value;
            } else {
                // if it does not, create the error message (and save it too)
                errors.push("<p>Please provide your full name</p>");
            }
            
            // check if email has a value
            if (em.value !== ""){
                // if it does, save it
                feedback.email = em.value;
            } else {
                // if it does not, create the error message (and save it too)
                errors.push("<p>Please provide your email</p>");
            }
            
            // check if message has a value
            // if it does, save it
            // if it does not, create the error message (and save it too)
        
            // create either feedback or display all errors
            
            if (errors.length ===0){
                console.log(feedback);
            }else{
                console.log(errors);
            }
        
        // close your event-handler
        }
        
        // register the button for click event
        btn.addEventListener("click", formValidator);
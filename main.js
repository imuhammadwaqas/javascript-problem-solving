function getInputValue() {
    event.preventDefault();
    const weight = parseFloat(document.getElementById("bodyweight").value);
    const height = parseFloat(document.getElementById("bodyheight").value);

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("bmialert").textContent = "Please enter valid weight and height.";
        console.log(bmi);
    } else {
        const bmi = weight / (height * height);
        let message = `Your BMI is: ${bmi.toFixed(2)}.`;

        if (bmi < 18.5) {
            message += " You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message += " You have a healthy weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            message += " You are overweight.";
        } else {
            message += " You are obese.";
        }

        document.getElementById("bmialert").textContent = message;
    }
}
function changeColor() {
    // Get the user's favorite color from the input field
    const colorInput = document.getElementById("colorName");
    const favoriteColor = colorInput.value;

    // Get the message element
    const messageElement = document.getElementById("coloralert");
    const backcolor=document.getElementById("backcolor");

    // Set the text content and color of the message element
    messageElement.textContent = "Your favorite color is " + favoriteColor;
    messageElement.style.color = favoriteColor;
    backcolor.style.backgroundColor= favoriteColor;
}

function checkEligibility() {
    // Prompt the user for their age
    const userAge = document.getElementById("age").value;
    
    // Check if the user's age is a valid number
    if (userAge !== null && !isNaN(userAge)) {
        const age = parseInt(userAge);

        // Check if the user is old enough to vote (18 or older)
        if (age >= 18) {
            document.getElementById("agealert").innerHTML = "You are eligible to vote.";
        } else {
            document.getElementById("agealert").innerHTML = "You are not old enough to vote.";
        }
    } else {
        document.getElementById("agealert").innerHTML = "Invalid age. Please enter a valid number.";
    }
}
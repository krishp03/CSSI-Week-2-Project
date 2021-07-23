const addWorkout = 
() => {
    const passcodeIn = document.querySelector("#passcode").value;

    console.log(passcodeIn);
    console.log(messageIn);

    const payload = {
        passcode: passcodeIn,
        message: messageIn
    };
    firebase.database().ref().push(payload);
}
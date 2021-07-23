
const addWorkout = 
() => {
    const userWorkout = document.querySelector("#user-in").value;

    console.log(passcodeIn);

    const payload = {
        workout: userWorkout,
    };
    firebase.database().ref().workout.gym.push(payload);

}
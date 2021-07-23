console.log("script running")
const addWorkout = 
() => {
    const userWorkout = document.querySelector("#user-in").value;

    console.log(userWorkout);

    const payload = {
        workout: userWorkout,
    };
    const ref = firebase.database().ref().workouts;
    console.log(ref)

}
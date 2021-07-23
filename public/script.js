


console.log("script running")
const addWorkout = 
() => {
    const userWorkout = document.querySelector("#user-in").value;

    console.log(userWorkout);

    const payload = {
        workout: userWorkout,
    };
    const ref = firebase.database().ref("/workouts/gym");
    console.log(ref.on("value", (snapshot) =>
    {

    }))

}


const handleSubmitSurvey = () =>
{

}







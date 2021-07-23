


console.log("script running")
const addWorkout = 
() => {
    const userWorkout = document.querySelector("#user-in").value;

    console.log(userWorkout);

    const payload = {
        workout: userWorkout,
    };
    

    

}


const handleSubmitSurvey = () =>
{
    const ref = firebase.database().ref("/workouts/gym");

    ref.on("value", (snapshot) => {
        const data = snapshot.val()

        for(let key in data)
        {
            console.log(data[key])
            document.querySelector("#list").innerHTML += `<p> ${data[key]} </p>`;
        }
        
    })
}







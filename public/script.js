


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
    if(document.querySelector("#gym").checked)
        ref = firebase.database().ref("/workouts/gym");
    else
        ref = firebase.database().ref("/workouts/non-gym");

    ref.on("value", (snapshot) => {
        const data = snapshot.val()

        for(let key in data){
            document.querySelector("#list").innerHTML += `<p> ${data[key]} </p>`;
        }
        
    })
}









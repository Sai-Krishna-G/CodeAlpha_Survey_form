document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    console.log("Form Data Submitted:", Object.fromEntries(formData));
    alert("Thank you for submitting the survey!");
    event.target.reset();
});
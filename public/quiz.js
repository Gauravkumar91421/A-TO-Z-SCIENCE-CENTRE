
function startQuiz() {

    let studentName = document.getElementById("studentName").value.trim();
    let subject = document.getElementById("subject").value;

    if (studentName === "") {
        alert("Please enter your name.");
        return;
    }

    if (subject === "") {
        alert("Please select a subject.");
        return;
    }

    // Save data
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("subject", subject);

    // Open Question Page
    window.location.href = "questions.html";
}
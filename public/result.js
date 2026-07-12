let student = localStorage.getItem("studentName");

let subject = localStorage.getItem("subject");

let score = Number(localStorage.getItem("score"));

let total = Number(localStorage.getItem("total"));

let percentage = ((score/total)*100).toFixed(0);




document.getElementById("welcome").innerHTML =
"Congratulations, " + student + "! 🎉";

document.getElementById("student").innerHTML = student;

document.getElementById("subject").innerHTML = subject.toUpperCase();

document.getElementById("score").innerHTML =
score + " / " + total;

document.getElementById("percentage").innerHTML =
percentage + "%";

let grade="";
let message="";

if(percentage>=90){

grade="A+";

message="⭐⭐⭐⭐⭐ Outstanding Performance";

}

else if(percentage>=75){

grade="A";

message="⭐⭐⭐⭐ Excellent Work";

}

else if(percentage>=60){

grade="B";

message="⭐⭐⭐ Good Job";

}

else if(percentage>=40){

grade="C";

message="⭐⭐ Keep Practicing";

}

else{

grade="F";

message="📚 Don't Give Up! Try Again.";

}

document.getElementById("grade").innerHTML=grade;

document.getElementById("message").innerHTML=message;


let review =
JSON.parse(localStorage.getItem("review"));

let html = "";

review.forEach((q,i)=>{

html += `

<div>

<h3>Question ${i+1}</h3>

<p>${q.question}</p>

<p>
Your Answer :
${q.user != null ?
q.options[q.user] :
"Not Answered"}
</p>

<p>
Correct Answer :
${q.options[q.answer]}
</p>

<p>

${q.user === q.answer ?

"✅ Correct"

:

"❌ Wrong"}

</p>

<hr>

</div>

`;

});

document.getElementById("review")
.innerHTML = html;
// -------------------- Questions --------------------

const physicsQuestions = [
{
question: "What is the SI unit of Force?",
options: ["Joule", "Newton", "Pascal", "Watt"],
answer: 1
},
{
question: "Who discovered Gravity?",
options: ["Einstein", "Newton", "Tesla", "Galileo"],
answer: 1
},
{
question: "What is the SI unit of Energy?",
options: ["Watt", "Joule", "Newton", "Volt"],
answer: 1
},
{
question: "Which instrument measures electric current?",
options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
answer: 1
},
{
question: "What is the speed of light in vacuum?",
options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ km/s", "300 m/s"],
answer: 0
},
{
question: "Which law explains inertia?",
options: ["Newton's First Law", "Newton's Second Law", "Hooke's Law", "Ohm's Law"],
answer: 0
},
{
question: "What is the SI unit of Power?",
options: ["Joule", "Newton", "Watt", "Volt"],
answer: 2
},
{
question: "Which mirror is used in vehicles as rear-view mirrors?",
options: ["Plane", "Convex", "Concave", "None"],
answer: 1
},
{
question: "The SI unit of Pressure is:",
options: ["Pascal", "Newton", "Bar", "Joule"],
answer: 0
},
{
question: "Which device converts electrical energy into mechanical energy?",
options: ["Generator", "Motor", "Transformer", "Battery"],
answer: 1
},
{
question: "What is the acceleration due to gravity on Earth?",
options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
answer: 1
},
{
question: "Which color has the longest wavelength?",
options: ["Blue", "Green", "Red", "Violet"],
answer: 2
},
{
question: "The SI unit of Frequency is:",
options: ["Decibel", "Hertz", "Joule", "Tesla"],
answer: 1
},
{
question: "Which lens is used to correct myopia?",
options: ["Convex", "Concave", "Plane", "Cylindrical"],
answer: 1
},
{
question: "Who formulated the laws of motion?",
options: ["Einstein", "Newton", "Faraday", "Maxwell"],
answer: 1
},
{
question: "Which energy is stored in a stretched spring?",
options: ["Kinetic", "Chemical", "Potential", "Heat"],
answer: 2
},
{
question: "The SI unit of Voltage is:",
options: ["Ampere", "Volt", "Ohm", "Watt"],
answer: 1
},
{
question: "Which wave does not require a medium?",
options: ["Sound", "Water", "Light", "Seismic"],
answer: 2
},
{
question: "The unit of Resistance is:",
options: ["Volt", "Ohm", "Ampere", "Tesla"],
answer: 1
},
{
question: "Which force keeps planets in orbit?",
options: ["Magnetic", "Electric", "Gravitational", "Frictional"],
answer: 2
},
{
question: "Which instrument measures temperature?",
options: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"],
answer: 1
},
{
question: "The SI unit of Momentum is:",
options: ["kg·m/s", "Newton", "Joule", "Pascal"],
answer: 0
},
{
question: "Which law relates Voltage, Current and Resistance?",
options: ["Newton's Law", "Ohm's Law", "Hooke's Law", "Boyle's Law"],
answer: 1
},
{
question: "Which mirror forms a virtual and erect image?",
options: ["Convex", "Concave", "Both Plane and Convex", "None"],
answer: 2
},
{
question: "The SI unit of Work is:",
options: ["Watt", "Newton", "Joule", "Pascal"],
answer: 2
},
{
question: "Which property of light causes a rainbow?",
options: ["Reflection", "Dispersion", "Refraction", "Diffraction"],
answer: 1
},
{
question: "The SI unit of Electric Charge is:",
options: ["Volt", "Ampere", "Coulomb", "Ohm"],
answer: 2
},
{
question: "What is the boiling point of water at normal pressure?",
options: ["90°C", "95°C", "100°C", "110°C"],
answer: 2
},
{
question: "The force opposing motion is called:",
options: ["Gravity", "Friction", "Magnetism", "Tension"],
answer: 1
},
{
question: "Which planet has the strongest gravitational pull in the Solar System?",
options: ["Earth", "Mars", "Jupiter", "Saturn"],
answer: 2
}
];

const chemistryQuestions = [
{
question: "What is the chemical formula of water?",
options: ["H2O", "CO2", "NaCl", "O2"],
answer: 0
},
{
question: "What is the chemical symbol of Sodium?",
options: ["So", "Na", "S", "N"],
answer: 1
},
{
question: "Which gas is most abundant in Earth's atmosphere?",
options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
answer: 2
},
{
question: "What is the pH value of pure water?",
options: ["5", "6", "7", "8"],
answer: 2
},
{
question: "Which gas is released during photosynthesis?",
options: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon Dioxide"],
answer: 2
},
{
question: "What is the chemical formula of Carbon Dioxide?",
options: ["CO", "CO2", "C2O", "CO3"],
answer: 1
},
{
question: "Which acid is present in vinegar?",
options: ["Sulfuric Acid", "Acetic Acid", "Nitric Acid", "Hydrochloric Acid"],
answer: 1
},
{
question: "What is the symbol of Gold?",
options: ["Ag", "Au", "Gd", "Go"],
answer: 1
},
{
question: "Which element is essential for breathing?",
options: ["Hydrogen", "Nitrogen", "Oxygen", "Helium"],
answer: 2
},
{
question: "What is the hardest natural substance?",
options: ["Iron", "Diamond", "Gold", "Graphite"],
answer: 1
},
{
question: "Which gas turns lime water milky?",
options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
answer: 2
},
{
question: "Which metal is liquid at room temperature?",
options: ["Mercury", "Iron", "Copper", "Aluminium"],
answer: 0
},
{
question: "What is the chemical formula of common salt?",
options: ["NaOH", "NaCl", "KCl", "HCl"],
answer: 1
},
{
question: "Which element has the atomic number 1?",
options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
answer: 1
},
{
question: "Which gas is known as laughing gas?",
options: ["Nitrous Oxide", "Carbon Monoxide", "Hydrogen", "Methane"],
answer: 0
},
{
question: "Which acid is found in lemons?",
options: ["Citric Acid", "Acetic Acid", "Lactic Acid", "Oxalic Acid"],
answer: 0
},
{
question: "What is the chemical symbol of Iron?",
options: ["Ir", "Fe", "In", "Fi"],
answer: 1
},
{
question: "Which element is used in pencils?",
options: ["Diamond", "Carbon (Graphite)", "Lead", "Silicon"],
answer: 1
},
{
question: "Which gas is used in balloons?",
options: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
answer: 1
},
{
question: "Which vitamin is produced when sunlight falls on skin?",
options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
answer: 2
},
{
question: "Which acid is present in curd?",
options: ["Citric Acid", "Lactic Acid", "Acetic Acid", "Formic Acid"],
answer: 1
},
{
question: "What is the chemical symbol of Potassium?",
options: ["Po", "Pt", "K", "P"],
answer: 2
},
{
question: "Which gas is responsible for global warming?",
options: ["Nitrogen", "Carbon Dioxide", "Hydrogen", "Oxygen"],
answer: 1
},
{
question: "What is the atomic number of Oxygen?",
options: ["6", "7", "8", "9"],
answer: 2
},
{
question: "Which metal is used in electrical wires?",
options: ["Iron", "Copper", "Lead", "Zinc"],
answer: 1
},
{
question: "Which gas is used by plants during photosynthesis?",
options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
answer: 1
},
{
question: "Which element is represented by 'Cl'?",
options: ["Calcium", "Chlorine", "Cobalt", "Carbon"],
answer: 1
},
{
question: "What is the common name of Calcium Carbonate?",
options: ["Limestone", "Salt", "Sugar", "Baking Soda"],
answer: 0
},
{
question: "Which substance is known as baking soda?",
options: ["NaCl", "NaHCO3", "KOH", "CaCO3"],
answer: 1
},
{
question: "Which gas is released when acids react with metals?",
options: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Nitrogen"],
answer: 0
}
];
const englishQuestions = [
{
question: "Choose the correct article: ___ apple a day keeps the doctor away.",
options: ["A", "An", "The", "No article"],
answer: 1
},
{
question: "Choose the correct synonym of 'Happy'.",
options: ["Sad", "Joyful", "Angry", "Lazy"],
answer: 1
},
{
question: "Choose the correct antonym of 'Hot'.",
options: ["Warm", "Cold", "Boiling", "Heat"],
answer: 1
},
{
question: "Which word is a noun?",
options: ["Run", "Beautiful", "School", "Quickly"],
answer: 2
},
{
question: "Choose the correct plural of 'Child'.",
options: ["Childs", "Children", "Childes", "Childrens"],
answer: 1
},
{
question: "Choose the correct spelling.",
options: ["Recieve", "Receive", "Receeve", "Receve"],
answer: 1
},
{
question: "Which sentence is correct?",
options: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."],
answer: 1
},
{
question: "Choose the correct preposition: The book is ___ the table.",
options: ["on", "in", "at", "to"],
answer: 0
},
{
question: "What is the past tense of 'Write'?",
options: ["Written", "Wrote", "Writes", "Writing"],
answer: 1
},
{
question: "Which word is an adjective?",
options: ["Beauty", "Beautiful", "Beautify", "Beauties"],
answer: 1
},
{
question: "Choose the correct pronoun: ___ is my best friend.",
options: ["He", "Him", "His", "Her"],
answer: 0
},
{
question: "Which punctuation mark ends a question?",
options: [".", ",", "?", "!"],
answer: 2
},
{
question: "Choose the correct opposite of 'Fast'.",
options: ["Quick", "Slow", "Rapid", "Speed"],
answer: 1
},
{
question: "Which is a verb?",
options: ["Dance", "Table", "Chair", "Book"],
answer: 0
},
{
question: "Fill in the blank: She ___ reading a novel.",
options: ["is", "are", "am", "be"],
answer: 0
},
{
question: "Choose the correct possessive form.",
options: ["Rahuls book", "Rahul's book", "Rahuls' book", "Rahul book"],
answer: 1
},
{
question: "Which word is an adverb?",
options: ["Quick", "Quickly", "Quickness", "Quicker"],
answer: 1
},
{
question: "Choose the correct sentence.",
options: ["I has a pen.", "I have a pen.", "I having a pen.", "I hads a pen."],
answer: 1
},
{
question: "What is the synonym of 'Big'?",
options: ["Small", "Tiny", "Large", "Short"],
answer: 2
},
{
question: "Choose the correct conjunction: I was tired, ___ I slept early.",
options: ["but", "so", "because", "or"],
answer: 1
},
{
question: "Which word is a pronoun?",
options: ["He", "Boy", "School", "Run"],
answer: 0
},
{
question: "Choose the correct form: They ___ playing football.",
options: ["is", "are", "am", "be"],
answer: 1
},
{
question: "What is the plural of 'Mouse'?",
options: ["Mouses", "Mice", "Mousees", "Mousies"],
answer: 1
},
{
question: "Choose the correct article: ___ elephant is a large animal.",
options: ["A", "An", "The", "No article"],
answer: 1
},
{
question: "Which sentence is in the future tense?",
options: ["I eat rice.", "I ate rice.", "I will eat rice.", "I am eating rice."],
answer: 2
},
{
question: "Choose the correct word: She sings ___.",
options: ["beautiful", "beauty", "beautifully", "beautify"],
answer: 2
},
{
question: "Which word is an interjection?",
options: ["Wow!", "Book", "Run", "Slow"],
answer: 0
},
{
question: "Choose the correct antonym of 'Rich'.",
options: ["Poor", "Wealthy", "Happy", "Large"],
answer: 0
},
{
question: "Fill in the blank: We ___ to school every day.",
options: ["go", "goes", "gone", "going"],
answer: 0
},
{
question: "Choose the correct spelling.",
options: ["Environment", "Enviroment", "Environmant", "Envirnment"],
answer: 0
}
];
const mathematicsQuestions = [
{
question: "What is 15 + 27?",
options: ["40", "42", "43", "44"],
answer: 1
},
{
question: "What is 9 × 8?",
options: ["72", "81", "64", "70"],
answer: 0
},
{
question: "What is 144 ÷ 12?",
options: ["10", "11", "12", "13"],
answer: 2
},
{
question: "What is the square of 12?",
options: ["124", "142", "144", "121"],
answer: 2
},
{
question: "What is the cube of 4?",
options: ["16", "32", "64", "48"],
answer: 2
},
{
question: "What is √81?",
options: ["8", "9", "10", "7"],
answer: 1
},
{
question: "Which number is a prime number?",
options: ["15", "21", "17", "27"],
answer: 2
},
{
question: "What is 25% of 200?",
options: ["25", "50", "75", "100"],
answer: 1
},
{
question: "Solve: 7²",
options: ["14", "49", "56", "64"],
answer: 1
},
{
question: "What is the value of π (approximately)?",
options: ["2.14", "3.14", "4.13", "3.41"],
answer: 1
},
{
question: "How many degrees are in a right angle?",
options: ["45°", "90°", "180°", "360°"],
answer: 1
},
{
question: "What is the perimeter of a square with side 8 cm?",
options: ["16 cm", "24 cm", "32 cm", "64 cm"],
answer: 2
},
{
question: "What is the area of a rectangle with length 10 cm and width 5 cm?",
options: ["15 cm²", "30 cm²", "50 cm²", "60 cm²"],
answer: 2
},
{
question: "What is 3/4 of 20?",
options: ["10", "12", "15", "18"],
answer: 2
},
{
question: "Solve: 18 + 24 ÷ 6",
options: ["7", "22", "42", "30"],
answer: 1
},
{
question: "What is the LCM of 6 and 8?",
options: ["12", "18", "24", "48"],
answer: 2
},
{
question: "What is the HCF of 18 and 24?",
options: ["3", "6", "9", "12"],
answer: 1
},
{
question: "Convert 0.5 into a fraction.",
options: ["1/4", "1/2", "2/3", "3/4"],
answer: 1
},
{
question: "What is 2³?",
options: ["6", "8", "9", "12"],
answer: 1
},
{
question: "How many sides does a hexagon have?",
options: ["5", "6", "7", "8"],
answer: 1
},
{
question: "What is the sum of angles in a triangle?",
options: ["90°", "180°", "270°", "360°"],
answer: 1
},
{
question: "What is 100 − 37?",
options: ["63", "67", "73", "57"],
answer: 0
},
{
question: "What is 11 × 11?",
options: ["111", "121", "131", "101"],
answer: 1
},
{
question: "What is 50% of 80?",
options: ["20", "30", "40", "50"],
answer: 2
},
{
question: "How many minutes are there in 2 hours?",
options: ["60", "90", "120", "180"],
answer: 2
},
{
question: "What is the value of 5 + 3 × 2?",
options: ["16", "11", "13", "10"],
answer: 1
},
{
question: "Which number is divisible by both 2 and 3?",
options: ["14", "18", "25", "35"],
answer: 1
},
{
question: "What is the diameter of a circle with radius 7 cm?",
options: ["7 cm", "10 cm", "12 cm", "14 cm"],
answer: 3
},
{
question: "Solve: 45 ÷ 5",
options: ["8", "9", "10", "11"],
answer: 1
},
{
question: "What is the next number in the sequence: 2, 4, 6, 8, ?",
options: ["9", "10", "11", "12"],
answer: 1
}
];
const biologyQuestions = [
{
question: "What is the powerhouse of the cell?",
options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"],
answer: 1
},
{
question: "Which part of the plant performs photosynthesis?",
options: ["Root", "Stem", "Leaf", "Flower"],
answer: 2
},
{
question: "How many chambers are there in the human heart?",
options: ["2", "3", "4", "5"],
answer: 2
},
{
question: "Which blood group is called the universal donor?",
options: ["A", "B", "AB", "O Negative"],
answer: 3
},
{
question: "What is the largest organ in the human body?",
options: ["Liver", "Heart", "Skin", "Brain"],
answer: 2
},
{
question: "Which vitamin is produced when the skin is exposed to sunlight?",
options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
answer: 3
},
{
question: "Which gas do humans inhale for respiration?",
options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
answer: 2
},
{
question: "What is the basic unit of life?",
options: ["Atom", "Cell", "Tissue", "Organ"],
answer: 1
},
{
question: "Which organ purifies blood in the human body?",
options: ["Heart", "Kidney", "Lungs", "Liver"],
answer: 1
},
{
question: "Which blood cells fight infections?",
options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
answer: 1
},
{
question: "Which pigment gives plants their green color?",
options: ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"],
answer: 1
},
{
question: "How many bones are there in an adult human body?",
options: ["206", "201", "210", "208"],
answer: 0
},
{
question: "Which organ pumps blood throughout the body?",
options: ["Lungs", "Brain", "Heart", "Kidney"],
answer: 2
},
{
question: "What is the normal body temperature of a healthy human?",
options: ["35°C", "36°C", "37°C", "38°C"],
answer: 2
},
{
question: "Which part of the cell contains genetic material?",
options: ["Cell Wall", "Cytoplasm", "Nucleus", "Mitochondria"],
answer: 2
},
{
question: "Which vitamin helps in blood clotting?",
options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
answer: 3
},
{
question: "Which organ is responsible for breathing?",
options: ["Heart", "Kidney", "Lungs", "Liver"],
answer: 2
},
{
question: "Which kingdom do mushrooms belong to?",
options: ["Plantae", "Animalia", "Fungi", "Protista"],
answer: 2
},
{
question: "What is the largest mammal in the world?",
options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
answer: 1
},
{
question: "Which blood cells carry oxygen?",
options: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
answer: 1
},
{
question: "Which organ produces insulin?",
options: ["Liver", "Kidney", "Pancreas", "Heart"],
answer: 2
},
{
question: "What is the study of plants called?",
options: ["Zoology", "Botany", "Ecology", "Genetics"],
answer: 1
},
{
question: "Which is the longest bone in the human body?",
options: ["Femur", "Tibia", "Humerus", "Radius"],
answer: 0
},
{
question: "Which part of the eye controls the amount of light entering?",
options: ["Retina", "Cornea", "Iris", "Lens"],
answer: 2
},
{
question: "Which organ stores bile?",
options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
answer: 1
},
{
question: "Which disease is caused by the deficiency of Vitamin C?",
options: ["Rickets", "Scurvy", "Night Blindness", "Beriberi"],
answer: 1
},
{
question: "Which organ is mainly responsible for digestion?",
options: ["Heart", "Lungs", "Stomach", "Brain"],
answer: 2
},
{
question: "What is the process by which plants make food?",
options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
answer: 1
},
{
question: "Which blood vessel carries blood away from the heart?",
options: ["Vein", "Artery", "Capillary", "Valve"],
answer: 1
},
{
question: "Which organ controls all activities of the human body?",
options: ["Heart", "Brain", "Lungs", "Kidney"],
answer: 1
}
];
const subject = localStorage.getItem("subject");

let questions = [];
if (subject === "physics") {
    questions = physicsQuestions;
}
else if (subject === "chemistry") {
    questions = chemistryQuestions;
}
else if (subject === "biology") {
    questions = biologyQuestions;
}
else if (subject === "english") {
    questions = englishQuestions;
}
else if (subject === "mathematics") {
    questions = mathematicsQuestions;
}
else {
    questions = physicsQuestions; // Default
}
// -------------------- Variables --------------------
questions = [...questions]
  .sort(() => Math.random - 0.5)
  .slice(0,10);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

questions = shuffleArray([...questions]).slice(0,10);

console.log(questions);

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

// Student Info
document.getElementById("studentName").textContent =
localStorage.getItem("studentName") || "Student";

document.getElementById("subjectName").textContent =
localStorage.getItem("subject") || "science";

// -------------------- Load Question --------------------

function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").textContent =
    (currentQuestion + 1) + ". " + q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("option" + i).textContent =
        q.options[i];
    }

    document
    .querySelectorAll('input[name="answer"]')
    .forEach(r => r.checked = false);

    if (userAnswers[currentQuestion] !== null) {
        document.querySelector(
        `input[value="${userAnswers[currentQuestion]}"]`
        ).checked = true;
    }

    updateProgress();
}

// -------------------- Save Answer --------------------

function saveAnswer() {

    let selected = document.querySelector(
    'input[name="answer"]:checked'
    );

    if (selected) {
        userAnswers[currentQuestion] =
        Number(selected.value);
    }

}

// -------------------- Next --------------------

document.getElementById("nextBtn").onclick = () => {

    saveAnswer();

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        loadQuestion();

    } else {

        showResult();

};
}

// -------------------- Previous --------------------

document.getElementById("prevBtn").onclick = () => {

    saveAnswer();

    if (currentQuestion > 0) {

        currentQuestion--;
        loadQuestion();

    }

};

// -------------------- Progress --------------------

function updateProgress() {

    let percent =
    ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
    percent + "%";

}

// -------------------- Timer --------------------

let timeLeft = 600;

const timer = setInterval(() => {

    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    document.getElementById("time").textContent =
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

    if (timeLeft <= 0) {

        clearInterval(timer);
        showResult();

    }

    timeLeft--;

},1000);

// -------------------- Result --------------------

function showResult() {

    saveAnswer();

    clearInterval(timer);

    let score = 0;
    let review = [];

    questions.forEach((q,index)=>{

        if(userAnswers[index] === q.answer){
            score++;
        }

        review.push({

            question : q.question,

            options : q.options,

            user : userAnswers[index],

            answer : q.answer

        });

    });

    localStorage.setItem("score",score);
    localStorage.setItem("total",questions.length);

    localStorage.setItem(
        "review",
        JSON.stringify(review)
    );

    window.location.href = "result.html";

}
// -------------------- Start --------------------

loadQuestion();
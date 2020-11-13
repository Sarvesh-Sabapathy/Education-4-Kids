/* Constant qBank is an array for the question bank that will give 6 random questions */
const qBank = [
    {
        question: "An apple is a _____.",
        answers: ["Grain", "Vegetable", "Milk", "Fruit"],
        correct: "Fruit",
        QID: "1"
    },
    {
        question: "A banana is a _____.",
        answers: ["Vegetable", "Fruit", "Grain", "Milk"],
        correct: "Fruit",
        QID: "2"
    },
    {
        question: "Cheese is a ____.",
        answers: ["Milk", "Vegetable", "Grain", "Fruit"],
        correct: "Milk",
        QID: "3"
    },
    {
        question: "Cereal is a _____.",
        answers: ["Grain", "Milk", "Fruit", "Vegetable"],
        correct: "Grain",
        QID: "4"
    },
    {
        question: "Broccoli is a _________.",
        answers: ["Milk", "Vegetable", "Fruit", "grain"],
        correct: "Vegetable",
        QID: "5"
    },
    {
        question: "A carrot is a _________.",
        answers: ["Milk", "Fruit", "Grain", "Vegetable"],
        correct: "Vegetable",
        QID: "6"
    },
    {
        question: "Did you do your homework today?",
        answers: ["Yes", "No"],
        correct: "Yes",
        QID: "7"
    },
    {
        question: "The colour of the buttons are ____.",
        answers: ["Red", "Blue", "Green", "Orange"],
        correct: "Blue",
        QID: "8"
    },
    {
        question: "Mary had a little ____.",
        answers: ["Lamb", "Sheep", "Dog", "Cat"],
        correct: "Lamb",
        QID: "9"
    },
    {
        question: "The wheels on the ___ go round and round.",
        answers: ["Bike", "Car", "Bus", "Train"],
        correct: "Bus",
        QID: "10"
    },
    {
        question: "4 + 5 = ___",
        answers: ["7", "8", "9", "10"],
        correct: "9",
        QID: "11"
    },
    {
        question: "10 - 3 = ___",
        answers: ["7", "6", "5", "4"],
        correct: "7",
        QID: "12"
    },
    {
        question: "7 + 13 = ___ ",
        answers: ["15", "17", "20", "24"],
        correct: "20",
        QID: "13"
    },
    {
        question: "13 - 7 = ___",
        answers: ["4", "6", "8", "10"],
        correct: "6",
        QID: "14"
    },
    {
        question: "Cows go ___.",
        answers: ["Bah", "Moo", "Meow", "Woof"],
        correct: "Moo",
        QID: "15"
    },
    {
        question: "Sheeps go ___.",
        answers: ["Moo", "Bah", "Woof", "Meow"],
        correct: "Bah",
        QID: "16"
    },
    {
        question: "Cats go ____.",
        answers: ["Meow", "Moo", "Bah", "Woof"],
        correct: "Meow",
        QID: "17"
    },
    {
        question: "Dogs go ____.",
        answers: ["Bah", "Woof", "Meow", "Moo"],
        correct: "Woof",
        QID: "18"
    },
    {
        question: "There are __ months in a year.",
        answers: ["10", "12", "14", "16"],
        correct: "12",
        QID: "19"
    },
    {
        question: "There are __ hours in a day.",
        answers: ["24", "12", "30", "16"],
        correct: "24",
        QID: "20"
    },
    {
        question: "There are __ seconds in a minute.",
        answers: ["60", "50", "40", "30"],
        correct: "60",
        QID: "21"
    },
    {
        question: "There are __ minutes in an hour.",
        answers: ["30", "40", "50", "60"],
        correct: "60",
        QID: "22"
    },
    {
        question: "Your ears are for _______.",
        answers: ["Speaking", "Hearing", "Seeing", "Smelling"],
        correct: "Hearing",
        QID: "23"
    },
    {
        question: "Your mouth is for ______.",
        answers: ["Speaking", "Seeing", "Smelling", "Hearing"],
        correct: "Speaking",
        QID: "24"
    },
    {
        question: "Your eyes are for ______.",
        answers: ["Smelling", "Speaking", "Hearing", "Seeing"],
        correct: "Seeing",
        QID: "25"
    },
    {
        question: "Your nose is for ________.",
        answers: ["Seeing", "Hearing", "Smelling", "Speaking"],
        correct: "Smelling",
        QID: "26"
    },
    {
        question: "There are __ letters in the alphabet.",
        answers: ["18", "23", "26", "31"],
        correct: "26",
        QID: "27"
    },
    {
        question: "There are __ colours in a rainbow.",
        answers: ["6", "12", "3", "5"],
        correct: "6",
        QID: "28"
    },
    {
        question: "There are __ vowels in the alphabet.",
        answers: ["1", "3", "5", "7"],
        correct: "5",
        QID: "29"
    },
];
 
/* Instead of just importing the top 6 questions in the array, it exports 6 at random. */
export default (n = 6) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
import React from 'react';
import './ObjectsStyles.css';
import Backpack from './Object Photos/Backpack.png';
import Burger from './Object Photos/Burger.png';
import Butterfly from './Object Photos/Butterfly.png';
import Dog from './Object Photos/Dog.png';
import Donut from './Object Photos/Donut.png';
import Fire from './Object Photos/Fire.png';
import Ghost from './Object Photos/Ghost.png';
import Grapes from './Object Photos/Grapes.png';
import Happy from './Object Photos/Happy.png';
import HotDog from './Object Photos/HotDog.png';
import Juice from './Object Photos/Juice.png';
import Milk from './Object Photos/Milk.png';
import Monkey from './Object Photos/Monkey.png';
import Muffin from './Object Photos/Muffin.png';
import Orange from './Object Photos/Orange.png';
import Pirate from './Object Photos/Pirate.png';
import Sad from './Object Photos/Sad.png';
import Sushi from './Object Photos/Sushi.png';
import Teacher from './Object Photos/Teacher.png';
import Watermelon from './Object Photos/Watermelon.png';

/* Constant qBank is an array for the question bank that will give 6 random images */
const qBank = [
    {
        question: <img className = 'Objects' src={Backpack} alt= 'Object' />,
        answers: ["Backpack", "Books", "Pencil", "Table"],
        correct: "Backpack",
        QID: "1"
    },
    {
        question: <img className = 'Objects' src={Burger} alt= 'Object' />,
        answers: ["HotDog", "Burger", "Salad", "Bread"],
        correct: "Burger",
        QID: "2"
    },
    {
        question: <img className = 'Objects' src={Butterfly} alt= 'Object' />,
        answers: ["Catterpillar", "Ant", "Butterfly", "Bumblebee"],
        correct: "Butterfly",
        QID: "3"
    },
    {
        question: <img className = 'Objects' src={Dog} alt= 'Object' />,
        answers: ["Cat", "Horse", "Rooster", "Dog"],
        correct: "Dog",
        QID: "4"
    },
    {
        question: <img className = 'Objects' src={Donut} alt= 'Object' />,
        answers: ["Donut", "Muffin", "Apple", "Cake"],
        correct: "Donut",
        QID: "5"
    },
    {
        question: <img className = 'Objects' src={Fire} alt= 'Object' />,
        answers: ["Water", "Fire", "Lightning", "Dirt"],
        correct: "Fire",
        QID: "6"
    },
    {
        question: <img className = 'Objects' src={Ghost} alt= 'Object' />,
        answers: ["Skeleton", "Zombie", "Ghost", "Vampire"],
        correct: "Ghost",
        QID: "7"
    },
    {
        question: <img className = 'Objects' src={Grapes} alt= 'Object' />,
        answers: ["Orange", "Apple", "Banana", "Grapes"],
        correct: "Grapes",
        QID: "8"
    },
    {
        question: <img className = 'Objects' src={Happy} alt= 'Object' />,
        answers: ["Happy Face", "Angry Face", "Sad Face", "Confused Face"],
        correct: "Happy Face",
        QID: "9"
    },
    {
        question: <img className = 'Objects' src={HotDog} alt= 'Object' />,
        answers: ["Burger", "HotDog", "Chicken", "Pasta"],
        correct: "HotDog",
        QID: "10"
    },
    {
        question: <img className = 'Objects' src={Juice} alt= 'Object' />,
        answers: ["Milk", "Water", "Juice", "Ice Cube"],
        correct: "Juice",
        QID: "11"
    },
    {
        question: <img className = 'Objects' src={Milk} alt= 'Object' />,
        answers: ["Juice", "Water", "Soda", "Milk"],
        correct: "Milk",
        QID: "12"
    },
    {
        question: <img className = 'Objects' src={Monkey} alt= 'Object' />,
        answers: ["Monkey", "Lion", "Cat", "Cheetah"],
        correct: "Monkey",
        QID: "13"
    },
    {
        question: <img className = 'Objects' src={Muffin} alt= 'Object' />,
        answers: ["Donut", "Muffin", "Brownie", "Chocolate"],
        correct: "Muffin",
        QID: "14"
    },
    {
        question: <img className = 'Objects' src={Orange} alt= 'Object' />,
        answers: ["Apple", "Pear", "Orange", "Grapes"],
        correct: "Orange",
        QID: "15"
    },
    {
        question: <img className = 'Objects' src={Pirate} alt= 'Object' />,
        answers: ["Superman", "Robber", "Fire Fighter", "Pirate"],
        correct: "Pirate",
        QID: "16"
    },
    {
        question: <img className = 'Objects' src={Sad} alt= 'Object' />,
        answers: ["Sad Face", "Happy Face", "Confused Face", "Angry Face"],
        correct: "Sad Face",
        QID: "17"
    },
    {
        question: <img className = 'Objects' src={Sushi} alt= 'Object' />,
        answers: ["Lettuce", "Sushi", "Cucumber", "Noodles"],
        correct: "Sushi",
        QID: "18"
    },
    {
        question: <img className = 'Objects' src={Teacher} alt= 'Object' />,
        answers: ["Construction Worker", "Doctor", "Teacher", "Waiter"],
        correct: "Teacher",
        QID: "19"
    },
    {
        question: <img className = 'Objects' src={Watermelon} alt= 'Object' />,
        answers: ["Grapefruit", "Orange", "Peach", "Watermelon"],
        correct: "Watermelon",
        QID: "20"
    },
];
 
/* Instead of just importing the top 6 questions in the array, it exports 6 at random. */
export default (n = 20) =>
    Promise.resolve(qBank.sort(() => 0.1 - Math.random()).slice(0, 6));

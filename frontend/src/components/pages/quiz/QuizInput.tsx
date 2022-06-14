import { QuizModel } from "./QuizModel";

export const quizInput: QuizModel[] = [
    {
        id: 0,
        question: "Who is the first Bearer of the one ring?",
        joyces: ["Frodo", "Smeagol", "Sauron", "Gandalf"],
        correctAnswer: "Sauron",
        userAnswer: ""
    },
    {
        id: 1,
        question: "How did Gandalf escape Isengard?",
        joyces: [
            "A great eagle saved him",
            "Dark magic",
            "Radagast the brown came to rescue"
        ],
        correctAnswer: "A great eagle saved him",
        userAnswer: ""
    },
    {
        id: 2,
        question: "What is Wormtongue’s real name?",
        joyces: ["Grima", "Gima", "Grim", "Glima"],
        correctAnswer: "Grima",
        userAnswer: ""
    },
    {
        id: 3,
        question:
            "What is the name of the giant spider who tried to eat Frodo?",
        joyces: ["Shelbo", "Shelob", "Shelop", "Scelob"],
        correctAnswer: "Shelob",
        userAnswer: ""
    },
    {
        id: 4,
        question: "What type of animal does Gollum give Frodo to eat?",
        joyces: [
            "Zebra",
            "Cat",
            "Cow",
            "Rat",
            "Rabbit",
            "Mouse",
            "Wolf",
            "Fish"
        ],
        correctAnswer: "Rabbit",
        userAnswer: ""
    }
];

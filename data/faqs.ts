import {string} from "prop-types";

export type FAQ = {
    question: string
    answer: string
}
export const FAQS: FAQ[] = [
    {
        question: "How do I add my project to Avalanche Projects?",
        answer: "Contact us via Telegram. See footer."
    }, {
        question: "What is Avalanche?",
        answer: "Avalanche is a high-performance smart-contract-enabled blockchain."
    }, {
        question: "Who made Avalanche?",
        answer: "Avalanche was invented by Emin Gun Sirer."
    }]
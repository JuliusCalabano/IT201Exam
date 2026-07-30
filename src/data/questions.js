
const questions = [
    {
        question: "Which of the following is an example of a dynamic web application?",
        type: "multiple",
        options:
            ["Personal Resume Website",
                "Company Contact Page ",
                "Facebook",
                "Portfolio Website"],
        correct: 2
    },
    {
        question: "A developer accidentally removed one attribute from the code. <a>Visit Google</a> Which attribute was most likely removed?",
        type: "multiple",
        options:
            ["src",
                "target",
                "alt",
                "href"],
        correct: 3
    },
    {
        question: "A company website contains the following code. <img src=\"logo.png\" alt=\"ABC Company Logo\"> The image file was accidentally deleted from the server.",
        type: "multiple",
        options: [
            "The browser displays the alt text instead of the image.",
            "The browser displays a broken image without the alt text.",
            "The browser automatically loads another image.",
            "The webpage fails to load completely."
        ],
        correct: 0
    },
    {
        question: "A programmer wants to display this information on a webpage. Instead of writing HTML tables, the programmer used only unordered lists. Which is the best reason this is considered poor design?",
        type: "multiple",
        options: [
            "Lists are intended for related items, not tabular data.",
            "Lists cannot display multiple pieces of information.",
            "Tables better organize data into rows and columns.",
            "Tables are required whenever numbers are displayed."
        ],
        correct: 2
    },
    {
        question: "A business owner says, 'I don't want to contact a developer every time I change the prices of my products.' Which website solution would best satisfy this requirement?",
        type: "multiple",
        options: [
            "Static website with additional images.",
            "Dynamic website connected to a database.",
            "Static website with more hyperlinks.",
            "Static website containing multiple HTML pages."
        ],
        correct: 1
    },
    {
        question: "Which situation would NOT normally require a dynamic website?",
        type: "multiple",
        options: [
            "A website where customers create accounts and place orders.",
            "A website where users submit online applications.",
            "A website where administrators frequently update product information.",
            "A website that only provides company information."
        ],
        correct: 3
    },
    {
        question: "What does the acronym HTML stand for?",
        type: "multiple",
        options: [
            "HyperText Markdown Language",
            "Hyper Transfer Markup Language",
            "HyperText Markup Language",
            "HighText Machine Language"
        ],
        correct: 2
    },
    {
        question: "Which statement about HTML is correct?",
        type: "multiple",
        options: [
            "Tag names must always be lowercase.",
            "Tag names should never be uppercase.",
            "Tag names are not case-sensitive.",
            "Tag names must use the same case throughout the document."
        ],
        correct: 2
    },
    {
        type: "identification",
        question: "It is the process of creating and maintaining websites and web applications.",
        answer: "Web Development"
    },
    {
        type: "identification",
        question: "A website whose content usually changes only when edited by the developer.",
        answer: "Static Website"
    },
    {
        type: "identification",
        question: "A website that allows users to interact with content and retrieve data from a database.",
        answer: "Dynamic Website"
    },
    {
        type: "identification",
        question: "The attribute that specifies the destination URL of a hyperlink.",
        answer: "href"
    },
    {
        type: "identification",
        question: "The HTML tag used to display an image.",
        answer: "<img>"
    },
    {
        type: "identification",
        question: "The required attribute that specifies the image file location.",
        answer: "src"
    },
    {
        type: "identification",
        question: "The HTML element used to create a table row.",
        answer: "<tr>"
    },
    {
        type: "identification",
        question: "Which HTML element creates a table?",
        answer: "<table>"
    },
    {
        type: "identification",
        question: "Which attribute provides alternative text for an image?",
        answer: "alt"
    },
    {
        type: "identification",
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "<a>"
    },
    {
        type: "identification",
        question: "He is credited as the inventor of HTML, which became the foundation of the World Wide Web.",
        answer: "Tim Berners Lee"
    },
    {
        type: "identification",
        question: "In what year was HyperText Markup Language (HTML) first introduced to the public?",
        answer: "1991"
    }
];
export default questions;
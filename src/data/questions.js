const questions = [
    {
        question: "Which term best describes the process of creating and maintaining a website that runs on the internet and allows users to access its content?",
        type: "multiple",
        options: [
            "Web development",
            "Database management",
            "Software installation",
            "Network configuration"
        ],
        correct: 0
    },

    {
        question: "A developer creates a website for a person that contains personal details and a resume. The content can only be changed by modifying the source code. What type of web application is being described?",
        type: "multiple",
        options: [
            "Dynamic web application",
            "Static web application",
            "Full-stack application",
            "Responsive application"
        ],
        correct: 1
    },

    {
        question: "A company wants a website with frontend and backend components and a backoffice where content updates can be managed. Which type of web application best matches this requirement?",
        type: "multiple",
        options: [
            "Static web application",
            "Personal website",
            "Dynamic web application",
            "Source-code website"
        ],
        correct: 2
    },

    {
        question: "A developer is assigned to create the layout, design, and interactive features that users see and use through their browser. Which position best matches this responsibility?",
        type: "multiple",
        options: [
            "Backend developer",
            "Database developer",
            "Full-stack developer",
            "Frontend developer"
        ],
        correct: 3
    },

    {
        question: "A web application needs a developer to handle data processing, storage, retrieval, and the information required by the frontend. Which position is responsible for these tasks?",
        type: "multiple",
        options: [
            "Backend developer",
            "Frontend developer",
            "Web designer",
            "Content developer"
        ],
        correct: 0
    },

    {
        question: "A developer is capable of building both the client-side and server-side parts of a web application. Which position best describes this developer?",
        type: "multiple",
        options: [
            "Frontend developer",
            "Full-stack developer",
            "Backend developer",
            "Web designer"
        ],
        correct: 1
    },

    {
        question: "A business uses a website to count product details, manage online inventory, and operate a point-of-sale system. What capability of web applications does this example demonstrate?",
        type: "multiple",
        options: [
            "Creating access to any device",
            "Generating additional revenue",
            "Automating business processes",
            "Eliminating software installation"
        ],
        correct: 2
    },

    {
        question: "A company moves its local software to a website so users only need a browser to create, edit, and share documents. What benefit of web applications is being demonstrated?",
        type: "multiple",
        options: [
            "Automating business processes",
            "Generating additional revenue",
            "Creating access to any device",
            "Eliminating the need to install additional software"
        ],
        correct: 3
    },

    {
        question: "A company wants customers to access its website using a phone, tablet, laptop, or personal computer while allowing the website to adjust to different screen sizes. What capability is being described?",
        type: "multiple",
        options: [
            "Creating access to any device",
            "Automating business processes",
            "Generating additional revenue",
            "Eliminating software installation"
        ],
        correct: 0
    },

    {
        question: "A developer writes <P> instead of <p> in an HTML document. Based on the module, what will happen?",
        type: "multiple",
        options: [
            "The browser will always display an error.",
            "The tags will be treated the same way.",
            "The paragraph will not appear on the webpage.",
            "The browser will treat the tags as different elements."
        ],
        correct: 1
    },

    {
        question: "Which group of HTML elements is described as being specifically designed for creating headings, ranging from the most important to the least important heading?",
        type: "multiple",
        options: [
            "<p> to <br>",
            "<a> to <img>",
            "<h1> to <h6>",
            "<head> to <body>"
        ],
        correct: 2
    },

    {
        question: "A student is writing an HTML element using the structure <tagname>Content goes here...</tagname>. Which part represents the actual information displayed inside the element?",
        type: "multiple",
        options: [
            "Start tag",
            "End tag",
            "Content",
            "Tag name"
        ],
        correct: 2
    },

    {
        question: "A student wants to create a paragraph containing personal information and wants the browser to recognize it as a paragraph. Which structure should be used?",
        type: "multiple",
        options: [
            "<h1>Personal Information</h1>",
            "<body>Personal Information</body>",
            "<br>Personal Information</br>",
            "<p>Personal Information</p>"
        ],
        correct: 3
    },

    {
        question: "A student is selecting a program for writing and editing HTML files on Windows. Which option is identified in the module as an HTML editor?",
        type: "multiple",
        options: [
            "Notepad",
            "Microsoft Excel",
            "Windows Media Player",
            "Calculator"
        ],
        correct: 0
    },

    {
        question: "A student creates a hyperlink using <a href=\"https://google.com/\">Visit Google</a>. What part of the code will the user click?",
        type: "multiple",
        options: [
            "The URL",
            "The href attribute",
            "The text \"Visit Google\"",
            "The opening <a> tag"
        ],
        correct: 2
    },

    {
        question: "A developer wants a linked webpage to open in a new browser tab instead of replacing the current page. Which target value should be used?",
        type: "multiple",
        options: [
            "_self",
            "_same",
            "_current",
            "_blank"
        ],
        correct: 3
    },

    {
        question: "A hyperlink is created without specifying another target. Where will the linked document normally be displayed?",
        type: "multiple",
        options: [
            "In the current browser window",
            "In a new browser window",
            "In a separate application",
            "In a new HTML document"
        ],
        correct: 0
    },

    {
        question: "A developer creates an <img> element and notices that there is no closing </img> tag. Why is this valid according to the module?",
        type: "multiple",
        options: [
            "The <img> tag is an empty tag.",
            "The <img> tag automatically closes itself.",
            "The browser adds a closing tag during execution.",
            "The <img> tag only requires a closing tag when styled."
        ],
        correct: 0
    },

    {
        question: "A developer wants to control the dimensions of an image directly within the HTML element. Which attribute can be used to specify the image width and height?",
        type: "multiple",
        options: [
            "src",
            "style",
            "alt",
            "href"
        ],
        correct: 1
    },

    {
        question: "A programmer wants an image to have a width of 500 pixels and a height of 600 pixels. Which style declaration matches this requirement?",
        type: "multiple",
        options: [
            "style=\"size:500px;600px;\"",
            "style=\"image-width:500px;image-height:600px;\"",
            "style=\"width:500px;height:600px;\"",
            "style=\"src:500px;alt:600px;\""
        ],
        correct: 2
    },

    {
        question: "A website displays instructions for installing software where the steps must appear in a specific sequence. Which type of HTML list is most appropriate?",
        type: "multiple",
        options: [
            "Unordered list",
            "Bullet list",
            "Description list",
            "Ordered list"
        ],
        correct: 3
    },

    {
        question: "A student wants to display an image but writes the following code:",
        code: `<img href="flower.jpg"
alt="Flower">`,
        type: "multiple",
        options: [
            "The href attribute should be changed to src.",
            "The src attribute should be changed to href.",
            "The href attribute should be changed to alt.",
            "The src attribute should be changed to style."
        ],
        correct: 0
    },

    {
        question: "A student wants to style all <p> elements but writes the following CSS:",
        code: `p {
    font-size: 20px
    color: blue;
}`,
        type: "multiple",
        options: [
            "A semicolon is missing after 20px.",
            "A semicolon is missing after font-size.",
            "A colon is missing after 20px.",
            "A colon is missing before color."
        ],
        correct: 0
    },

    {
        question: "A student wants to create a table row containing two data cells but writes:",
        code: `<td>
    <tr>John</tr>
    <tr>20</tr>
</td>`,
        type: "multiple",
        options: [
            "The <tr> elements should contain the <td> elements.",
            "The <td> element should contain the <tr> elements.",
            "The <tr> elements should be replaced with <th> elements.",
            "The <td> elements should be replaced with <table> elements."
        ],
        correct: 0
    },

    {
        question: "A programmer is creating an HTML table and needs to define one horizontal row containing several cells. Which tag should be used?",
        type: "multiple",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<table>"
        ],
        correct: 1
    },

    {
        question: "A student wants to make a paragraph's text blue using inline CSS but writes:",
        code: `<p style="text-color: blue;">Hello World</p>`,
        type: "multiple",
        options: [
            "text-color should be changed to color.",
            "color should be changed to text-color.",
            "text-color should be changed to font-color.",
            "font-color should be changed to color."
        ],
        correct: 0
    },

    {
        question: "A developer is creating a table with the headings \"Name,\" \"Age,\" and \"Section.\" Which HTML element should be used for these heading cells?",
        type: "multiple",
        options: [
            "<th>",
            "<td>",
            "<tr>",
            "<table>"
        ],
        correct: 0
    },

    {
        question: "A student wants to create a heading but writes:",
        code: `<h1 Welcome to My Website</h1>`,
        type: "multiple",
        options: [
            "The opening <h1 tag is missing the > symbol.",
            "The opening <h1> tag is missing the / symbol.",
            "The closing </h1> tag is missing the > symbol.",
            "The closing </h1> tag is missing the < symbol."
        ],
        correct: 0
    },

    {
        question: "A developer wants to create a table row containing three ordinary data cells. Which structure correctly represents the row?",
        type: "multiple",
        options: [
            "<td><tr>Data 1</tr></td>",
            "<table><td>Data 1</td></table>",
            "<tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>",
            "<th><td>Data 1</td><td>Data 2</td></th>"
        ],
        correct: 2
    },

    {
        question: "A developer wants to add visible borders around the cells of an HTML table using the syntax demonstrated in the module. Which code should be used?",
        type: "multiple",
        options: [
            "<table border=\"0\">",
            "<table line=\"1\">",
            "<table style=\"border:none\">",
            "<table border=\"1\">"
        ],
        correct: 3
    },

    {
        question: "A developer is creating an HTML table that contains column headings followed by rows of data. Which combination correctly represents the main elements needed for the table?",
        type: "multiple",
        options: [
            "<table>, <tr>, <th>, and <td>",
            "<table>, <ol>, <li>, and <td>",
            "<a>, <href>, <img>, and <src>",
            "<ul>, <li>, <tr>, and <alt>"
        ],
        correct: 0
    },

    {
        question: "Which term is described as the full meaning of the abbreviation CSS, the design language used to make webpages more presentable?",
        type: "multiple",
        options: [
            "Computer Style Sheet",
            "Creative Styling System",
            "Cascading Style Sheets",
            "Cascading Syntax System"
        ],
        correct: 2
    },

    {
        question: "A developer writes the following CSS rule:",
        code: `h1 { color: blue; }`,
        type: "multiple",
        options: [
            "h1",
            "color",
            "blue",
            "{ }"
        ],
        correct: 0
    },

    {
        question: "A programmer examines a CSS declaration and sees color: blue;. Which part of this declaration identifies the characteristic being modified?",
        type: "multiple",
        options: [
            "blue",
            "color",
            ";",
            "{ }"
        ],
        correct: 1
    },

    {
        question: "A developer uses font-size: 12px; in a CSS rule. What does the value 12px represent in this declaration?",
        type: "multiple",
        options: [
            "The selector being targeted by the rule",
            "The property being changed by the rule",
            "The value assigned to the selected property",
            "The name of the HTML element receiving the rule"
        ],
        correct: 2
    },

    {
        question: "A student wants to change the color of an <h1> heading using CSS but writes the following code. What is the error in the code?",
        code: `<style>
        h1 {
            colour: blue;
        }
        </style>`,
        type: "multiple",
        options: [
            "The <style> element should be placed inside the <body>.",
            "The selector h1 should be replaced with #h1.",
            "The CSS property colour should be written as color.",
            "The value blue should be written as #blue."
        ],
        correct: 2
    },

    {
        question: "A student wants to apply a CSS class named para to several paragraphs but writes the following CSS code:",
        code: `#para {
    color: blue;
}`,
        type: "multiple",
        options: [
            "The color property should be replaced with font-color.",
            "The selector should use .para instead of #para.",
            "The selector should use *para instead of #para.",
            "The blue value should be replaced with #blue."
        ],
        correct: 1
    },

    {
        question: "A student wants to create a paragraph but writes:",
        code: `<p>Welcome to my website<p>`,
        type: "multiple",
        options: [
            "The second <p> should be written as </p>.",
            "The first <p> should be written as </p>.",
            "The second <p> should be written as <p/>.",
            "The first <p> should be written as <p/>."
        ],
        correct: 0
    },

    {
        question: "A student wants to create a hyperlink to Google but writes the following code:",
        code: `<a href="https://google.com>Visit Google</a>`,
        type: "multiple",
        options: [
            "The closing quotation mark after https://google.com is missing.",
            "The opening quotation mark before https://google.com is missing.",
            "The closing quotation mark after Visit Google is missing.",
            "The opening quotation mark before Visit Google is missing."
        ],
        correct: 0
    },

    {
        question: "Identify the system that uses codes or tags to tell a computer how content should be displayed or structured in a web document.",
        type: "identification",
        answer: ["Markup language"]
    },

    {
        question: "Identify the person who created HTML and is one of the key individuals associated with the development of the World Wide Web.",
        type: "identification",
        answer: ["Tim Berners-Lee"]
    },

    {
        question: "Identify the declaration placed at the beginning of an HTML5 document.",
        type: "identification",
        answer: ["<!DOCTYPE html>"]
    },

    {
        question: "Identify the HTML section that contains the visible content of a webpage, such as headings, paragraphs, images, buttons, links, and forms.",
        type: "identification",
        answer: ["<body>"]
    },

    {
        question: "Identify the HTML element used to specify the title that appears in the browser tab.",
        type: "identification",
        answer: ["<title>"]
    },

    {
        question: "Identify the HTML section that contains information about the document and can include links to external files such as CSS files.",
        type: "identification",
        answer: ["<head>"]
    },

    {
        question: "Identify the HTML element used to organize a block of text into a paragraph.",
        type: "identification",
        answer: ["<p>"]
    },

    {
        question: "Identify the HTML element used to force content to appear on a new line without creating a new paragraph.",
        type: "identification",
        answer: ["<br>"]
    },

    {
        question: "Identify the HTML element used to create a horizontal line that visually separates sections of webpage content.",
        type: "identification",
        answer: ["<hr>"]
    },

    {
        question: "Identify the HTML element used to create a hyperlink that allows users to move from the current webpage to another document.",
        type: "identification",
        answer: ["<a>"]
    },

    {
        question: "Identify the HTML attribute used to specify the URL or destination of a hyperlink.",
        type: "identification",
        answer: ["href"]
    },

    {
        question: "Identify the HTML element used to display an image on a webpage.",
        type: "identification",
        answer: ["<img>"]
    },

    {
        question: "Identify the HTML attribute used to specify the path or URL where an image can be found.",
        type: "identification",
        answer: ["src"]
    },

    {
        question: "Identify the HTML attribute used to provide alternative text for an image.",
        type: "identification",
        answer: ["alt"]
    },

    {
        question: "Identify the HTML element used to create a list in which the browser automatically numbers each item.",
        type: "identification",
        answer: ["<ol>"]
    },

    {
        question: "Identify the HTML element used to organize and display information in rows and columns.",
        type: "identification",
        answer: ["<table>"]
    },

    {
        question: "Identify the technology used to control the visual appearance, layout, design, and overall presentation of an HTML webpage.",
        type: "identification",
        answer: ["CSS"]
    },

    {
        question: "Identify the CSS method that places styling directly inside an HTML element.",
        type: "identification",
        answer: ["Inline CSS, Inline"]
    },

    {
        question: "Identify the CSS method that places CSS rules inside a <style> element within the <head> section of an HTML document.",
        type: "identification",
        answer: ["Internal CSS, Internal"]
    },

    {
        question: "Identify the CSS method that keeps styles in a separate file, such as style.css, and connects that file to an HTML document.",
        type: "identification",
        answer: ["External CSS, External"]
    },

    {
        question: "A student wants to create a hyperlink to Google but writes the following code:",
        code: `<a src="https://google.com">Visit Google</a>`,
        type: "multiple",
        options: [
            "The src attribute should be changed to href.",
            "The href attribute should be changed to src.",
            "The src attribute should be changed to alt.",
            "The href attribute should be changed to target."
        ],
        correct: 0
    }
];

export default questions;
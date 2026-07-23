
const questions = [
    {
        question: "Which function is used to connect PHP to a MySQL database using MySQLi?",
        type: "multiple",
        options:
            ["mysqli_connect()",
                "connect_db()",
                "db_connect()",
                "mysql_open()"],
        correct: 0
    },
    {
        type: "multiple",
        question: "What is the correct syntax for creating a connection?",
        options: [
            '$conn = mysqli_correct("localhost", "root", "", "dbname");',
            '$conn = mysqli_connect("localhost", "root", "", "dbname");',
            '$conn = connect("localhost", "root", "", "dbname");',
            '$conn = db_connect("localhost", "root", "", "dbname");'
        ],
        correct: 1
    },

    {
        type: "identification",
        question: "What SQL command is used to retrieve data?",
        answer: "SELECT"
    },
    {
        type: "identification",
        question: "What does CRUD stand for?",
        answer: "Create, Read, Update, Delete"
    },
    {
        type: "enumeration",
        question: "Enumerate the four CRUD operations.",
        answers: [
            "Create",
            "Read",
            "Update",
            "Delete"
        ]
    }

];
export default questions;
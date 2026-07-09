const questions = [
            { question: "Which function is used to connect PHP to a MySQL database using MySQLi?", options: ["mysqli_connect()", "connect_db()", "db_connect()", "mysql_open()"], correct: 0 },
            { question: "What is the correct syntax for creating a connection?", options: ["$conn = mysqli_correct(\"localhost\", \"root\", \"\", \"dbname\");", "$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"dbname\");", "$conn = connect(\"localhost\", \"root\", \"\", \"dbname\");", "$conn = db_connect(\"localhost\", \"root\", \"\", \"dbname\");"], correct: 1 },
            { question: "Which function executes a SQL query in MySQLi?", options: ["mysqli_connect()", "mysqli_close()", "mysqli_query()", "query_sql()"], correct: 2 },
            { question: "What does CRUD stand for?", options: ["Copy, Run, Update, Delete", "Create, Run, Upload, Download", "Copy, Read, Update, Drop", "Create, Read, Update, Delete"], correct: 3 },
            { question: "Which SQL command is used to retrieve data?", options: ["SELECT", "GET", "FETCH", "READ"], correct: 0 }

            
        ];
        export default questions;
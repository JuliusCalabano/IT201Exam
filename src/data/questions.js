const questions = [
    {
        question: "Which statement BEST describes a computer?",
        type: "multiple",
        options: [
            "An electronic device that accepts data, processes it, stores it, and produces output",
            "An electronic device that stores data and produces information",
            "An electronic device that processes information without requiring input",
            "An electronic device mainly designed to store programs and files"
        ],
        correct: 0
    },
    {
        question: "Why are computers important in accounting?",
        type: "multiple",
        options: [
            "They eliminate the need for accountants",
            "They make financial work faster and more accurate.",
            "They allow accountants to avoid keeping financial records",
            "They mainly improve the physical storage of accounting documents"
        ],
        correct: 1
    },
    {
        question: "Which device is considered the first known calculating device according to the lesson?",
        type: "multiple",
        options: [
            "Pascaline",
            "Difference Engine",
            "Abacus",
            "Analytical Engine"
        ],
        correct: 2
    },
    {
        question: "What was the primary purpose of the Abacus?",
        type: "multiple",
        options: [
            "Performing advanced mathematical equations",
            "Processing business and census data",
            "Producing mathematical tables automatically",
            "Counting and performing basic arithmetic"
        ],
        correct: 3
    },
    {
        question: "Which statement BEST distinguishes the Pascaline from the Abacus?",
        type: "multiple",
        options: [
            "The Pascaline used gears and wheels and could perform addition and subtraction",
            "The Pascaline used punched cards and performed different types of calculations",
            "The Pascaline used vacuum tubes to process numerical data",
            "The Pascaline used transistors to perform arithmetic operations"
        ],
        correct: 0
    },
    {
        question: "Why was the Pascaline developed?",
        type: "multiple",
        options: [
            "To help Charles Babbage create mathematical tables",
            "To help Blaise Pascal's father calculate taxes",
            "To help businesses process census information",
            "To help Ada Lovelace write computer programs"
        ],
        correct: 1
    },
    {
        question: "Which feature made the Analytical Engine significant in the history of computers?",
        type: "multiple",
        options: [
            "It was the first computer to use vacuum tubes",
            "It was the first commercially available computer in the United States",
            "It introduced concepts similar to input, processing, memory, and output",
            "It replaced transistors with integrated circuits"
        ],
        correct: 2
    },
    {
        question: "Which characteristic BEST describes ENIAC?",
        type: "multiple",
        options: [
            "It occupied an entire room and used 18,000 tubes",
            "It was small, portable, and battery-powered",
            "It used transistors and consumed little electricity",
            "It was mainly designed for home and school use"
        ],
        correct: 0
    },
    {
        question: "Which of the following was a major use of UNIVAC?",
        type: "multiple",
        options: [
            "Performing only basic arithmetic",
            "Processing business and census data",
            "Producing mathematical tables by hand",
            "Creating graphical user interfaces"
        ],
        correct: 1
    },
    {
        question: "A business needs a computer specifically for processing business and census data and wants a system more practical for actual business and government operations. Which historical computer BEST matches this description?",
        type: "multiple",
        options: [
            "ENIAC",
            "Analytical Engine",
            "UNIVAC",
            "Difference Engine"
        ],
        correct: 2
    },
    {
        question: "A computer is large, produces excessive heat, consumes a lot of electricity, and uses machine language. Which generation does it most likely belong to?",
        type: "multiple",
        options: [
            "Second generation",
            "Third generation",
            "Fourth generation",
            "First generation"
        ],
        correct: 3
    },
    {
        question: "A company wants to replace an old computer system that uses vacuum tubes with a system that is smaller, faster, more reliable, and produces less heat. Which generation's technology would BEST address this need?",
        type: "multiple",
        options: [
            "Second generation",
            "First generation",
            "Third generation",
            "Fourth generation"
        ],
        correct: 0
    },
    {
        question: "Which combination BEST represents fourth-generation computers?",
        type: "multiple",
        options: [
            "Vacuum tubes, machine language, large rooms",
            "Transistors, assembly language, less heat",
            "Microprocessors, portability, GUI, and internet connectivity",
            "Integrated circuits, multitasking, operating systems"
        ],
        correct: 2
    },
    {
        question: "Which contribution is associated with Alan Turing?",
        type: "multiple",
        options: [
            "Developing Microsoft Windows",
            "Helping break the German Enigma Code",
            "Creating the Apple Macintosh",
            "Inventing the World Wide Web"
        ],
        correct: 1
    },
    {
        question: "Which contribution is MOST closely associated with Steve Jobs?",
        type: "multiple",
        options: [
            "Development of the Turing Machine",
            "Development of the Analytical Engine",
            "Invention of the World Wide Web",
            "Popularization of the Apple Macintosh"
        ],
        correct: 3
    },
    {
        question: "A user types a name and student number using a keyboard before the computer can work with the information. Which computer function is taking place?",
        type: "multiple",
        options: [
            "Processing the information",
            "Inputting the information",
            "Storing the information",
            "Outputting the information"
        ],
        correct: 1
    },
    {
        question: "A computer stores information in a memory component, and the information remains available even after the power is turned off. Which type of memory is being described?",
        type: "multiple",
        options: [
            "Volatile memory",
            "Temporary memory",
            "Non-volatile memory",
            "Working memory"
        ],
        correct: 2
    },
    {
        question: "After a computer finishes processing a student's grades, the results are shown on the screen. Which computer function is being performed?",
        type: "multiple",
        options: [
            "Output",
            "Input",
            "Processing",
            "Storage"
        ],
        correct: 0
    },
    {
        question: "Which device is commonly used to transfer files between computers through USB?",
        type: "multiple",
        options: [
            "SD card",
            "External drive",
            "Flash drive",
            "Internal drive"
        ],
        correct: 2
    },
    {
        question: "A user needs additional storage for large videos, photos, games, and backups. Which device is most suitable?",
        type: "multiple",
        options: [
            "SD card",
            "Flash drive",
            "Internal hard drive",
            "External hard drive"
        ],
        correct: 3
    },
    {
        question: "A computer needs to share files and access the internet through other connected devices. Which computer function makes this possible?",
        type: "multiple",
        options: [
            "Communication",
            "Storage",
            "Processing",
            "Output"
        ],
        correct: 0
    },
    {
        question: "Which device connects multiple devices to the same network?",
        type: "multiple",
        options: [
            "Modem",
            "Router",
            "NIC",
            "Adapter"
        ],
        correct: 1
    },
    {
        question: "Which device connects a home or office network to an Internet Service Provider?",
        type: "multiple",
        options: [
            "Router",
            "NIC",
            "Modem",
            "Adapter"
        ],
        correct: 2
    },
    {
        question: "A desktop computer needs wireless connectivity but does not have built-in Wi-Fi. Which device can be added?",
        type: "multiple",
        options: [
            "Network card",
            "Storage card",
            "Graphics card",
            "Wi-Fi adapter"
        ],
        correct: 3
    },
    {
        question: "Which BEST describes software in a computer system?",
        type: "multiple",
        options: [
            "The programs and instructions used by a computer",
            "The physical parts used by a computer",
            "The devices used to connect a computer",
            "The components used to store computer data"
        ],
        correct: 0
    },
    {
        question: "What is the main purpose of system software?",
        type: "multiple",
        options: [
            "To create spreadsheet files",
            "To manage computer hardware",
            "To edit word documents",
            "To conduct video meetings"
        ],
        correct: 1
    },
    {
        question: "Which software is designed to help users perform specific tasks?",
        type: "multiple",
        options: [
            "System software",
            "Network software",
            "Application software",
            "Hardware software"
        ],
        correct: 2
    },
    {
        question: "A computer can open applications, manage hardware, and allow users to interact with the system. Which software makes these functions possible?",
        type: "multiple",
        options: [
            "Application software",
            "Utility program",
            "File management",
            "Operating system"
        ],
        correct: 3
    },
    {
        question: "What would most likely happen if a computer had no operating system?",
        type: "multiple",
        options: [
            "Computer could not run properly",
            "Files could not be stored permanently",
            "Hardware could not receive electricity",
            "Internet access would automatically stop"
        ],
        correct: 0
    },
    {
        question: "A student changes the wallpaper and rearranges icons on the main Windows screen. Which part of Windows is being customized?",
        type: "multiple",
        options: [
            "Start Menu",
            "Desktop",
            "Taskbar",
            "File Explorer"
        ],
        correct: 1
    },
    {
        question: "Several applications are running at the same time. The operating system makes sure each program receives enough RAM. Which function is being performed?",
        type: "multiple",
        options: [
            "File management",
            "Device management",
            "Memory management",
            "Security management"
        ],
        correct: 2
    },
    {
        question: "A printer is connected to a computer, but the operating system needs to recognize and operate it. Which function is involved?",
        type: "multiple",
        options: [
            "File management",
            "Memory management",
            "User interface",
            "Device management"
        ],
        correct: 3
    },
    {
        question: "Which OS function allows hardware devices to communicate with the operating system?",
        type: "multiple",
        options: [
            "Device management",
            "Security",
            "File management",
            "User interface"
        ],
        correct: 0
    },
    {
        question: "A company wants to protect its business files from unauthorized users. Which OS function is MOST relevant?",
        type: "multiple",
        options: [
            "File management",
            "Security",
            "Memory management",
            "User interface"
        ],
        correct: 1
    },
    {
        question: "A programmer wants an operating system commonly used by programmers and server administrators. Which is the BEST choice based on the lesson?",
        type: "multiple",
        options: [
            "Windows",
            "macOS",
            "Linux",
            "Android"
        ],
        correct: 2
    },
    {
        question: "What happens when the Recycle Bin is emptied?",
        type: "multiple",
        options: [
            "Files are automatically restored",
            "Files are moved to Documents",
            "Files are permanently removed",
            "Files are copied to another drive"
        ],
        correct: 2
    },
    {
        question: "A student has several files that need to be shared through email. What can be used to reduce their combined file size?",
        type: "multiple",
        options: [
            "ZIP folder",
            "Recycle Bin",
            "File Explorer",
            "Start Menu"
        ],
        correct: 0
    },
    {
        question: "A student has three folders containing documents, pictures, and videos. The student wants to organize them and make them easier to find. Which Windows tool is MOST appropriate?",
        type: "multiple",
        options: [
            "Recycle Bin",
            "File Explorer",
            "Start Menu",
            "Windows Search"
        ],
        correct: 1
    },
    {
        question: "A user opens several programs at once, connects a printer, organizes files, and protects the computer with a password. Which software coordinates these different activities?",
        type: "multiple",
        options: [
            "Application software",
            "File management",
            "Operating system",
            "Utility software"
        ],
        correct: 2
    },
    {
        question: "A computer loses the information stored in a memory component when the power is turned off. Which type of memory is being described?",
        type: "multiple",
        options: [
            "Non-volatile memory",
            "Permanent memory",
            "Secondary memory",
            "Volatile memory"
        ],
        correct: 3
    },
        {
        question: "What computer was described as one of the first large electronic digital computers?",
        type: "identification",
        answer: "ENIAC"
    },
    {
        question: "What technology characterized third-generation computers?",
        type: "identification",
        answer: ["Integrated circuits", "IC"]
    },
    {
        question: "Who is the person known as the \"Father of the Computer\"?",
        type: "identification",
        answer: "Charles Babbage"
    },
    {
        question: "Who is known as the \"First Computer Programmer\"?",
        type: "identification",
        answer: "Ada Lovelace"
    },
    {
        question: "Who among computing pioneer is associated with Microsoft Windows and popularizing personal computers?",
        type: "identification",
        answer: "Bill Gates"
    },
    {
        question: "A student is studying the person who developed the first web browser, web server, HTML, HTTP, and URLs. Who is the pioneer being studied?",
        type: "identification",
        answer: ["Tim Berners-Lee","Tim Berner Lee"]
    },
    {
        question: "A user wants to select icons, open files, and move the pointer around the screen. What device is most appropriate?",
        type: "identification",
        answer: "Mouse"
    },
    {
        question: "A student wants to convert a printed document into a digital file. What device should be used?",
        type: "identification",
        answer: "Scanner"
    },
    {
        question: "What device converts sound into digital signals that a computer can process?",
        type: "identification",
        answer: ["Microphone","Mic"]
    },
    {
        question: "A student enters several numbers into a computer, and the computer calculates their total and average. What computer function is being performed?",
        type: "identification",
        answer: "Processing"
    },
    {
        question: "What component is known as the brain of the computer?",
        type: "identification",
        answer: ["CPU","Central Processing Unit"]
    },
    {
        question: "What component temporarily stores data while programs are running?",
        type: "identification",
        answer: ["RAM","Random Access Memory"]
    },
    {
        question: "What component connects the CPU, RAM, storage, and other hardware?",
        type: "identification",
        answer: "Motherboard"
    },
    {
        question: "After a computer finishes processing a student's grades, the results are shown on the screen. What computer function is being performed?",
        type: "identification",
        answer: "Output"
    },
    {
        question: "What device displays text, images, videos, and graphics?",
        type: "identification",
        answer: "Monitor"
    },
    {
        question: "What storage device uses flash memory and has no moving parts?",
        type: "identification",
        answer: ["SSD","Solid State Drive"]
    },
    {
        question: "A user wants quick access to running applications at the bottom of the screen. What Windows feature should be used?",
        type: "identification",
        answer: "Taskbar"
    },
    {
        question: "A user wants to access installed programs, settings, and power options. What Windows feature should be opened?",
        type: "identification",
        answer: "Start Menu"
    },
    {
        question: "A student wants to change display, network, privacy, and system options. What Windows tool should be used?",
        type: "identification",
        answer: "Settings"
    },
    {
        question: "A user accidentally deleted a file and finds it inside the Recycle Bin. What operation can return it to its original location?",
        type: "identification",
        answer: "Restore"
    }
];

export default questions;
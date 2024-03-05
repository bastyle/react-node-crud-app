# Student Management System

This project is a simple student management system built with React and Node.

## Features

- Add a new student: Add new student record.
- List all students: View a list of all registered students.
- Get student by ID: Search for a specific student using their unique ID.
- Update student information: Edit existing student details.
- Delete student: Remove a student from the system.

## Prerequisites
- Node.js and npm (or yarn) installed on your system.
- Basic understanding of React and Node.js (Express).

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/bastyle/comp308-assignment2.git`
2. Navigate into the server project directory: `cd server`
3. Install the dependencies: `npm install`
4. Navigate into the client project directory: `cd client`
5. Install the dependencies: `npm install`

## Environment Variables
This project utilizes environment variables to store sensitive information like database credentials or API keys. To ensure security, these values are not committed to version control.

Create a .env file in the root directory of your project. Important: This file should be excluded from version control using .gitignore.
Define your environment variables within the .env file using the following format:
```bash
PORT=5000
MONGODB_URI="your mongodb uri"
```

## Usage

To run the project, use the command: `npm start`

The application provides a user interface for managing students. You can:

- View a list of all students on the main page.
- Search a student to view their details.
- Click "Edit" button to modify existing student information.
- Click the "Delete" button to remove a student from the system.
- Use the form provided to add or update a student.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact
For any questions or suggestions, feel free to [mention your preferred contact method, e.g., create an issue on GitHub].

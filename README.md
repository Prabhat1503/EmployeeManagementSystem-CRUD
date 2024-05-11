## Employee Management System
This project is an Employee Management System that allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records. It provides an API to manage employee information, including their name, designation, email, phone number, and age.

## Features
- Create Employee: Add a new employee to the system with details such as name, designation, email, phone, and age.
- Read Employee: Retrieve a list of all employees or view details of a specific employee by their ID.
- Update Employee: Modify the details of an existing employee, including their name, designation, email, phone, and age.
- Delete Employee: Remove an employee record from the system based on their ID.

## Technologies Used
1. Node.js: Backend JavaScript runtime environment.
2. Express.js: Web application framework for Node.js used to build the API endpoints.
3. MongoDB: NoSQL database used to store employee records.
4. Mongoose: ODM (Object Data Modeling) library for MongoDB, used to define schemas and interact with the database.
5. RESTful API: Implementing REST architecture for performing CRUD operations.


## Installation
To run this project locally, follow these steps:
1. Clone the repository:
   git clone https://github.com/Prabhat1503/EmployeeManagement.git
2. Navigate to the project directory:
   cd employee-management-system
3. Install dependencies:

   npm install
5. Set up environment variables:
- Create a .env file in the root directory.
- Add the following environment variables:   

    MONGODB_URI=your_mongodb_uri

    PORT=3000

5. Start the server:

    npm start

## API Routes
- GET /api/employee: Retrieve all employees.
- GET /api/employee/:id: Retrieve details of a specific employee by ID.
- POST /api/employee: Add a new employee.
- PUT /api/employee/:id: Update details of an existing employee by ID.
- DELETE /api/employee/:id: Delete an employee by ID.

## 2. Access the Application in a Web Browser
- Once your application is running locally on localhost port 3000, open a web browser (such as Google Chrome, Firefox, or Microsoft Edge) and enter the following URL in the address bar:
http://localhost:3000
- Press Enter to navigate to this URL. This should access your Node.js application running locally on port 3000.

## Contributing
Contributions to this project are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.


  



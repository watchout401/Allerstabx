# Spices Information Website

This is a full-stack application built with React, Node.js, Express, and MongoDB.

//////////////////////////////////////////////////////////////////////// 
Step 

1. Install Dependencies

Navigate to both the frontend (client) and backend (server) folders to install the required dependencies.

Backend (Node.js & Express)

        cd server

2.	Install dependencies:

        npm install

3.	Dependencies to be installed (if not included in package.json):

        npm install express mongoose dotenv cors

4.	Optionally, install nodemon (for automatic server restarts during development):

        npm install --save-dev nodemon

////////////////////////////////////////////////////////////////////////

Frontend (React)

1.	Navigate to the client folder:

        cd client

2.	Install dependencies

        npm install 

3. Dependencies to be installed

        npm install react react-dom react-router-dom axios chart.js react-chartjs-2


////////////////////////////////////////////////////////////////////////

Step 2: 

Configure Environment Variables

1.	Backend: Update the server/.env file with your MongoDB URI:

        MONGO_URI=YOUR_MONGO_DB_CONNECTION_STRING
        PORT=5000

2.  Frontend : Update the client/.env file with your backend API URL

        REACT_APP_API_URL=http://localhost:5000

////////////////////////////////////////////////////////////////////////

Step 3: 

Run the Backend

1.	Navigate to the server folder:

        cd server

2.  Run the backend server:

        node server.js

////////////////////////////////////////////////////////////////////////

Step 4: 

Run the Frontend

1.	Open a new terminal and navigate to the client folder:

        cd client

2. Start the React development server:

        npm start

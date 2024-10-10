# Personal Finance Dashboard

A web-based personal finance dashboard designed to help users track their income, expenses, and budgets. This project utilizes Python (Flask) for the backend, SQL for database management, and React.js for the frontend. It also includes data visualization using Plotly to provide insights into financial data.

## Features
- **User Authentication:** Secure login and user management.
- **Expense Tracking:** Add, edit, and categorize expenses.
- **Income Management:** Track income sources and amounts.
- **Budget Analysis:** Set budget limits and track spending against them.
- **Data Visualization:** Interactive charts for analyzing expenses and income trends.
- **Reports:** Generate and export financial summaries.

## Technology Stack
- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Python (Flask), RESTful API
- **Database:** SQL (SQLite, PostgreSQL, or MySQL)
- **Data Visualization:** Plotly
- **Deployment:** Designed for deployment on platforms like Heroku or AWS


## Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine for the frontend setup.
- **Python 3.x** installed for the backend setup.
- **SQLite, PostgreSQL, or MySQL** for database management.

### Backend Setup
1. Clone the repository and navigate to the `backend` directory
2. Create a virtual environment and activate it: `python3 -m venv venv`
                                                 `source venv/bin/activate`  # For Windows use `venv\Scripts\activate`
3. Install the required dependencies: `pip install -r requirements.txt`
4. Initialize the database: `python run.py`

## Frontend Setup
1. Navigate to the frontend directory: `cd ../frontend`
2. Install the required npm packages: `npm install`
3. Start the React development server: `npm start`
4. The frontend should now be running at `http://localhost:3000`


## Usage
Register or log in to access your finance dashboard.
Add, edit, and delete your income and expenses.
Visualize your spending patterns and budget with dynamic charts.
Track your financial progress and generate reports.
Deployment
Backend
Deploy the Flask backend using services like Heroku, AWS, or DigitalOcean.
Ensure you update your environment variables for the production database.
Frontend
Use Netlify or Vercel to deploy the React.js frontend.
Configure the base URL for the API to match your deployed backend.


                                                 




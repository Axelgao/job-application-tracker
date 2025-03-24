# Job Application Tracker

## How to Run the Project

### Backend (ASP.NET Core Web API)

1. Open a terminal and navigate to the `JobApplicationAPI` folder.  
2. Ensure you have the required tools installed:  
   dotnet tool install --global dotnet-ef  
3. Apply database migrations (if needed):  
   dotnet ef database update  
4. Run the backend:  
   dotnet run  

The API will be available at: `http://localhost:5119/api/applications`

### Frontend (React)

1. Navigate to the `job-application-ui` folder.  
2. Install dependencies:  
   npm install  
3. Start the frontend:  
   npm start  

Access the frontend at: `http://localhost:3000`

## Assumptions

- SQLite is used as the database.  
- The backend runs on port `5119`, and the frontend runs on port `3000`.  
- Ensure the backend is running before interacting with the frontend.  

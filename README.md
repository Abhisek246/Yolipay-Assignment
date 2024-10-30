## Project Overview
The Yolipay Assignment project is a full-stack portfolio platform where users can display and filter projects. It includes separate frontend and backend setups that communicate with MongoDB for data storage.

## Technologies Used
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Database**: MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhisek246/Yolipay-Assignment.git
   cd Yolipay-Assignment
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Variables

1. Create a `.env` file in the `backend` directory.
2. Add your MongoDB URI to the `.env` file:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   ```

### Running the Application

1. **Start the backend server**:
   In the `backend` directory, run:
   ```bash
   node index.js
   ```

2. **Start the frontend server**:
   In the `frontend` directory, run:
   ```bash
   npm run dev
   ```

### Available Scripts

#### Frontend
- `npm run dev`: Runs the frontend in development mode.
- `npm run build`: Builds the frontend for production.

#### Backend
- `node index.js`: Starts the backend server.

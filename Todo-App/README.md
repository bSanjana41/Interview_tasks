# Task Manager App – Setup Instructions

This is a full-stack To-Do List application using Node.js (backend) and React (frontend).

---

## Backend Setup (Node.js)

1. Go to the backend folder:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

---

## Frontend Setup (React)

1. Go to the frontend folder:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of `Frontend` and add:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

5. Visit the app in your browser:
   ```
   http://localhost:5173
   ```

---

## Notes

- Make sure the backend is running before using the frontend.
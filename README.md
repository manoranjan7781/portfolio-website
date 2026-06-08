# Personal Portfolio Website

A modern, responsive personal portfolio website built with the MERN stack. Features smooth scrolling navigation, animated sections, a working contact form with MongoDB integration, and a clean professional UI.

## Features

- Responsive Design
- Contact Form
- MongoDB Integration
- React Frontend
- Express Backend
- Smooth Scrolling Navigation
- Mobile-Friendly Menu
- Card Hover Animations
- Fade-in Animations
- Skill Progress Bars

## Tech Stack

**Frontend:** React.js, Vite, HTML5, CSS3, JavaScript (ES6)

**Backend:** Node.js, Express.js

**Database:** MongoDB (Mongoose)

## Project Structure

```
portfolio-website/
│
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (if needed)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                 # Express backend
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

For MongoDB Atlas, use your connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
PORT=5000
```

Start the backend server:

```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | `/`            | Health check                   |
| POST   | `/api/contact` | Submit contact form            |

### Contact Form Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Set the root directory to `client`
4. Add environment variable:
   - `VITE_API_URL` = your Render backend URL + `/api/contact`
5. Deploy

### Backend (Render)

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Set the root directory to `server`
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables:
   - `MONGO_URI` = your MongoDB Atlas connection string
   - `PORT` = 5000
7. Deploy

## Author

**Manoranjan** — Aspiring Data Analyst & Full Stack Developer

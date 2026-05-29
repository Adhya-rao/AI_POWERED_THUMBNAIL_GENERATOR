# 🎨 Thumblify — AI Powered Thumbnail Generator

Thumblify is a full-stack MERN application that helps creators generate stunning AI-powered YouTube thumbnails instantly using prompt optimization and image generation.

The platform supports:

* AI thumbnail generation
* Thumbnail recreation/editing
* JWT authentication
* Credit-based usage
* Community feed
* Personal thumbnail library

---

# 🚀 Features

## 🔐 Authentication

* User signup and login
* JWT-based authentication
* Protected routes
* Persistent sessions

---

## 🤖 AI Thumbnail Generation

Generate thumbnails using:

* Title/topic
* Style presets
* Color palettes
* Aspect ratios
* Optional extra prompts

---

## ♻️ Recreate Mode

Modify existing thumbnails using:

* Source image URL
* Change request prompt
* AI-assisted recreation workflow

---

## 💾 Persistent Storage

All generated thumbnails are stored in MongoDB with:

* Prompt
* Optimized prompt
* Thumbnail URL
* Style
* Aspect ratio
* Visibility
* Likes

---

## 🌍 Community Feed

* Browse public thumbnails
* Like thumbnails
* Discover trending thumbnail ideas

---

## 💳 Credit System

* New users receive 15 credits
* 1 credit deducted per successful generation

---

# 🛠 Tech Stack

## Frontend

* React 18
* Vite
* React Router DOM
* Tailwind CSS
* Context API

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Groq API
* Pollinations AI

---

# 📂 Project Structure

```bash
Thumblify/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
```

---

# ⚙️ Environment Variables

## Backend `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile
CLIENT_URL=http://localhost:5173
PORT=5000
```

---

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📦 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/thumblify.git
cd thumblify
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```bash
http://127.0.0.1:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔌 API Endpoints

| Method | Endpoint                           | Description         |
| ------ | ---------------------------------- | ------------------- |
| POST   | /api/auth/signup                   | Register user       |
| POST   | /api/auth/login                    | Login user          |
| GET    | /api/auth/me                       | Get current user    |
| POST   | /api/ai/generate-thumbnail         | Generate thumbnail  |
| GET    | /api/thumbnails                    | Get user thumbnails |
| DELETE | /api/thumbnails/:id                | Delete thumbnail    |
| GET    | /api/thumbnails/community          | Community feed      |
| POST   | /api/thumbnails/community/:id/like | Like thumbnail      |

---

# 🧠 Application Workflow

1. User signs up or logs in
2. User enters thumbnail details
3. Backend optimizes prompt using Groq
4. Pollinations AI generates image
5. Thumbnail gets stored in MongoDB
6. Credits are updated
7. User can:

   * download thumbnail
   * delete thumbnail
   * view personal generations
   * browse community feed

---

# 📸 Main Pages

## 🏠 Home Page

Landing page introducing the platform.

## 🎨 Generate Page

Studio for generating and recreating thumbnails.

## 📚 My Generations

Shows user’s saved thumbnails.

## 🌍 Community Feed

Displays public thumbnails from creators.

## 🔐 Authentication Page

Login and signup system.

---

# 🔒 Authentication Flow

* JWT token generated on login/signup
* Token stored in localStorage
* Protected routes validate token
* AuthContext manages session globally

---

# 💡 Future Improvements

* AI text overlay generation
* Drag-and-drop editor
* Advanced thumbnail templates
* Dark/light themes
* Subscription payments
* Real-time analytics
* Cloud image uploads

---

# 👨‍💻 Author

Developed by Adhya Rao

---

# 📜 License

This project is for educational and portfolio purposes.

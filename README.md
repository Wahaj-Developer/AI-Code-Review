
# 🤖 AI Code Reviewer

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

<p align="center">

An AI-powered full-stack web application that reviews source code using **Google Gemini AI** and provides professional feedback on code quality, performance, security, best practices, maintainability, and potential improvements.

Built with **React**, **Node.js**, **Express.js**, and **Google Gemini AI**.

</p>

---

# 📑 Table of Contents

- 🌐 Live Demo
- 📖 Project Overview
- ✨ Features
- 🌍 Multi-Language Support
- ⭐ Project Highlights
- 🏗 System Architecture
- 🔄 Application Workflow
- 📁 Project Structure
- 🛠 Technologies Used
- 🚀 Getting Started
- ⚙ Environment Variables
- 📡 API Documentation
- 📂 File Documentation
- 🧪 Testing
- 🔧 Troubleshooting
- ☁ Deployment
- 🚀 Future Improvements
- 🤝 Contributing
- 📄 License
- 👨‍💻 Author

---

# 🌐 Live Demo

Experience the application online.

## 🚀 Frontend

```text
https://your-vercel-link.vercel.app
```

---

## ⚙ Backend API

```text
https://your-render-link.onrender.com
```

---

## Getting Started

### New User

1. Open the application.
2. Paste your source code into the editor.
3. Click **Analyze Code**.
4. Wait a few seconds while Google Gemini reviews your code.
5. Read the AI-generated review.
6. Copy individual snippets or the entire review.

> **Note:** If the backend is hosted on a free-tier service such as **Render**, the first request may take **30–60 seconds** while the server wakes up.

---

# 📖 Project Overview

## What is AI Code Reviewer?

AI Code Reviewer is a modern full-stack application that leverages **Google Gemini AI** to perform intelligent code reviews across multiple programming languages.

Instead of manually reviewing code or relying solely on traditional linters, developers can submit their source code and receive detailed AI-generated feedback covering correctness, readability, performance, security, maintainability, and industry best practices.

The application combines an interactive code editor, syntax highlighting, markdown rendering, and AI-powered analysis to deliver a seamless developer experience.

---

## Why This Project?

Code reviews are an essential part of software development, but they often require time, collaboration, and experienced developers.

This project demonstrates how Artificial Intelligence can assist developers by providing:

- Instant code reviews
- Performance recommendations
- Security analysis
- Best practice suggestions
- Refactoring opportunities
- Code quality improvements

The goal is not to replace human reviewers but to help developers identify issues earlier and learn from AI-generated recommendations.

---

# ✨ Features

## 🎨 Interactive Code Editor

- Real-time syntax highlighting
- Clean coding environment
- Responsive editor layout
- Scroll synchronization
- Placeholder guidance

---

## 🤖 AI-Powered Code Review

Generate professional reviews including:

- Overall Code Score
- Executive Summary
- Code Quality Analysis
- Strengths
- Weaknesses
- Bug Detection
- Refactoring Suggestions
- Performance Improvements
- Security Recommendations
- Best Practices
- Testing Suggestions

---

## 📝 Markdown Rendering

The AI response is rendered as a professional document with:

- Headings
- Lists
- Tables
- Syntax-highlighted code blocks
- Formatted markdown

---

## 📋 Copy Features

- Copy individual code snippets
- Copy the complete review
- Visual confirmation after copying

---

## ⚡ User Experience

- Fast AI responses
- Loading animations
- Responsive design
- Friendly error messages
- Clean split-screen interface

---

# 🌍 Multi-Language Support

The AI Code Reviewer is designed to analyze code written in a wide range of programming languages.

### Currently Supported

- JavaScript
- TypeScript
- Python
- Java
- C
- C++
- C#
- Go
- Rust
- PHP
- Ruby
- Kotlin
- Swift
- Dart
- HTML
- CSS
- SQL
- Bash
- JSON
- YAML

The AI automatically understands the submitted language and provides language-specific recommendations without requiring manual language selection.

---

# ⭐ Project Highlights

✔ AI-powered code review

✔ Google Gemini AI integration

✔ Modern React frontend

✔ Express.js REST API

✔ Interactive code editor

✔ Real-time syntax highlighting

✔ Markdown rendering

✔ Copy code snippets

✔ Responsive interface

✔ Error handling

✔ Modular project structure

✔ Clean code architecture

---



## 💻 Code Editor
![Home](./screenshot/CodeTerminal.png)
---

## 🤖 AI Review Result
![result](./screenshot/result.png)



---

# 🏗 System Architecture

The project follows a simple client-server architecture.

```text
                    +------------------------+
                    |    React Frontend      |
                    |  Code Editor + Review  |
                    +-----------+------------+
                                |
                             Axios
                                |
                                ▼
                    +------------------------+
                    |    Express Backend     |
                    |   REST API Endpoints   |
                    +-----------+------------+
                                |
                     Google Gemini AI API
                                |
                                ▼
                  AI Code Review & Suggestions
```

---

# 🔄 Application Workflow

```text
User Opens Application
          │
          ▼
Paste Source Code
          │
          ▼
Click "Analyze Code"
          │
          ▼
Axios POST Request
          │
          ▼
Express Backend
          │
          ▼
Google Gemini AI
          │
          ▼
Generate Review
          │
          ▼
Return Markdown Response
          │
          ▼
Render Review
          │
          ▼
Copy or Read Suggestions
```

---


# 📁 Project Structure

The project follows a clean and modular full-stack architecture, separating the frontend and backend into independent applications. This approach improves scalability, maintainability, and future development.

```text
Project-1/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   │
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   │
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

---

# 🛠 Technologies Used

## Frontend

| Technology | Purpose |
|------------|---------|
| React | Build the user interface |
| Vite | Development server & build tool |
| Axios | HTTP requests |
| React Markdown | Render AI responses |
| PrismJS | Editor syntax highlighting |
| Highlight.js | Markdown code highlighting |
| React Simple Code Editor | Interactive code editor |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | REST API |
| Google Gemini AI | AI-powered code review |
| CORS | Cross-origin communication |
| dotenv | Environment variable management |

---

## Development Tools

- Git
- GitHub
- Visual Studio Code
- npm
- Chrome Developer Tools
- Postman

---

# 🏗 Architecture Overview

The application follows a layered architecture where each layer has a single responsibility.

```text
React Frontend
       │
       ▼
Axios API Requests
       │
       ▼
Express Routes
       │
       ▼
Controllers
       │
       ▼
AI Service
       │
       ▼
Google Gemini AI
```

### Frontend Responsibilities

- Code editing
- Syntax highlighting
- Markdown rendering
- API communication
- Copy functionality
- Loading states

---

### Backend Responsibilities

- API routing
- Request validation
- AI communication
- Error handling
- Response formatting

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure you have the following installed.

- Node.js (v18 or higher)
- npm
- Git
- Google Gemini API Key

---

## Clone the Repository

```bash
git clone https://github.com/your-username/AI-Code-Reviewer.git
```

Move into the project directory.

```bash
cd AI-Code-Reviewer
```

---

# ⚙ Backend Installation

Navigate to the backend folder.

```bash
cd Backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
GOOGLE_GEMINI_KEY=YOUR_API_KEY
```

Start the backend server.

```bash
npm run dev
```

Backend URL

```text
http://localhost:3000
```

---

# 💻 Frontend Installation

Open another terminal.

```bash
cd Frontend
```

Install dependencies.

```bash
npm install
```

Run the frontend.

```bash
npm run dev
```

Frontend URL

```text
http://localhost:5173
```

---

# ▶ Running the Application

Start both servers.

### Terminal 1

```bash
cd Backend
npm run dev
```

---

### Terminal 2

```bash
cd Frontend
npm run dev
```

Visit

```text
http://localhost:5173
```

Paste your code into the editor and click **Analyze Code**.

---

# ⚙ Environment Variables

Create a `.env` file inside the Backend folder.

```env
GOOGLE_GEMINI_KEY=your_google_gemini_api_key
```

> **Important:** Never commit your `.env` file to GitHub. Keep your API keys private.

---

# 📡 API Documentation

The backend exposes a simple REST API for AI-powered code review.

---

## Analyze Code

### Endpoint

```http
POST /ai/get-review
```

---

### Request Body

```json
{
  "code": "function add(a, b) {\n  return a + b;\n}"
}
```

---

### Successful Response

````markdown
# Overall Score

9/10

# Executive Summary

Well-structured function with clear naming.

# Strengths

- Readable
- Efficient
- Easy to maintain

# Performance Review

No performance issues detected.

# Security Review

No security concerns found.

# Best Practices

- Add JSDoc comments.
- Consider input validation.
`````

---

### Status Codes

| Status | Description                   |
| ------ | ----------------------------- |
| 200    | Review generated successfully |
| 400    | Invalid or missing code       |
| 500    | Internal server error         |

---

# 📤 Example Request

```javascript
const response = await axios.post(
  "http://localhost:3000/ai/get-review",
  {
    code
  }
);

console.log(response.data);
```

---

# 📥 Example Response

```json
{
  "review": "# Overall Score\n9/10\n..."
}
```

---

# 🔄 API Flow

```text
User Code
     │
     ▼
POST /ai/get-review
     │
     ▼
Express Route
     │
     ▼
Controller
     │
     ▼
AI Service
     │
     ▼
Google Gemini AI
     │
     ▼
Markdown Review
     │
     ▼
React Frontend
```

---


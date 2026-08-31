
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


# 📂 Backend Documentation

The backend is responsible for processing user requests and communicating with Google Gemini AI.

---

## server.js

Application entry point.

### Responsibilities

* Load environment variables
* Start Express server
* Listen on Port 3000

---

## app.js

Express application configuration.

### Responsibilities

* Initialize Express
* Register middleware
* Enable CORS
* Parse JSON
* Register routes

---

## ai.routes.js

Defines the application's API endpoints.

### Available Endpoint

```http
POST /ai/get-review
```

This endpoint accepts user code and forwards it to the controller.

---

## ai.controller.js

Processes incoming HTTP requests.

Responsibilities include:

* Validate request body
* Check for missing code
* Call AI Service
* Return AI response
* Handle errors

---

## ai.service.js

This is the core of the application.

Responsibilities:

* Configure Google Gemini AI
* Create system prompts
* Send user code to Gemini
* Receive AI response
* Return formatted markdown review

---

# 📂 Frontend Documentation

The frontend is built with **React** and **Vite**, providing a modern, responsive, and interactive interface for developers to submit code and receive AI-powered reviews.

---

## `src/main.jsx`

### Purpose

The entry point of the React application.

### Responsibilities

- Creates the React application
- Mounts the root component
- Enables React Strict Mode
- Loads global styles

---

## `src/App.jsx`

### Purpose

The heart of the frontend application.

### Responsibilities

- Manage application state
- Handle code editor
- Send requests to the backend
- Display AI responses
- Render markdown
- Copy code snippets
- Display loading animations
- Handle API errors

---

### Main State Variables

| State | Purpose |
|--------|---------|
| `code` | Stores the user's source code |
| `review` | Stores the AI-generated review |
| `loading` | Indicates when AI analysis is running |
| `copiedAll` | Displays copy confirmation |

---

### Main Functions

#### Analyze Code

- Reads user code
- Sends POST request
- Receives AI review
- Updates the UI

---

#### Copy Review

Allows users to copy the entire AI review with one click.

---

#### Copy Code Snippet

Allows users to copy individual code blocks from the generated review.

---

#### Syntax Highlighting

Updates highlighted code in real time while the user types.

---

## `src/App.css`

Contains styles for:

- Split-screen layout
- Code editor
- Review panel
- Buttons
- Loading animation
- Responsive design
- Copy buttons

---

## `src/index.css`

Provides global styles including:

- Typography
- Body styling
- Theme colors
- Scrollbars
- Global spacing

---

## `vite.config.js`

Configures the Vite development server.

### Responsibilities

- React integration
- Fast Hot Module Reload (HMR)
- Production build optimization

---

## `index.html`

The HTML template used by Vite.

Contains:

- Root element
- Meta tags
- Entry script

---

# 📄 File-by-File Documentation

## Backend

| File | Description |
|------|-------------|
| `server.js` | Starts the Express server |
| `app.js` | Configures Express and middleware |
| `ai.routes.js` | Defines API endpoints |
| `ai.controller.js` | Handles HTTP requests |
| `ai.service.js` | Communicates with Google Gemini AI |
| `.env` | Stores environment variables |
| `package.json` | Project metadata and dependencies |

---

## Frontend

| File | Description |
|------|-------------|
| `main.jsx` | React entry point |
| `App.jsx` | Main application component |
| `App.css` | Component styling |
| `index.css` | Global styling |
| `vite.config.js` | Vite configuration |
| `package.json` | Frontend dependencies |
| `index.html` | HTML template |

---

# 🔐 Security Considerations

Although this project is designed for educational purposes, it follows several security best practices.

---

## API Key Protection

- Store API keys in a `.env` file.
- Never commit `.env` files to GitHub.
- Rotate API keys if they become exposed.

---

## Input Validation

The backend validates incoming requests before sending them to Google Gemini AI.

---

## Error Handling

The application returns user-friendly error messages while preventing sensitive server information from being exposed.

---

## CORS Protection

Cross-Origin Resource Sharing (CORS) is configured to allow communication between the frontend and backend during development.

For production deployments, restrict CORS to trusted domains only.

---

## Secure Development Practices

- Environment variables for secrets
- Server-side AI requests
- Modular application structure
- Proper HTTP status codes
- Centralized request handling

---

# 🧪 Testing

The application has been manually tested across multiple workflows.

---

## Frontend Testing

The following features have been verified:

- ✅ Code Editor
- ✅ Syntax Highlighting
- ✅ Markdown Rendering
- ✅ Copy Review
- ✅ Copy Code Snippets
- ✅ Loading States
- ✅ Responsive Layout
- ✅ API Integration
- ✅ Error Messages

---

## Backend Testing

Verified functionality includes:

- ✅ API Endpoint
- ✅ Request Validation
- ✅ Google Gemini Integration
- ✅ Error Handling
- ✅ JSON Responses
- ✅ CORS Configuration

---

## Manual Test Cases

| Test Case | Result |
|-----------|--------|
| Valid Code Submission | ✅ Pass |
| Empty Code Submission | ✅ Pass |
| Large Code Block | ✅ Pass |
| AI Response Rendering | ✅ Pass |
| Copy Review | ✅ Pass |
| Copy Code Snippets | ✅ Pass |
| Invalid API Key | ✅ Pass |
| Backend Offline | ✅ Pass |

---

## Development Tools Used

- Postman
- Chrome DevTools
- Visual Studio Code
- npm
- Git
- GitHub

---

# 🔧 Troubleshooting

If you encounter issues while running the project, try the following solutions.

---

## Google Gemini API Errors

Possible causes:

- Invalid API key
- API quota exceeded
- Unsupported model
- Network issues

Solutions:

- Verify `GOOGLE_GEMINI_KEY`
- Check your Gemini API quota
- Review backend logs
- Restart the backend server

---

## Backend Connection Issues

Possible causes:

- Backend server not running
- Wrong API URL
- Incorrect port

Solutions:

```bash
cd Backend
npm run dev


Verify:

```text
http://localhost:3000


---

## Frontend Not Loading

Possible causes:

- Missing dependencies
- Vite server stopped

Solutions:

```bash
cd Frontend
npm install
npm run dev
```

---

## Syntax Highlighting Not Working

- Ensure PrismJS is installed.
- Verify Prism CSS is imported.
- Restart the Vite server.

---

## Copy Button Not Working

- Verify browser clipboard permissions.
- Use a secure browser (HTTPS in production).

---

## AI Review Not Generated

Possible reasons:

- Empty input
- Backend offline
- Gemini API unavailable

Verify:

- Backend is running.
- API key is valid.
- Internet connection is available.

---

# 💡 Performance Tips

To get the best experience:

- Submit complete code snippets.
- Keep code focused on a single feature or file.
- Avoid submitting extremely large files in one request.
- Review AI suggestions before applying them to production code.

---


# ☁️ Deployment

The application can be deployed on any modern cloud platform.

## Frontend Deployment

Recommended Platforms

- Vercel
- Netlify

### Build Frontend

```bash
npm run build
```

Deploy the generated `dist` folder.

---

## Backend Deployment

Recommended Platforms

- Render
- Railway
- Heroku

### Before Deploying

Ensure you have configured:

- GOOGLE_GEMINI_KEY
- PORT
- NODE_ENV=production

Start the production server.

```bash
npm start
```

---

## Production Checklist

Before deployment, verify the following:

- Environment variables are configured.
- Google Gemini API key is valid.
- Backend API URL is updated.
- Frontend builds successfully.
- CORS is configured correctly.
- API endpoints are working.
- Production dependencies are installed.

---

# 🚀 Future Improvements

This project serves as a foundation for many exciting features planned for future releases.

---

## AI Improvements

- AI-powered code explanation
- AI bug fixing
- AI code optimization
- AI code generation
- AI documentation generation
- AI unit test generation

---

## Code Analysis

- Code complexity analysis
- Duplicate code detection
- Dependency analysis
- Cyclomatic complexity report
- Maintainability score
- Technical debt estimation

---

## Multi-Language Enhancements

- Automatic language detection
- Language-specific best practices
- Framework-aware reviews
- Support for additional languages
- Custom review profiles

---

## User Features

- User Authentication
- Review History
- Saved Reviews
- Favorite Reviews
- Export Review as PDF
- Export Review as Markdown

---

## Dashboard

- Review Analytics
- Code Quality Trends
- Review Statistics
- Personal Dashboard
- Project History

---

## Developer Experience

- Dark & Light Themes
- Keyboard Shortcuts
- Drag & Drop File Upload
- GitHub Repository Integration
- VS Code Extension
- Browser Extension

---

# 🌟 Learning Outcomes

Building this project strengthened my understanding of modern full-stack development and AI integration.

---

## Frontend

- React
- Vite
- Component-Based Architecture
- State Management
- Axios
- Markdown Rendering
- Syntax Highlighting
- Responsive UI Design

---

## Backend

- Node.js
- Express.js
- REST API Development
- Middleware
- Error Handling
- Environment Variables
- API Integration

---

## Artificial Intelligence

- Google Gemini AI
- Prompt Engineering
- AI-powered Code Analysis
- Response Formatting
- Structured Reviews

---

## Software Engineering

- Clean Code Principles
- Modular Project Structure
- Documentation
- Git Workflow
- Debugging
- Code Review Practices
- Problem Solving

---

# 🌟 Why This Project?

This project demonstrates practical experience with modern web development by combining frontend engineering, backend APIs, and Artificial Intelligence into a single application.

It showcases:

- Full-Stack Development
- REST API Design
- AI Integration
- Professional Documentation
- Clean Architecture
- Modern React Development
- Express.js Backend Development
- Real-world Software Engineering Practices

---

# 🤝 Contributing

Contributions are always welcome.

If you would like to improve this project:

### 1. Fork the Repository

Click the **Fork** button on GitHub.

---

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

---

### 3. Commit Your Changes

```bash
git commit -m "Add your feature"
```

---

### 4. Push the Branch

```bash
git push origin feature/your-feature-name
```

---

### 5. Open a Pull Request

Describe your changes clearly and submit the pull request for review.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for educational and personal purposes.

---

# 👨‍💻 Author

## Muhammed Wahaj Ahmed

**MERN Stack Developer | AI Enthusiast | Open Source Learner**

Passionate about building modern web applications using React, Node.js, Express.js, MongoDB, and Artificial Intelligence.

---

## Connect With Me

### GitHub

https://github.com/Wahaj-Developer

### LinkedIn

https://linkedin.com/in/your-linkedin

### Portfolio

https://your-portfolio-link.com

---

# ⭐ Support

If you found this project helpful, consider supporting it by:

- ⭐ Starring the repository
- 🍴 Forking the project
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing it with others

Your support motivates me to build more open-source projects.

---

# ❤️ Acknowledgements

Special thanks to the amazing open-source community and the tools that made this project possible.

- React
- Vite
- Express.js
- Google Gemini AI
- PrismJS
- Highlight.js
- React Markdown
- Axios
- Node.js

---

# 📈 Project Status

🟢 **Status:** Active Development

Upcoming updates include:

- Multi-language improvements
- Authentication system
- Review history
- AI-generated test cases
- PDF export
- GitHub integration
- VS Code extension

---

<p align="center">

### ⭐ If you enjoyed this project, don't forget to leave a star!

**Made with ❤️ by Muhammed Wahaj Ahmed**

</p>




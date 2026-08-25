
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

**✅ End of Part 1**

The next part will include:

- 📁 Project Structure
- 🛠 Technologies Used
- 🚀 Getting Started
- ⚙ Environment Variables
- 📡 API Documentation
- 📂 Backend Documentation


---


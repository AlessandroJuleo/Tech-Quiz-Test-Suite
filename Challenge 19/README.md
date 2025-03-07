# 📚 Tech Quiz Test Suite

## 🚀 Description
This project is a quiz-style question application, developed with **React** and tested with **Cypress**. It allows users to answer questions and see their final score.

## 🎯 Features
- Displays random questions with multiple choices.
- Validates answers and updates the score.
- Implements automated tests with **Cypress**.
- Responsive design styled with **CSS**.

## 📂 Project Structure
```
Tech Quiz Test Suite/
│── client/             # Frontend React
│   ├── src/
│   │   ├── components/  # React Components
│   │   │   ├── Quiz.tsx # Main component
│   │   ├── styles/
│   │   │   ├── App.css  # Global styles
│   │   ├── models/      # Data models
│   │   ├── services/    # Questions API
│   ├── public/         # Static files
│── cypress/            # E2E and component tests
│   ├── component/      # Component tests
│   │   ├── Quiz.cy.tsx # Quiz tests
│── package.json        # Project configuration
│── vite.config.ts      # Vite configuration
│── tsconfig.json       # TypeScript configuration
```

## 🛠️ Installation and Setup
### 1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/tech-quiz-test-suite.git
cd tech-quiz-test-suite
```

### 2️⃣ **Install dependencies**
```bash
npm install
```

### 3️⃣ **Run the application**
```bash
npm run dev
```
The application will open at `http://localhost:3000`.

### 4️⃣ **Run Cypress tests**
```bash
npx cypress open
```
Select "Component Testing" and run `Quiz.cy.tsx`.

## 🧪 Cypress Tests
- ✅ Verifies that the `Quiz` component renders correctly.
- ✅ Simulates a user clicking `Start Quiz`.
- ✅ Validates that questions appear correctly.
- ✅ Ensures the `Quiz Completed` screen is displayed.

## 🎨 Styling
The styles are in **`src/App.css`**. You can modify the design there to improve the appearance.

## 📌 Future Improvements
- 🔹 Add more question categories.
- 🔹 Implement a timer per question.
- 🔹 Integrate an API to fetch real-time questions.

## 🏆 Credits
Developed by **Alessandro Lopez Costal** ✨

## 🏆 Link of Video
https://youtu.be/1qM-_2tSqL0

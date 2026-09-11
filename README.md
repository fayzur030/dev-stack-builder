# 🚀 Dev Stack Builder

A modern and responsive Dev Stack Builder web application where users can explore different technologies and build their own personalized technology stack.

The application loads technology information from a JSON file and allows users to add or remove technologies from their stack with interactive feedback.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

# ✨ Features

## 1. 🧩 Technology Explorer

Users can explore different technologies with useful information such as name, category, description, difficulty level, rating, badge, and technology icon.

## 2. 🛠️ Build Your Own Stack

Users can add technologies to their personal stack and remove individual technologies or clear the entire stack.

## 3. 🔔 Interactive Feedback

The application provides toast notifications when a technology is added, removed, duplicated, or when the entire stack is cleared. Duplicate technologies cannot be added twice.

## ⚛️ React Questions & Answers

i) What is JSX, and why is it used in React?

- Answer: JSX stands for JavaScript XML. It is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and write because we can describe the UI directly inside our component logic.

ii) What is the difference between props and state?

- Answer: Props are data passed from parent component to a child component. They are read only from child-side.
  state is data managed inside a component that can change over time.
  Props is immutable, meaning a child component cannot be change but state is mutable and can be updated

iii) What does the useState hook do, and where did you use it in this project?

- Answer:
  The useState hook is a function that allows add and manage state variable inside functional component. It has two values, first is initial value and second is setter function. When the state changes, react update UI

iv) What does the useEffect hook do, and why did you need it to load the JSON data?

- Answer : The useEffect hook is a built-in React hook. The useEffect hook in React is used to run side effects, such as fetching data from an API, after React has rendered the component and updated the DOM.

I used useEffect to load the technology data from the JSON file when the page loads

v) Why does every item in a .map() list need a unique key prop?

- Answer: React needs a unique key for identify to each item in a list. It helps react understand which item is changed , which items has been added and which item been remove. It can update the UI efficiently.

vi) What is conditional rendering? Show one place you used it (example: the empty stack message).

- Answer: Conditional rendering means showing different UI based on a condition. In this project it is used in many places. Like-
  {addStack.length === 0
  ? `No technologies selected yet.`
  : `${addStack.length} Technology Selected`}

  so, when addStack's value is 0 then 'No technologies selected yet.' message is displayed and otherwise length show in display.

v) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- Answer: A parent component pass data to a child component using props. Using Lifting State Up a child can send data to the parent by using a function from the parent. This is called Lifting State Up

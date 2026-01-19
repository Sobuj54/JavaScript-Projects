# 20 JavaScript Web Projects: Portfolio

This repository tracks my journey through the **"20 JavaScript Web Projects"** course. Each project is built with Vanilla JS, focusing on high-performance DOM manipulation and modern API integration.

---

## Project Quick Links

_Use this table for quick navigation to the live demos and code._

| #   | Project Name           | Status |                    Live Demo                     |
| :-- | :--------------------- | :----: | :----------------------------------------------: |
| 01  | **Quote Generator**    |   ✅   | [Live ](https://quote-generato-web.netlify.app/) |
| 02  | **Infinite Scroll**    |   ✅   |  [Live ](https://infinite-scrool.netlify.app/)   |
| 03  | **Picture-in-Picture** |   ⏳   |                    _Pending_                     |

---

## Project Gallery

_Detailed look at each project with high-resolution screenshots._

### 01. Quote Generator

Built a dynamic quote engine that fetches data from a REST API and features custom social sharing.

![Quote Generator Screenshot](./screenshots/quote-generator.png)

**Key Learnings:**

- Implementing a "Loading Spinner" to improve UX during API calls.
- Using the Twitter Intent API to share text dynamically.
- Logic to handle "Long Quotes" by shrinking the font size automatically.

---

### 02. Infinite Scroll

Created a seamless image browsing experience similar to Pinterest, powered by the Unsplash API.

![Infinite Scroll Screenshot](./screenshots/infinte-loop.png)

**Key Learnings:**

- Efficiently managing network requests using `async/await`.
- Calculating scroll position logic: `window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000`.
- Creating a custom "Loader" that disappears only after the images have fully rendered.

---

### 03. Picture-in-Picture (Coming Soon)

_Placeholder for the upcoming project logic and screenshot._

---

## Tech & Tools

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **APIs Used:** Unsplash API, Quote API, Screen Capture API
- **Environment:** VS Code, Git, GitHub Pages

## How to Run Locally

1. Clone this repo:
   `https://github.com/Sobuj54/JavaScript-Projects.git`

2. Each folder is a standalone project. Simply open the `index.html` file using **Live Server**.

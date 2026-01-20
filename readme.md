# 20 JavaScript Web Projects: Portfolio

This repository tracks my journey through the **"20 JavaScript Web Projects"** course. Each project is built with Vanilla JS, focusing on high-performance DOM manipulation and modern API integration.

---

## Project Quick Links

_Use this table for quick navigation to the live demos and code._

| #   | Project Name           | Status |                      Live Demo                       |
| :-- | :--------------------- | :----: | :--------------------------------------------------: |
| 01  | **Quote Generator**    |   ✅   |   [Live ](https://quote-generato-web.netlify.app/)   |
| 02  | **Infinite Scroll**    |   ✅   |    [Live ](https://infinite-scrool.netlify.app/)     |
| 03  | **Picture-in-Picture** |   ✅   | [Live ](https://picture-in-picture-web.netlify.app/) |
| 04  | **Joke Teller**        |   ✅   |    [Live ](https://joke-teller-web.netlify.app/)     |
| 05  | **Light/Dark Mode**    |   ✅   |  [Live ](https://light-dark-mode-web.netlify.app/)   |
| 06  | **Animated Template**  |   ⏳   |                      _Pending_                       |

---

## Project Gallery

_Detailed look at each project with high-resolution screenshots._

### 01. Quote Generator

Built a dynamic quote engine that fetches data from a REST API and features custom social sharing.
![Quote Generator Screenshot](./screenshots/quote-generator.png)
**Key Learnings:**

- Implementing a "Loading Spinner" to improve UX during API calls.
- Logic to handle "Long Quotes" by shrinking the font size automatically.

---

### 02. Infinite Scroll

Created a seamless image browsing experience similar to Pinterest, powered by the Unsplash API.
![Infinite Scroll Screenshot](./screenshots/infinte-loop.png)
**Key Learnings:**

- Efficiently managing network requests using `async/await`.
- Calculating scroll position logic to trigger new content before the user reaches the bottom.

---

### 03. Picture-in-Picture

Developed a utility that allows users to select a video stream and display it in a floating "always-on-top" window.
![Picture-in-Picture Screenshot](./screenshots/picture-in-picture.png)
**Key Learnings:**

- **Screen Capture API:** Using `navigator.mediaDevices.getDisplayMedia()`.
- **Picture-in-Picture API:** Leveraging browser-native window detachment.

---

### 04. Joke Teller

An interactive app that fetches jokes and uses a Text-to-Speech API to read them aloud.
![Joke Teller Screenshot](./screenshots/joke-teller.png)
**Key Learnings:**

- **VoiceRSS API:** Converting string data into spoken audio.
- **UI State Management:** Disabling buttons during audio playback to prevent logic conflicts.

---

### 05. Light/Dark Mode

A modern theme-switching application that remembers user preferences across sessions using local browser storage.
![Light/Dark Mode Screenshot](./screenshots/dark-light-mode.png)

**Key Learnings:**

- **LocalStorage API:** Saving and retrieving the user's theme preference so it persists after a page refresh.
- **Dynamic Attribute Manipulation:** Using `document.documentElement.setAttribute('data-theme', 'dark')` to trigger global CSS variable changes.
- **Event Listeners:** Syncing a checkbox toggle with the overall UI state (icons, text, and images).

---

### 06. Animated Template (Coming Soon)

_Placeholder for the upcoming project logic and screenshot._

---

## Tech & Tools

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Concepts:** DOM Manipulation, LocalStorage, Async/Await, Web APIs
- **Environment:** VS Code, Git, Netlify (Hosting)

## How to Run Locally

1. Clone this repo:
   `https://github.com/Sobuj54/JavaScript-Projects.git`
2. Each folder is a standalone project. Simply open the `index.html` file using **Live Server**.

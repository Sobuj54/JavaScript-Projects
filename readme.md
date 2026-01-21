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
| 06  | **Animated Template**  |   ✅   |   [Live ](https://template-animated.netlify.app/)    |
| 07  | **Navigation Nation**  |   ✅   | [Live ](https://navigation-nation-web.netlify.app/)  |
| 08  | **Music Player**       |   ⏳   |                      _Pending_                       |

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

### 03. Picture-in-Picture

Developed a utility that allows users to select a video stream and display it in a floating "always-on-top" window.
![Picture-in-Picture Screenshot](./screenshots/picture-in-picture.png)
**Key Learnings:**

- **Screen Capture API:** Using `navigator.mediaDevices.getDisplayMedia()` to capture screen video.
- **Picture-in-Picture API:** Triggering `requestPictureInPicture()` to detach the video window from the browser.

---

### 04. Joke Teller

An interactive app that fetches jokes and uses a Text-to-Speech API to read them aloud, featuring a custom-designed robot character.
![Joke Teller Screenshot](./screenshots/joke-teller.png)
**Key Learnings:**

- **VoiceRSS API:** Integrating a Text-to-Speech SDK to convert string data into spoken audio.
- **API Coordination:** Fetching data from the Joke API and passing the resulting string into the Voice function.
- **UI State Management:** Disabling the "Tell Me A Joke" button while the audio is playing to prevent overlapping speech and API spam.

---

### 05. Light/Dark Mode

A highly practical project focusing on UI customization and data persistence. This app allows users to toggle between light and dark themes with the setting being remembered even after a page refresh.
![Light/Dark Mode Screenshot](./screenshots/dark-light-mode.png)

**Key Learnings:**

- **LocalStorage API:** Using `localStorage.setItem()` and `getItem()` to save the user's preference in the browser's local memory.
- **Data Attributes:** Dynamically updating the `data-theme` attribute on the `document.documentElement` to trigger CSS variable shifts.
- **CSS Variables:** Mastering `:root` variables to create a clean, maintainable theme-switching system.
- **Conditional Logic:** Writing a "Switch Theme" function that updates icons, text, and image assets simultaneously based on the toggle state.

---

### 06. Animated Template

A high-quality, responsive landing page featuring modern entrance animations that trigger as the user scrolls down the page. This project focuses on the intersection of JavaScript logic and CSS design.
![Animated Template Screenshot](./screenshots/animated-template.png)

**Key Learnings:**

- **On-Scroll Animations:** Implementing logic to trigger CSS animations exactly when elements enter the viewport.
- **AOS (Animate On Scroll) Library:** Integrating and customizing a professional animation library to manage complex transition timings.
- **UX Design Principles:** Balancing movement and speed to ensure animations enhance the site experience without distracting the user.

---

### 07. Navigation Nation

A sleek, full-screen overlay navigation menu with staggered entrance animations. This project demonstrates how to coordinate complex CSS transitions using JavaScript class manipulation.

![Navigation Nation Screenshot](./screenshots/navigation-nation.png)

**Key Learnings:**

- **CSS Staggered Animations:** Applying incremental delays to list items so they appear one by one for a polished UI feel.
- **Class Manipulation:** Efficiently using `classList.replace()`, `add()`, and `remove()` to toggle navigation states between "slide-in" and "slide-out."
- **Overlay Logic:** Creating a responsive, mobile-friendly navigation overlay that doesn't interfere with the main page content when closed.
- **Dry Code (DRY):** Writing a reusable `toggleNav()` function to handle all animation logic in one place.

---

### 08. Music Player (Coming Soon)

_Placeholder for the upcoming project logic and screenshot._

---

## Tech & Tools

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **APIs & Libraries:** Unsplash, Quote API, Screen Capture, VoiceRSS, AOS Library
- **Key Concepts:** DOM Manipulation, Local Storage, Async/Await, CSS Variables, Scroll-based Events, Staggered Animations
- **Environment:** VS Code, Git, Netlify (Hosting)

## How to Run Locally

1. Clone this repo:
   `https://github.com/Sobuj54/JavaScript-Projects.git`
2. Each folder is a standalone project. Simply open the `index.html` file using **Live Server**.

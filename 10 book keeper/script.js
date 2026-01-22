const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = [];

//  show modal , focus on input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}

// modal event listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
modal.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : "";
});

// validate form
function validate(name, url) {
  const expression = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i",
  );
  if (!name || !url) {
    alert("submit values for both fields.");
    return false;
  }

  if (!expression.test(url)) {
    alert("please provide valid url");
    return false;
  }

  return true;
}

// build bookmarks DOM
function buildBookmarks() {
  // remove all bookmark elements
  bookmarksContainer.textContent = "";
  // build items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    // item
    const item = document.createElement("div");
    item.classList.add("item");
    // close icon
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute("title", "Delete bookmark");
    closeIcon.setAttribute("onclick", `deleteBookmark('${url}')`);
    // favicon / link container
    const linkInfo = document.createElement("div");
    linkInfo.classList.add("name");
    // favicon
    const favicon = document.createElement("img");
    favicon.setAttribute("src", `favicon.png`);
    favicon.setAttribute("alt", "favicon");
    // link
    const link = document.createElement("a");
    link.setAttribute("href", `${url}`);
    link.setAttribute("target", "_blank");
    link.textContent = name;

    // append to bookmarks container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

// fetch bookmarks
function fetchBookmarks() {
  // get bookmark from local storage if available
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    // create bookmarks array in localstorage
    bookmarks = [
      {
        name: "google",
        url: "https://google.com",
      },
    ];

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  buildBookmarks();
}

// delete bookmark
function deleteBookmark(url) {
  let found = -1;
  bookmarks.forEach((bookmark, i) => {
    if (bookmark.url === url) {
      found = i;
    }
  });

  if (found !== -1) {
    bookmarks.splice(found, 1);
    // update bookmarks in localstorage, repopulate DOM
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
  }
}

// handle data from form
function storeBookmark(e) {
  e.preventDefault();
  const name = websiteNameEl.value;
  let url = websiteUrlEl.value;
  if (!url.includes("http://", "https://")) {
    url = `https://${url}`;
  }

  if (!validate(name, url)) {
    return false;
  }
  const bookmark = {
    name,
    url,
  };
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
  bookmarkForm.reset();
  websiteNameEl.focus();
}

// event listener
bookmarkForm.addEventListener("submit", storeBookmark);

// on load, fetch bookmarks
fetchBookmarks();

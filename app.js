/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// ================ TRSUTED-WORLWIDE ACCORDION =============================

// Select all accordions and list items
const accordians = document.querySelectorAll(".accordian");
const listItems = document.querySelectorAll(
  ".trusted-worldwide .content .content-text ul li"
);

// Function to open one accordion by default (the third one here)
window.addEventListener("DOMContentLoaded", () => {
  const defaultAccordian = accordians[2]; // Example: 3rd accordion
  const defaultAnswer = defaultAccordian.querySelector(".answer");
  const defaultLi = defaultAccordian.closest("li");

  defaultAnswer.classList.add("active");
  defaultAnswer.style.maxHeight = defaultAnswer.scrollHeight + "px"; // Set maxHeight to its scroll height
  defaultLi.classList.add("flex-start"); // Change alignment
  defaultLi.classList.add("active"); // Apply new active styles
});

// Add event listener to each accordion
accordians.forEach((accordian) => {
  const answer = accordian.querySelector(".answer");
  const listItem = accordian.closest("li");

  accordian.addEventListener("click", () => {
    if (answer.classList.contains("active")) {
      // If the accordion is already open, close it with smooth transition
      answer.classList.remove("active");
      answer.style.maxHeight = null; // Collapse the accordion
      listItem.classList.remove("flex-start");
      listItem.classList.remove("active"); // Remove active styles
    } else {
      // Close all other accordions before opening the clicked one
      accordians.forEach((acc) => {
        const otherAnswer = acc.querySelector(".answer");
        const otherListItem = acc.closest("li");
        otherAnswer.classList.remove("active");
        otherAnswer.style.maxHeight = null; // Collapse all other accordions
        otherListItem.classList.remove("flex-start");
        otherListItem.classList.remove("active"); // Remove active styles from other accordions
      });

      // Open the clicked accordion smoothly
      answer.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px"; // Set maxHeight dynamically
      listItem.classList.add("flex-start");
      listItem.classList.add("active"); // Apply new active styles
    }
  });
});

// ======================= FAQs ACCORDION ===============================

const faqAccordians = document.querySelectorAll(".faq-accordian");

// Open the first accordion by default
if (faqAccordians.length > 0) {
  const firstPlusIcon = faqAccordians[0].querySelector(".plus-icon");
  const firstAnswer = faqAccordians[0].querySelector(".answer");
  firstPlusIcon.classList.add("active");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
}

faqAccordians.forEach((faqAccordian) => {
  const plusIcon = faqAccordian.querySelector(".plus-icon"); // Correct class selector for the icon
  const answer = faqAccordian.querySelector(".answer");

  faqAccordian.addEventListener("click", () => {
    // If the accordion is open, close it
    if (plusIcon.classList.contains("active")) {
      plusIcon.classList.remove("active");
      answer.style.maxHeight = null;
    }
    // Otherwise, close other accordions and open the clicked one
    else {
      // Close all other accordions
      faqAccordians.forEach((faq) => {
        const otherPlusIcon = faq.querySelector(".plus-icon");
        const otherAnswer = faq.querySelector(".answer");
        otherPlusIcon.classList.remove("active");
        otherAnswer.style.maxHeight = null;
      });

      // Open the clicked accordion
      plusIcon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

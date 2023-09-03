let faqBlock = document.querySelectorAll(".faqBlock");
let sub = document.querySelectorAll(".subParagraph");

faqBlock.forEach((item) => {
  let selected = null;
  const arrows = item.querySelector(".arrow");
  const answer = item.querySelector(".subParagraph");
  arrows.addEventListener("click", () => {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

let allArrows = document.querySelectorAll(".arrow");
let faqs = document.querySelectorAll(".faqParagraph");

allArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    // faqs.forEach((faq) => faq.classList.remove("selected"));
    faqs.forEach((faq) => faq.classList.remove("selected"));
    faqs.forEach(() => {
      faqs[index].classList.toggle("selected");
    });
  });
});

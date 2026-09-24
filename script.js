```javascript
// زر القائمة في الموبايل
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// إغلاق القائمة بعد الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// السنة الحالية في الفوتر
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
```

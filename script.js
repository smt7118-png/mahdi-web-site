const button = document.getElementById("myButton");
const surpriseMessage = document.getElementById("surpriseMessage");

let clickCount = 0;

const messages = [
    "میخای ببینیش؟",
    "مطمئنی؟",
    "😂😂بیشتر تلاش کن",
    "پس میخای ببینیش؟؟",
    "😁😁دوباره تلاش کن",
    "😊😊حالا کلیک کن"
];

button.addEventListener("click", function() {

    clickCount++;

    // تغییر متن دکمه
    button.innerHTML = messages[clickCount];

    // اتفاقات بعد از کلیک ششم
    if (clickCount === 6) {

        button.style.display = "none";

        document.body.classList.add("celebration");

        surpriseMessage.style.display = "block";

        setTimeout(function() {
            surpriseMessage.classList.add("show");
        }, 500);

        return;
    }

    const width = button.offsetWidth;
    const height = button.offsetHeight;

    const margin = 40;

    const positions = [

        // کلیک اول: پایین سمت چپ
        { x: margin, y: window.innerHeight - height - margin },

        // کلیک دوم: بالا سمت چپ
        { x: margin, y: margin },

        // کلیک سوم: پایین سمت راست
        { x: window.innerWidth - width - margin, y: window.innerHeight - height - margin },

        // کلیک چهارم: بالا سمت راست
        { x: window.innerWidth - width - margin, y: margin },

        // کلیک پنجم: وسط صفحه
        { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    ];

    const position = positions[clickCount - 1];

    button.style.transform = "none";
    button.style.left = position.x + "px";
    button.style.top = position.y + "px";

    // تنظیم دقیق مرکز صفحه
    if (clickCount === 5) {
        button.style.transform = "translate(-50%, -50%)";
    }

});
const messages = [
    "Thank you for being so patient with me.",
    "With you, even ordinary days feel special.",
    "I'm grateful for you, more than I usually say.",
    "You make me a better person.",
    "Home is wherever you are.",
    "I like the version of me that I am with you.",
    "Thanks for being there, even on my not-so-good days.",
    "You make hard days feel lighter.",
    "Happy Girlfriend Day! I hope today is full of good things for you. 🌷"
];

const message = document.getElementById("message");
const button = document.getElementById("open");

// Simpan tampilan awal dari HTML supaya bisa dikembalikan nanti
const initialText = message.textContent;
const initialLabel = button.textContent;
const nextLabel = "Next message";
const RESET_DELAY = 6000; // lama pesan terakhir tampil (ms)

let index = -1;

// Show the first view
requestAnimationFrame(() => message.classList.add("show"));

function showMessage(text) {
    message.classList.remove("show");
    setTimeout(() => {
        message.textContent = text;
        message.classList.add("show");
    }, 300);
}

button.addEventListener("click", () => {
    index++;
    showMessage(messages[index]);
    petals(8);

    if (index === messages.length - 1) {
        // Pesan terakhir: sembunyikan tombol, lalu kembali ke tampilan awal
        button.style.visibility = "hidden";
        setTimeout(() => {
            showMessage(initialText);
            button.textContent = initialLabel;
            button.style.visibility = "visible";
            index = -1;
        }, RESET_DELAY);
    } else {
        button.textContent = nextLabel;
    }
});

function petals(count) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement("span");
        p.className = "petal";
        p.textContent = "🌷";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 5 + Math.random() * 3 + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 8000);
    }
}